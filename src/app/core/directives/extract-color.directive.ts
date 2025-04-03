import { Directive, ElementRef, Input, OnChanges, OnInit, Renderer2, SimpleChanges } from '@angular/core';
import { extractColors } from "extract-colors";
import hexToRgba from 'hex-to-rgba';

enum ElementType {
  TEXT = 'text',
  PROGRESS = 'progress'
}

@Directive({
  selector: '[pkExtractColor]'
})
export class ExtractColorDirective implements OnInit, OnChanges {

  @Input() imgSrc!: string;
  @Input() type!: string;

  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['imgSrc'] && this.imgSrc) {
      extractColors(this.imgSrc, { distance: 0.78 })
        .then((colors) => this.setColor(colors[0].hex))
        .catch(console.error);
    }
  }

  private setColor(color: string): void {
    const container = this.element.nativeElement;

    if (this.type === ElementType.TEXT) {
      this.renderer.setStyle(container, 'color', color);
      return;
    }

    if (this.type === ElementType.PROGRESS) {
      const fill = container.querySelector('.mat-progress-bar-fill');
      fill.style.setProperty('--pseudo-after-color', color);
      return;
    }

    this.renderer.setStyle(container, 'background-color', hexToRgba(color, 0.6));
  }
}
