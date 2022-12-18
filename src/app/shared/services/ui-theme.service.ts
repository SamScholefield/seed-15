import { OverlayContainer } from '@angular/cdk/overlay'
import { HostBinding, Injectable } from '@angular/core'
import { ApplicationStateRepository } from '../../state/application.repository'
import { StoreKey, ThemeKey } from '../enums'

@Injectable({
  providedIn: 'root',
})
export class UiThemeService {
  @HostBinding('class') componentCssClass: any
  constructor(public overlayContainer: OverlayContainer, private appStore: ApplicationStateRepository) {}

  themeChange(value: ThemeKey | null): void {
    if (value === ThemeKey.DARK) {
      this.appStore.updateStore(StoreKey.APPLICATION, {
        isDarkTheme: true,
      })
      document.getElementsByTagName('body')[0].classList.add('dark-theme')
      this.overlayContainer.getContainerElement().classList.remove('light-theme')
      this.overlayContainer.getContainerElement().classList.add('dark-theme')
      this.componentCssClass = 'dark-theme'
    } else {
      this.appStore.updateStore(StoreKey.APPLICATION, {
        isDarkTheme: false,
      })
      document.getElementsByTagName('body')[0].classList.remove('dark-theme')
      this.overlayContainer.getContainerElement().classList.remove('dark-theme')
      this.overlayContainer.getContainerElement().classList.add('light-theme')
      this.componentCssClass = 'light-theme'
    }
  }
}
