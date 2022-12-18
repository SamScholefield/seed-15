import { Component } from '@angular/core'
import { MatSlideToggleChange } from '@angular/material/slide-toggle'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { ThemeKey } from 'src/app/shared/enums'
import { UiSideDrawerService } from 'src/app/shared/services/ui-side-drawer.service'
import { UiThemeService } from 'src/app/shared/services/ui-theme.service'
import { ApplicationStateRepository } from 'src/app/state/application.repository'

@UntilDestroy()
@Component({
  selector: 'seed-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isLeftDrawerOpen!: boolean
  isDarkTheme!: boolean
  constructor(
    private appStore: ApplicationStateRepository,
    private sideDrawer: UiSideDrawerService,
    private theme: UiThemeService
  ) {
    this.stateSubscription()
  }

  private stateSubscription(): void {
    this.appStore.appState$.pipe(untilDestroyed(this)).subscribe(state => {
      this.isLeftDrawerOpen = state.leftDrawerOpen

      /** set theme to dark if state.isDarkTheme */
      if (state.isDarkTheme === true) {
        this.theme.themeChange(ThemeKey.DARK)
        this.isDarkTheme = state.isDarkTheme
      }
    })
  }

  public toggleLeftDrawer(): void {
    this.sideDrawer.toggleLeftChange()
  }

  public toggleTheme(event: MatSlideToggleChange): void {
    if (event.checked) {
      this.theme.themeChange(ThemeKey.DARK)
      this.isDarkTheme = true
    } else {
      this.theme.themeChange(ThemeKey.LIGHT)
      this.isDarkTheme = false
    }
  }
}
