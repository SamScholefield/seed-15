import { Component } from '@angular/core'
import { MatSlideToggleChange } from '@angular/material/slide-toggle'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { TranslateService } from '@ngx-translate/core'
import { StoreKey, ThemeKey } from '../../../shared/enums'
import { UiSideDrawerService } from '../../../shared/services/ui-side-drawer.service'
import { UiThemeService } from '../../../shared/services/ui-theme.service'
import { ApplicationStateRepository } from '../../../state/application.repository'

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
    private theme: UiThemeService,
    private translate: TranslateService
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
      /** set lang from state */
      this.translate.use(state.lang)
    })
  }

  public toggleLeftDrawer(): void {
    console.log('toggle drawer called')
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

  public setLang(locale: string): void {
    console.log(locale)
    this.translate.use(locale)
    this.appStore.updateStore(StoreKey.APPLICATION, {
      lang: locale,
    })
  }

  get currentLang(): string {
    return this.translate.currentLang
  }
}
