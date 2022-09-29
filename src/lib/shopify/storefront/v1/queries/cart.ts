import { QueryOptions, useQuery, useQueryClient } from '@tanstack/react-query'
import * as React from 'react'

import { surfaceMutationErrors } from '../helpers/error-handling'
import { useCartLocalStorage } from '../helpers/use-cart-local-storage'
import { CartMutators } from '../storefront-hooks'
import { BarebonesCart } from '../types'

export type CartFetcher<Cart> = (cartId: string) => Promise<Cart>

const cartQueryKey = ['cart']

export type UseCartQueryUserOptions<Cart> = {
  queryOptions?: QueryOptions<Cart | null>
  createCartIfNotFound?: boolean
}

type Options<Cart> = UseCartQueryUserOptions<Cart>

export const useCartQuery = <Cart extends BarebonesCart>({
  fetchCart,
  mutators,
  cartLocalStorageKey,
  options
}: {
  fetchCart: CartFetcher<Cart | null>
  mutators: Pick<CartMutators<Cart>, 'createCart'>
  cartLocalStorageKey: string
  options: Options<Cart>
}) => {
  const cartLocalStorage = useCartLocalStorage(cartLocalStorageKey)

  const createCart = React.useCallback(async () => {
    const { data, userErrors, silenceUserErrors } = await mutators.createCart()
    surfaceMutationErrors(data, userErrors, silenceUserErrors)
    return data
  }, [mutators])

  return useQuery<Cart | null>(
    cartQueryKey,
    async () => {
      const cartId = cartLocalStorage.get()
      if (!cartId) {
        if (options?.createCartIfNotFound) {
          const newCart = await createCart()
          cartLocalStorage.set(newCart.id)
          return newCart
        }
        return null
      }
      const cart = await fetchCart(cartId)

      if (!cart) {
        if (options?.createCartIfNotFound) {
          const newCart = await createCart()
          cartLocalStorage.set(newCart.id)
          return newCart
        }
        cartLocalStorage.clear()
        throw new Error(`Cart with id ${cartId} not found.`)
      }

      return cart
    },
    options?.queryOptions
  )
}

export const useOptimisticCartUpdate = <Cart extends BarebonesCart>() => {
  const queryClient = useQueryClient()

  const optimisticUpdate = React.useMemo(() => {
    let snapshot: Cart | null | undefined = undefined
    return {
      update: async (newCart: Cart) => {
        await queryClient.cancelQueries(cartQueryKey)
        snapshot = queryClient.getQueryData<Cart | null>(cartQueryKey)
        queryClient.setQueryData<Cart | null>(cartQueryKey, newCart)
      },
      revert: () => {
        queryClient.setQueryData<Cart | null>(cartQueryKey, snapshot)
      }
    }
  }, [queryClient])

  return optimisticUpdate
}
