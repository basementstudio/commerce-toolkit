import React, { createContext, useCallback, useContext, useMemo } from 'react'
import useSWR from 'swr'

import { ToggleState, useToggleState } from '../../../hooks/use-toggle-state'
import { formatError } from '../../utils'
import { storefrontEvents } from './events'
import { CartFragment, Sdk } from './generated'

type LineItem = { merchandiseId: string; quantity: number }

type Context = {
  onAddLineItem: (params: {
    merchandiseId: string
    quantity: number
  }) => Promise<void>
  onUpdateLineItem: (params: {
    merchandiseId: string
    quantity: number
  }) => Promise<void>
  onRemoveLineItem: (params: { merchandiseId: string }) => Promise<void>
  cart: CartFragment | undefined | null
  cartItemsCount: number | undefined
  cartToggleState: ToggleState
}

const Context = createContext<Context | undefined>(undefined)

type InternalContextProviderProps = {
  client: Sdk
  appCartId: string
  children?: React.ReactNode
}

const InternalContextProvider = ({
  children,
  client,
  appCartId
}: InternalContextProviderProps) => {
  const cartToggleState = useToggleState()
  const { data: cart, mutate } = useSWR('cart', cartFetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false
  })

  const cartLocalStorage = useMemo(
    () => ({
      set: (id: string) => {
        localStorage.setItem(`${appCartId}-cart-id`, id)
      },
      get: () => localStorage.getItem(`${appCartId}-cart-id`),
      clear: () => localStorage.removeItem(`${appCartId}-cart-id`)
    }),
    [appCartId]
  )

  async function cartFetcher() {
    try {
      const id = cartLocalStorage.get()
      if (!id) return null
      const { cart } = await client.FetchCart({ id })
      if (cart === null) {
        cartLocalStorage.clear()
      }
      return cart
    } catch (error) {
      return undefined
    }
  }

  const createCart = useCallback(
    async (lines?: LineItem[]): Promise<CartFragment | null | undefined> => {
      try {
        const data = lines
          ? await client.CreateCartWithLines({ lines })
          : await client.CreateCart()

        const cart = data.cartCreate?.cart
        const cartId = cart?.id

        mutate(cart, false)
        cartLocalStorage.set(cartId ?? '')

        storefrontEvents.emit('createCartSuccess', cart)
        return cart
      } catch (error) {
        storefrontEvents.emit('createCartError', formatError(error))
        return null
      }
    },
    [cartLocalStorage, client, mutate]
  )

  const onAddLineItem = useCallback(
    async ({
      merchandiseId,
      quantity
    }: {
      merchandiseId: string
      quantity: number
    }) => {
      try {
        let cart: CartFragment | undefined | null
        const localStorageCheckoutId = cartLocalStorage.get()
        if (!localStorageCheckoutId) {
          // create new cart
          cart = await createCart([{ merchandiseId, quantity }])
        } else {
          const { cartLinesAdd } = await client.AddLineItem({
            cartId: localStorageCheckoutId,
            lines: [{ merchandiseId, quantity }]
          })
          cart = cartLinesAdd?.cart
        }

        if (cart) {
          mutate(cart, false)
        }

        storefrontEvents.emit('addLineItemSuccess', cart)
      } catch (error) {
        storefrontEvents.emit('addLineItemError', formatError(error))
      }
    },
    [cartLocalStorage, client, createCart, mutate]
  )

  const onUpdateLineItem = useCallback(
    async ({
      merchandiseId,
      quantity
    }: {
      merchandiseId: string
      quantity: number
    }) => {
      try {
        const id = cartLocalStorage.get()
        if (!id) return
        const { cartLinesUpdate } = await client.UpdateLineItem({
          cartId: id,
          lines: [{ id: merchandiseId, quantity }]
        })

        const cart = cartLinesUpdate?.cart

        if (cart) {
          mutate(cart, false)
        }

        storefrontEvents.emit('updateLineItemSuccess', cart)
      } catch (error) {
        storefrontEvents.emit('updateLineItemError', formatError(error))
      }
    },
    [cartLocalStorage, client, mutate]
  )

  const onRemoveLineItem = useCallback(
    async ({ merchandiseId }: { merchandiseId: string }) => {
      try {
        const id = cartLocalStorage.get()
        if (!id) return
        const { cartLinesRemove } = await client.RemoveLineItem({
          cartId: id,
          lineIds: [merchandiseId]
        })

        const cart = cartLinesRemove?.cart

        if (cart) {
          mutate(cart, false)
        }

        storefrontEvents.emit('removeLineItemSuccess', cart)
      } catch (error) {
        storefrontEvents.emit('removeLineItemError', formatError(error))
      }
    },
    [cartLocalStorage, client, mutate]
  )

  const cartItemsCount = useMemo(() => {
    if (cart === null) return 0
    if (!cart?.lines?.edges) return undefined
    let result = 0
    cart?.lines?.edges.forEach((i) => {
      result += i.node.quantity
    })
    return result
  }, [cart])

  return (
    <Context.Provider
      value={{
        cart,
        cartToggleState,
        cartItemsCount,
        onAddLineItem,
        onUpdateLineItem,
        onRemoveLineItem
      }}
    >
      {children}
    </Context.Provider>
  )
}

export const StorefrontProvider: React.FC<InternalContextProviderProps> = ({
  children,
  client,
  appCartId
}) => {
  return (
    <InternalContextProvider client={client} appCartId={appCartId}>
      {children}
    </InternalContextProvider>
  )
}

export const useStorefront = () => {
  const ctx = useContext(Context)
  if (ctx === undefined) {
    throw new Error('useStorefront must be used below <StorefrontProvider />')
  }
  return ctx
}
