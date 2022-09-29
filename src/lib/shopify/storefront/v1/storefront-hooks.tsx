import {
  QueryClient,
  QueryClientConfig,
  QueryClientProvider,
  QueryClientProviderProps
} from '@tanstack/react-query'
import * as React from 'react'

import * as addLines from './mutations/add-lines'
import * as removeLines from './mutations/remove-lines'
import * as updateLines from './mutations/update-lines'
import * as cartQuery from './queries/cart'
import { BarebonesCart, LineItem, NoInfer, UserError } from './types'

type MutatorResult<Data> = {
  data: Data | null | undefined
  userErrors: UserError[] | undefined
  silenceUserErrors?: boolean
}

export type CartMutators<Cart extends BarebonesCart> = {
  createCart: () => Promise<MutatorResult<Cart>>
  createCartWithLines: (lines: LineItem[]) => Promise<MutatorResult<Cart>>
  addLineItemsToCart: (
    cartId: string,
    lines: LineItem[]
  ) => Promise<MutatorResult<Cart>>
  updateLineItemsInCart: (
    cartId: string,
    lines: LineItem[]
  ) => Promise<MutatorResult<Cart>>
  removeLineItemsFromCart: (
    cartId: string,
    lineIds: string[]
  ) => Promise<MutatorResult<Cart>>
}

type StorefrontMutators<Cart extends BarebonesCart> = CartMutators<Cart>

/**
 *
 * @example
 * export const {
 *   QueryClientProvider,
 *   useCartQuery,
 *   useOptimisticCartUpdate,
 *   useAddLineItemsToCartMutation,
 *   ...rest
 * } = createStorefrontHooks({
 *   cartLocalStorageKey: 'my-store',
 *   fetchers: {
 *     fetchCart: async (cartId) => {
 *       const { cart } = await reactDropifySdk.FetchCart({ id: cartId })
 *       return cart
 *     }
 *   },
 *   mutators: {
 *     ...yourMutators
 *   }
 * })
 */
export function createStorefrontHooks<Cart extends BarebonesCart>({
  cartLocalStorageKey,
  fetchers,
  mutators,
  createCartIfNotFound,
  queryClientConfig
}: {
  cartLocalStorageKey: string
  fetchers: {
    fetchCart: (cartId: string) => Promise<Cart | null>
  }
  mutators: StorefrontMutators<NoInfer<Cart>>
  createCartIfNotFound?: boolean
  queryClientConfig?: QueryClientConfig
}) {
  const queryClient = new QueryClient(queryClientConfig)

  return {
    QueryClientProvider: (props: Omit<QueryClientProviderProps, 'client'>) => {
      // @ts-ignore
      return <QueryClientProvider {...props} client={queryClient} />
    },
    useCartQuery: (options?: cartQuery.UseCartQueryUserOptions<Cart>) => {
      return cartQuery.useCartQuery({
        cartLocalStorageKey,
        fetchCart: fetchers.fetchCart,
        mutators: { createCart: mutators.createCart },
        options: {
          ...options,
          createCartIfNotFound:
            options?.createCartIfNotFound ?? createCartIfNotFound
        }
      })
    },
    useOptimisticCartUpdate: () => {
      return cartQuery.useOptimisticCartUpdate<Cart>()
    },
    useAddLineItemsToCartMutation: (
      options?: addLines.AddLineItemsToCartMutationUserOptions<Cart>
    ) => {
      return addLines.useAddLineItemsToCartMutation<Cart>({
        mutators: {
          addLineItemsToCart: mutators.addLineItemsToCart,
          createCartWithLines: mutators.createCartWithLines
        },
        cartLocalStorageKey,
        options: { ...options }
      })
    },
    useUpdateLineItemsInCartMutation: (
      options?: updateLines.UpdateLineItemsInCartMutationUserOptions<Cart>
    ) => {
      return updateLines.useUpdateLineItemsInCartMutation<Cart>({
        mutators: { updateLineItemsInCart: mutators.updateLineItemsInCart },
        cartLocalStorageKey,
        options: { ...options }
      })
    },
    useRemoveLineItemsFromCartMutation: (
      options?: removeLines.RemoveLineItemsFromCartMutationUserOptions<Cart>
    ) => {
      return removeLines.useRemoveLineItemsFromCartMutation<Cart>({
        mutators: { removeLineItemsFromCart: mutators.removeLineItemsFromCart },
        cartLocalStorageKey,
        options: { ...options }
      })
    }
  }
}
