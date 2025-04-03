import { NgModule } from '@angular/core';
import { ExtractColorDirective } from './directives/extract-color.directive';
import { DecimetersToFeetPipe } from './pipes/decimeters-to-feet.pipe';
import { HectogramsToKgPipe } from './pipes/hectograms-to-kg.pipe';
import { TypeColorDirective } from './directives/type-color.directive';
import { TextFormatterPipe } from './pipes/text-formatter.pipe';

const pipes = [
  DecimetersToFeetPipe,
  HectogramsToKgPipe,
  TextFormatterPipe
];

const directives = [
  ExtractColorDirective,
  TypeColorDirective
];

@NgModule({
  declarations: [
    ...pipes,
    ...directives
  ],
  imports: [
  
  ],
  exports: [
    ...pipes,
    ...directives
  ]
})
export class CoreModule { }
