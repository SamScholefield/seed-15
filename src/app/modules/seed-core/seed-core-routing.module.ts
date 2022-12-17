import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { SeedCoreComponent } from './seed-core.component'

const routes: Routes = [{ path: '', component: SeedCoreComponent }]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeedCoreRoutingModule {}
