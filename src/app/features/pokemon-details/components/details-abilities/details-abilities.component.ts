import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Pokemon } from 'src/app/core/models/pokemon.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'pk-details-abilities',
  templateUrl: './details-abilities.component.html',
  styleUrls: ['./details-abilities.component.scss']
})
export class DetailsAbilitiesComponent implements OnInit, OnChanges {

  @Input() pokemon!: Pokemon;

  imgSrc!: string;
  
  constructor() { }

  ngOnInit(): void {}
  
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['pokemon'] && this.pokemon) {
      this.imgSrc = `${environment.imageBaseUrl}/${this.pokemon.id}.png`;
    }
  }

}
