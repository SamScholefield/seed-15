import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeedCoreRoutingModule } from './seed-core-routing.module';
import { SeedCoreComponent } from './seed-core.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LeftDrawerComponent } from './left-drawer/left-drawer.component';


@NgModule({
  declarations: [
    SeedCoreComponent,
    PageNotFoundComponent,
    HeaderComponent,
    LeftDrawerComponent

  ],
  imports: [
    CommonModule,
    SeedCoreRoutingModule,
    MatToolbarModule
  ],
  exports: [HeaderComponent, LeftDrawerComponent]
})
export class SeedCoreModule { }
