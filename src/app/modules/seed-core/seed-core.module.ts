import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeedCoreRoutingModule } from './seed-core-routing.module';
import { SeedCoreComponent } from './seed-core.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    SeedCoreComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    SeedCoreRoutingModule
  ]
})
export class SeedCoreModule { }
