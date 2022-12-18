import { Component } from '@angular/core'
import { SeedAppRouting } from 'src/app/routes/app.routing'

@Component({
  selector: 'seed-core',
  templateUrl: './seed-core.component.html',
  styleUrls: ['./seed-core.component.scss'],
})
export class SeedCoreComponent {
  AppRouting = SeedAppRouting
}
