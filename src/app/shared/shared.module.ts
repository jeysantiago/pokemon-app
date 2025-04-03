import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { CoreModule } from '../core/core.module';
import { TypePillComponent } from './components/type-pill/type-pill.component';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  declarations: [
    CardComponent,
    TypePillComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    CoreModule
  ],
  exports: [
    CardComponent,
    TypePillComponent,
    LoadingComponent
  ]
})
export class SharedModule { }
