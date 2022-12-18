import { Component } from '@angular/core'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
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
  constructor(private appStore: ApplicationStateRepository) {
    this.stateSubscription()
  }

  private stateSubscription(): void {
    this.appStore.appState$.pipe(untilDestroyed(this)).subscribe(state => {
      this.isLeftDrawerOpen = state.leftDrawerOpen
    })
  }
}
