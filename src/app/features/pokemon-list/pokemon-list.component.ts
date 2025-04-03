import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime, Observable, Subject, takeUntil, tap } from 'rxjs';
import { PokemonService } from 'src/app/core/services/pokemon.service';

@Component({
  selector: 'pk-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit, OnDestroy {
 
  isInitialLoad!: boolean;
  isLoading: boolean = false;
  isSearchLoading: boolean = false;
  isSearching!: boolean;
  pokemons$!: Observable<any>;
  searchForm!: FormGroup;

  private destroyed$ = new Subject();

  constructor(
    private formBuilder: FormBuilder,
    private pokemonService: PokemonService
  ) {}

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    if (!this.isSearching) {
      const scrollPosition = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
  
      if (scrollPosition + clientHeight >= scrollHeight - 1) {
        this.fetchPokemons();
      }
    }
    
  }

  ngOnInit(): void {
    this.initSearchForm();

    this.isInitialLoad = true;
    this.fetchPokemons();
    this.pokemons$ = this.pokemonService.getPokemons$();
  }

  ngOnDestroy(): void {
    this.destroyed$.next(null);
    this.destroyed$.complete();
  }

  private fetchPokemons(): void {
    this.isLoading = true;
    this.pokemonService.fetchPokemons()
      .pipe(takeUntil(this.destroyed$))
      .subscribe({
        next: () => {
          this.isLoading = false;
          this.isInitialLoad = false;
        }
      });
  }

  private initSearchForm(): void {
    this.searchForm = this.formBuilder.group({
      search: []
    });

    this.searchForm.get('search')?.valueChanges
      .pipe(
        debounceTime(300),
        takeUntil(this.destroyed$)
      ).subscribe({
        next: (searchTerm: string) => {
          this.isSearchLoading = true;

          if (searchTerm.length === 0) {
            this.pokemonService.resetPokemons();
            this.fetchPokemons();
            this.isSearching = false;
            this.isSearchLoading = false;
            return;
          }
         
          this.isSearching = true;
          this.pokemonService.searchPokemon(searchTerm)
            .pipe(takeUntil(this.destroyed$))
            .subscribe({
              next: () => this.isSearchLoading = false
            })
        }
      })

  }
  
}
