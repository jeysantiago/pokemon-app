import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'pk-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() name!: string;
  @Input() imgSrc!: string;

  @Output() cardClick = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {}

  onClick(): void {
    this.cardClick.emit();
  }
}
