import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pk-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  @Input() isFixedPos: boolean = true;

  @Input() text!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
