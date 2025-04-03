import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { debounceTime, Subject, takeUntil } from 'rxjs';
import { Pokemon } from 'src/app/core/models/pokemon.model';
import { PokemonService } from 'src/app/core/services/pokemon.service';

@Component({
  selector: 'pk-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent implements OnInit, OnDestroy {

  isLoading: boolean = false;
  pokemon!: Pokemon;
  pokemonName!: string;
 

  private destroyed$ = new Subject();

  constructor(
    private activatedRoute: ActivatedRoute,
    private pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(takeUntil(this.destroyed$))
      .subscribe({
        next: (params) => {
          this.pokemonName = params['name'];
          this.getPokemonDetails(params['name']);
        }
      });
  }

  ngOnDestroy(): void {
    this.destroyed$.next(null);
    this.destroyed$.complete();
  }

  private getPokemonDetails(name: string): void {
    this.isLoading = true;
    this.pokemonService.fetchPokemonByName(name)
      .pipe(takeUntil(this.destroyed$))
      .subscribe({
        next: (pokemon) => {
          this.pokemon = pokemon;
          console.log(this.pokemon);
          this.isLoading = false;
        },
        error: () => {
          this.isLoading = false;
        }
      });
  }
}
