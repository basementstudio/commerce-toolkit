import Cookies from 'js-cookie'
import * as React from 'react'

import { isClient } from './misc'

export const useCartCookieManager = (
  key: string,
  opts?: Cookies.CookieAttributes
) => {
  return React.useMemo(() => {
    return {
      set: (id: string) => {
        if (!isClient) return
        Cookies.set(key, id, {
          sameSite: 'strict',
          secure: true,
          expires: 365, // one year
          ...opts
        })
      },
      get: () => {
        if (!isClient) return
        return Cookies.get(key)
      },
      clear: () => {
        if (!isClient) return
        return Cookies.remove(key)
      }
    }
  }, [key, opts])
}
