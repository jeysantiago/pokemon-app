import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonDetailsRoutingModule } from './pokemon-details-routing.module';
import { PokemonDetailsComponent } from './pokemon-details.component';
import { DetailsHeaderComponent } from './components/details-header/details-header.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DetailsImageComponent } from './components/details-image/details-image.component';
import { CoreModule } from 'src/app/core/core.module';
import { DetailsStatsComponent } from './components/details-stats/details-stats.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { DetailsAbilitiesComponent } from './components/details-abilities/details-abilities.component';
import { DetailsEvolutionComponent } from './components/details-evolution/details-evolution.component';

@NgModule({
  declarations: [
    PokemonDetailsComponent,
    DetailsHeaderComponent,
    DetailsImageComponent,
    DetailsStatsComponent,
    DetailsAbilitiesComponent,
    DetailsEvolutionComponent
  ],
  imports: [
    CommonModule,
    PokemonDetailsRoutingModule,
    SharedModule,
    CoreModule,
    MaterialModule
  ]
})
export class PokemonDetailsModule { }
