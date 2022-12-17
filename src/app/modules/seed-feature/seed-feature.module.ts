import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeedFeatureRoutingModule } from './seed-feature-routing.module';
import { SeedFeatureComponent } from './seed-feature.component';


@NgModule({
  declarations: [
    SeedFeatureComponent
  ],
  imports: [
    CommonModule,
    SeedFeatureRoutingModule
  ]
})
export class SeedFeatureModule { }
