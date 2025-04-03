import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from 'src/app/core/models/pokemon.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'pk-details-header',
  templateUrl: './details-header.component.html',
  styleUrls: ['./details-header.component.scss']
})
export class DetailsHeaderComponent implements OnInit, OnChanges {

  imgSrc!: string;
  
  @Input() pokemon!: Pokemon;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['pokemon'] && this.pokemon) {
      this.imgSrc = `${environment.imageBaseUrl}/${this.pokemon.id}.png`;
    }
  }

  backToHome(): void {
    this.router.navigate(['/pokemon-list']);
  }
}
