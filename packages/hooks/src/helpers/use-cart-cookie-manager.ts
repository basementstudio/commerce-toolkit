import Cookies from 'js-cookie'
import * as React from 'react'

import { isClient } from './misc'

export const useCartCookieManager = (key: string) => {
  return React.useMemo(() => {
    return {
      set: (id: string) => {
        if (!isClient) return
        Cookies.set(`${key}-cart-id`, id, {
          sameSite: 'strict',
          secure: true,
          expires: 365 // one year
        })
      },
      get: () => {
        if (!isClient) return
        return Cookies.get(`${key}-cart-id`)
      },
      clear: () => {
        if (!isClient) return
        return Cookies.remove(`${key}-cart-id`)
      }
    }
  }, [key])
}
