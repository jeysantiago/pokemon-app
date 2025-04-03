import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonListRoutingModule } from './pokemon-list-routing.module';
import { PokemonListComponent } from './pokemon-list.component';
import { ListComponent } from './components/list/list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PokemonDetailsModule } from '../pokemon-details/pokemon-details.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    PokemonListComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PokemonListRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class PokemonListModule { }
