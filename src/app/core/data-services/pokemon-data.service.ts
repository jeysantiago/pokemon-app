import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pokemon } from '../models/pokemon.model';
import { GetPokemonResponse } from '../models/get-pokemon-response.model';
import { Species } from '../models/species.model';
import { Ability } from '../models/abilities.model';
import { EvolutionChain } from '../models/evolution-chain.model';
import { NamedUrl } from '../models/named-url.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonDataService {

  private BASE_URL = environment.apiBaseUrl;
  private SEARCH_URL = environment.searchUrl;

  getPokemonsEndpoint = `${this.BASE_URL}/pokemon?limit=15`;

  constructor(
    private httpClient: HttpClient
  ) { }

  fetchPokemons(url: string): Observable<GetPokemonResponse> {
    return this.httpClient.get<GetPokemonResponse>(url);
  }

  fetchPokemonByName(name: string): Observable<Pokemon> {
    return this.httpClient.get<Pokemon>(`${this.BASE_URL}/pokemon/${name}`);
  }

  fetchPokemonSpecies(name: string): Observable<Species> {
    return this.httpClient.get<Species>(`${this.BASE_URL}/pokemon-species/${name}`);
  }

  fetchAbilitiesData(url: string): Observable<Ability> {
    return this.httpClient.get<Ability>(url);
  }

  fetchEvolutionChain(url: string): Observable<EvolutionChain> {
    return this.httpClient.get<EvolutionChain>(url);
  }

  searchPokemon(searchTerm: string): Observable<NamedUrl[]> {
    return this.httpClient.get<NamedUrl[]>(`${this.SEARCH_URL}?name=${searchTerm}`);
  }
}
