import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { SeedCoreRoutingModule } from './seed-core-routing.module'
import { SeedCoreComponent } from './seed-core.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { HeaderComponent } from './header/header.component'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { LeftDrawerComponent } from './left-drawer/left-drawer.component'
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { MatMenuModule } from '@angular/material/menu'
import { TranslateModule } from '@ngx-translate/core'

@NgModule({
  declarations: [SeedCoreComponent, PageNotFoundComponent, HeaderComponent, LeftDrawerComponent],
  imports: [
    CommonModule,
    SeedCoreRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSlideToggleModule,
    MatMenuModule,
    TranslateModule.forChild(),
  ],
  exports: [HeaderComponent, LeftDrawerComponent],
})
export class SeedCoreModule {}
