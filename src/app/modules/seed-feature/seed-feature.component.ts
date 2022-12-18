import { Component } from '@angular/core'
import { SeedAppRouting } from 'src/app/routes/app.routing'

@Component({
  selector: 'seed-feature',
  templateUrl: './seed-feature.component.html',
  styleUrls: ['./seed-feature.component.scss'],
})
export class SeedFeatureComponent {
  AppRouting = SeedAppRouting
}
