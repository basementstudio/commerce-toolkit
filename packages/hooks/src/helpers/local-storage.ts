import { isClient } from './misc'

export function getCartLocalStorageManager(key: string) {
  return {
    set: (id: string) => {
      if (!isClient) return
      window.localStorage.setItem(`${key}-cart-id`, id)
    },
    get: () => {
      if (!isClient) return
      return window.localStorage.getItem(`${key}-cart-id`)
    },
    clear: () => {
      if (!isClient) return
      return window.localStorage.removeItem(`${key}-cart-id`)
    }
  }
}
