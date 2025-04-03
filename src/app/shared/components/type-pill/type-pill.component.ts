import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pk-type-pill',
  templateUrl: './type-pill.component.html',
  styleUrls: ['./type-pill.component.scss']
})
export class TypePillComponent implements OnInit {

  @Input() type: string = '';
  
  constructor() { }

  ngOnInit(): void {
  }

}
