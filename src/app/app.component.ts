import { Component } from '@angular/core'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { TranslateService } from '@ngx-translate/core'
import { ApplicationStateRepository } from './state/application.repository'

@UntilDestroy()
@Component({
  selector: 'seed-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isLeftDrawerOpen!: boolean
  isRightDrawerOpen!: boolean
  hasBackdrop: boolean = false
  title = 'seed-15'
  constructor(private appStore: ApplicationStateRepository, translate: TranslateService) {
    this.stateSubscription()
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en')

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('en')
  }

  private stateSubscription(): void {
    this.appStore.appState$.pipe(untilDestroyed(this)).subscribe(state => {
      this.isLeftDrawerOpen = state.leftDrawerOpen
    })
  }
}
