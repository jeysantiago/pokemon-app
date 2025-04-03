import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[pkTypeColor]'
})
export class TypeColorDirective implements OnInit {

  @Input() type!: string;
  
  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    const typeColor = this.getTypeColor(this.type);
    this.renderer.setStyle(this.element.nativeElement, 'background-color', typeColor);
  }

  private getTypeColor(type: string): string {
    const typeColors: any = {
      'normal': '#A8A77A',
      'fire': '#EE8130',
      'water': '#6390F0',
      'electric': '#F7D02C',
      'grass': '#7AC74C',
      'ice': '#96D9D6',
      'fighting': '#C22E28',
      'poison': '#A33EA1',
      'ground': '#E2BF65',
      'flying': '#A98FF3',
      'psychic': '#F95587',
      'bug': '#A6B91A',
      'rock': '#B6A136',
      'ghost': '#735797',
      'dragon': '#6F35FC',
      'dark': '#705746',
      'steel': '#B7B7CE',
      'fairy': '#D685AD'
    };

    return typeColors[type.toLowerCase()] || '#fff';
  }

}
