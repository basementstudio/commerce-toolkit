import * as React from 'react'

import { getCartLocalStorageManager } from './local-storage'

export const useCartLocalStorage = (key: string) => {
  const cartLocalStorage = React.useMemo(() => {
    return getCartLocalStorageManager(key)
  }, [key])

  return cartLocalStorage
}
