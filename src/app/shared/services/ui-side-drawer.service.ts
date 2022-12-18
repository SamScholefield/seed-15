import { take } from 'rxjs/operators'

import { Injectable } from '@angular/core'

import { StoreKey } from '../enums'
import { ApplicationStateRepository } from '../../state/application.repository'

@Injectable({
  providedIn: 'root',
})
export class UiSideDrawerService {
  constructor(private appStore: ApplicationStateRepository) {
    this.stateSubscription
  }
  private leftOpen!: boolean
  private rightOpen!: boolean

  private stateSubscription(): void {
    this.appStore.appState$.pipe(take(1)).subscribe(state => {
      this.leftOpen = state.leftDrawerOpen
      // this.rightOpen = state.portal.component !== undefined
    })
  }
  get isLeftDrawerOpen(): boolean {
    return this.leftOpen
  }

  public toggleLeftChange = () => {
    if (this.leftOpen) {
      this.appStore.updateStore(StoreKey.APPLICATION, {
        userClosedLeftDrawer: true,
      })
      this.closeLeftDrawer()
    } else {
      this.appStore.updateStore(StoreKey.APPLICATION, {
        userClosedLeftDrawer: false,
      })

      this.openLeftDrawer()
    }
  }

  public closeLeftDrawer(): void {
    if (this.leftOpen === false) {
      return
    }
    this.leftOpen = false
    this.appStore.updateStore(StoreKey.APPLICATION, {
      leftDrawerOpen: this.leftOpen,
    })
  }

  /* UTILITY */
  public closeDrawers(): void {
    this.leftOpen = false
    this.rightOpen = false

    this.appStore.updateStore(StoreKey.APPLICATION, {
      leftDrawerOpen: this.leftOpen,
    })
  }

  public openRightDrawer(): void {
    this.rightOpen = true
  }

  public closeRightDrawer(): void {
    this.rightOpen = false
  }

  public openLeftDrawer(): void {
    this.appStore.appState$.pipe(take(1)).subscribe(state => {
      if (state.userClosedLeftDrawer) {
        return
      } else {
        this.leftOpen = true
        this.appStore.updateStore(StoreKey.APPLICATION, {
          leftDrawerOpen: this.leftOpen,
        })
      }
    })
  }
}
