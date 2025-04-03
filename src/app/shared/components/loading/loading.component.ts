import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pk-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

  @Input() text: string = 'Hang tight! We’re just catching them all...';
  constructor() { }

  ngOnInit(): void {
  }

}
