import { Observable } from 'rxjs'

import { Injectable } from '@angular/core'

import { createStore, getRegistry, select, withProps } from '@ngneat/elf'
import { localStorageStrategy, persistState } from '@ngneat/elf-persist-state'
import { DefaultApplicationState } from '../shared/constants/DefaultApplicationState'
import { StoreKey } from '../shared/enums'
import { ApplicationState } from '../shared/models'

/**
 * Initialises the ApplicationStore with defined props and values
 */
const ApplicationStore = createStore(
  { name: StoreKey.APPLICATION },
  withProps<ApplicationState>({
    ...DefaultApplicationState,
  })
)

/**
 * Initialises the ApplicationStore localstorage instance
 */
export const appStoreInstance = persistState(ApplicationStore, {
  key: StoreKey.APPLICATION,
  storage: localStorageStrategy,
})

@Injectable({ providedIn: 'root' })
export class ApplicationStateRepository {
  /**
   * Observable that emits immutable state object
   */
  appState$: Observable<ApplicationState> = ApplicationStore.pipe(select(state => state))

  /**
   * Method that updates existing ApplicationState in store
   * @param storeKey - StoreKey enum
   * @param update - ApplicationState (allows Partial) object
   */
  updateStore(storeKey: StoreKey, update: Partial<ApplicationState>) {
    const store = getRegistry().get(storeKey)
    store?.update(state => ({
      ...state,
      ...update,
    }))
  }

  /**
   * Methods that resets store to DefaultApplicationState
   * @param storeKey - StoreKey enum
   */
  resetStore(storeKey: StoreKey) {
    const store = getRegistry().get(storeKey)
    store?.reset()
  }
}
