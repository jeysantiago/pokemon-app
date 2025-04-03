import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { CoreModule } from '../core/core.module';
import { TypePillComponent } from './components/type-pill/type-pill.component';
import { LoadingComponent } from './components/loading/loading.component';
import { ErrorComponent } from './components/error/error.component';

@NgModule({
  declarations: [
    CardComponent,
    TypePillComponent,
    LoadingComponent,
    ErrorComponent
  ],
  imports: [
    CommonModule,
    CoreModule
  ],
  exports: [
    CardComponent,
    TypePillComponent,
    LoadingComponent,
    ErrorComponent
  ]
})
export class SharedModule { }
