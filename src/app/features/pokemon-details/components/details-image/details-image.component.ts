import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'pk-details-image',
  templateUrl: './details-image.component.html',
  styleUrls: ['./details-image.component.scss']
})
export class DetailsImageComponent implements OnInit, OnChanges {

  imgSrc!: string;

  @Input() id!: number;
  
  constructor() { }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['id'] && this.id) {
      this.imgSrc = `${environment.imageBaseUrl}/${this.id}.png`;
    }
  }


}
