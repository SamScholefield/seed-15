import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { PageNotFoundComponent } from '../modules/seed-core/page-not-found/page-not-found.component'
import { SeedAppRouting } from './app.routing'

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: SeedAppRouting.PATH.HOME,
  },
  {
    path: SeedAppRouting.PATH.HOME,
    loadChildren: () => import('../modules/seed-core/seed-core.module').then(m => m.SeedCoreModule),
  },
  {
    path: SeedAppRouting.PATH.FEATURE,
    loadChildren: () => import('../modules/seed-feature/seed-feature.module').then(m => m.SeedFeatureModule),
  },
  {
    path: '**',
    pathMatch: 'full',
    component: PageNotFoundComponent,
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
