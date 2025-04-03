import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from 'src/app/core/models/pokemon.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'pk-details-evolution',
  templateUrl: './details-evolution.component.html',
  styleUrls: ['./details-evolution.component.scss']
})
export class DetailsEvolutionComponent implements OnInit, OnChanges {

  imgSrc!: string;
  imageBaseUrl: string = environment.imageBaseUrl;

  @Input() pokemon!: Pokemon;
  
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['pokemon'] && this.pokemon) {
      this.imgSrc = `${environment.imageBaseUrl}/${this.pokemon.id}.png`;
    }
  }

  onCardClick(name: string): void {
    this.router.navigate(['/pokemon-list', name]);
  } 
}
