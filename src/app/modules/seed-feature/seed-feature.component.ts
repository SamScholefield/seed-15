import { Component } from '@angular/core'
import { SeedAppRouting } from '../../routes/app.routing'
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core'

@Component({
  selector: 'seed-feature',
  templateUrl: './seed-feature.component.html',
  styleUrls: ['./seed-feature.component.scss'],
})
export class SeedFeatureComponent {
  AppRouting = SeedAppRouting
}
