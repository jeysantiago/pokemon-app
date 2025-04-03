import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
// @ts-ignore
import { environment } from 'src/environments/environment';

@Component({
  selector: 'pk-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() pokemons$!: Observable<any>;

  cols: number = 5;
  imageBaseUrl: string = environment.imageBaseUrl;

  constructor(
    private router: Router
  ) { }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.updateGridCols(window.innerWidth);
  }

  ngOnInit(): void {
    this.updateGridCols(window.innerWidth);
  }

  onCardClick(name: string): void {
    this.router.navigate(['/pokemon-list', name]);
  }

  private updateGridCols(width: number): void {
    if (width <= 600) {
      this.cols = 2;
    } else if (width > 600 && width <= 900) {
      this.cols = 3;
    } else if (width > 900 && width <= 1200) {
      this.cols = 4;
    } else {
      this.cols = 5;
    }
  }
}
