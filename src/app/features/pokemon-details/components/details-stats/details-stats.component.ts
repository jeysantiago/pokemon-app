import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Pokemon } from 'src/app/core/models/pokemon.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'pk-details-stats',
  templateUrl: './details-stats.component.html',
  styleUrls: ['./details-stats.component.scss']
})
export class DetailsStatsComponent implements OnInit, OnChanges {

  imgSrc!: string;

  @Input() pokemon!: Pokemon;

  constructor() { }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['pokemon'] && this.pokemon) {
      this.imgSrc = `${environment.imageBaseUrl}/${this.pokemon.id}.png`;
    }
  }
}
