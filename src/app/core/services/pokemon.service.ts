import { Injectable } from '@angular/core';
import { PokemonDataService } from '../data-services/pokemon-data.service';
import { BehaviorSubject, catchError, concat, concatMap, forkJoin, map, Observable, switchMap, tap, throwError } from 'rxjs';
import { UtilsService } from './utils.service';
import { environment } from 'src/environments/environment';
import { Pokemon, PokemonSummary } from '../models/pokemon.model';
import { GetPokemonResponse } from '../models/get-pokemon-response.model';
import { Ability } from '../models/abilities.model';
import { Chain, EvolutionChain, EvolutionChainSummary } from '../models/evolution-chain.model';
import { Species } from '../models/species.model';
import { EffectEntry } from '../models/effect-entry.model';
import { NamedUrl } from '../models/named-url.model';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  pokemons$: BehaviorSubject<PokemonSummary[]> = new BehaviorSubject([] as PokemonSummary[]);

  constructor(
    private pokemonDataService: PokemonDataService,
    private utilsService: UtilsService
  ) { }

  setPokemons(pokemons: PokemonSummary[]): void {
    this.pokemons$.next(pokemons);
  }

  getPokemons$(): Observable<PokemonSummary[]> {
    return this.pokemons$.asObservable();
  }

  getPokemons(): PokemonSummary[] {
    return this.pokemons$.getValue();
  }

  resetGetPokemonsEndpoint(): void {
    this.pokemonDataService.getPokemonsEndpoint = `${environment.apiBaseUrl}/pokemon?limit=15`;
  }

  resetPokemons(): void {
    this.resetGetPokemonsEndpoint();
    this.setPokemons([]);
  }

  fetchPokemons(): Observable<void> {
    return this.pokemonDataService.fetchPokemons(this.pokemonDataService.getPokemonsEndpoint)
      .pipe(
        map((response: GetPokemonResponse) => {
          this.pokemonDataService.getPokemonsEndpoint = response.next;

          const pokemons = response.results.map((pokemon: NamedUrl) => (
            {
              name: pokemon.name,
              id: this.getIdFromUrl(pokemon.url)
            }
          ));

          this.setPokemons([...this.getPokemons(), ...pokemons]);
        })
      );
  }

  fetchPokemonByName(name: string): Observable<Pokemon> {
    return this.pokemonDataService.fetchPokemonByName(name).pipe(
      switchMap((pokemon: Pokemon) => {
        return forkJoin({
          abilities: this.getAbilitiesDesc$(pokemon),
          species: this.fetchPokemonBySpecies(name)
        }).pipe(
          map(({ abilities, species }) => {
            pokemon.abilities = abilities;
            pokemon.species = species;
            pokemon.descriptions = this.getDescriptions(species);
            return pokemon;
          })
        )
      }),
      switchMap((pokemon: Pokemon) => {
        const chainUrl = pokemon.species.evolution_chain.url;
        return this.fetchEvolutionChain(chainUrl).pipe(
          map((flattendChain) => {
            pokemon.evolution_chain = flattendChain;
            return pokemon;
          })
        )
      })
    );
  }
  searchPokemon(searchTerm: string) {
    return this.pokemonDataService.searchPokemon(searchTerm)
      .pipe(
        map((response: NamedUrl[]) => {
          const searchResult = response.map((item: NamedUrl) => (
            {
              id: this.utilsService.extractPokemonIdFromUrl(item.url),
              name: item.name
            }
          ))
          this.setPokemons([...searchResult]);
        })
      );
  }

  private fetchPokemonBySpecies(name: string): Observable<Species> {
    return this.pokemonDataService.fetchPokemonSpecies(name);
  }

  private fetchAbilitiesData(url: string): Observable<Ability> {
    return this.pokemonDataService.fetchAbilitiesData(url);
  }

  private fetchEvolutionChain(url: string): Observable<EvolutionChainSummary[]> {
    return this.pokemonDataService.fetchEvolutionChain(url).pipe(
      map((pokemonChain: EvolutionChain) => {
        return this.flattenEvolutionChain(pokemonChain.chain);
      })
    );
  }

  private flattenEvolutionChain(chain: Chain, result: EvolutionChainSummary[] = []): EvolutionChainSummary[] {
    // push root species
    result.push({ 
      id: this.utilsService.extractPokemonIdFromUrl(chain.species.url),
      name: chain.species.name
    });

    // If there are evolutions, push it to results
    if (chain.evolves_to.length > 0) {
      chain.evolves_to.forEach((evolution: Chain) => {
        this.flattenEvolutionChain(evolution, result);
      });
    }

    return result;
  }

  private getAbilitiesDesc$(pokemon: Pokemon): Observable<Ability[]> {
    return forkJoin(
      pokemon.abilities.map((pokemonAbility: Ability) => {
        return this.fetchAbilitiesData(pokemonAbility.ability.url).pipe(
          map((ability: Ability) => {
            pokemonAbility.ability.description = ability.effect_entries.filter((entry: EffectEntry) => {
              return entry.language.name === 'en';
            })[0]?.effect;
            return pokemonAbility;
          })
        )
      })
    );
  }

  private getDescriptions(species: Species): Array<string> {
    return [
      species.flavor_text_entries[1].flavor_text,
      species.flavor_text_entries[2].flavor_text,
      species.flavor_text_entries[3].flavor_text
    ];
  }

  private getIdFromUrl(url: string): number {
    return this.utilsService.extractPokemonIdFromUrl(url);
  }
}
