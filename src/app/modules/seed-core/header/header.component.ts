import { Component } from '@angular/core'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { SideDrawerService } from 'src/app/shared/services/ui-side-drawer.service'
import { ApplicationStateRepository } from 'src/app/state/application.repository'

@UntilDestroy()
@Component({
  selector: 'seed-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isLeftDrawerOpen!: boolean

  constructor(private appStore: ApplicationStateRepository, private sideDrawerService: SideDrawerService) {
    this.stateSubscription()
  }

  private stateSubscription(): void {
    this.appStore.appState$.pipe(untilDestroyed(this)).subscribe(state => {
      this.isLeftDrawerOpen = state.leftDrawerOpen
    })
  }

  public toggleLeftDrawer(): void {
    this.sideDrawerService.toggleLeftChange()
  }
}
