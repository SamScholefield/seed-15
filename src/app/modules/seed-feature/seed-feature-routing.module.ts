import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { SeedFeatureComponent } from './seed-feature.component'

const routes: Routes = [{ path: '', component: SeedFeatureComponent }]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeedFeatureRoutingModule {}
