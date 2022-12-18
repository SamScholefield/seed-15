import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { SeedFeatureRoutingModule } from './seed-feature-routing.module'
import { SeedFeatureComponent } from './seed-feature.component'
import { MatButtonModule } from '@angular/material/button'
import { TranslateModule } from '@ngx-translate/core'

@NgModule({
  declarations: [SeedFeatureComponent],
  imports: [CommonModule, SeedFeatureRoutingModule, MatButtonModule, TranslateModule.forChild()],
})
export class SeedFeatureModule {}
