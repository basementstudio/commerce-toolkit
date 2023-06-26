import {
  QueryClient,
  QueryClientConfig,
  QueryClientProvider,
  QueryClientProviderProps
} from '@tanstack/react-query'
import * as cartOpenState from './helpers/use-cart-open-state'

import * as addLines from './mutations/add-lines'
import * as removeLines from './mutations/remove-lines'
import * as updateLines from './mutations/update-lines'
import * as cartQuery from './queries/cart'
import {
  BarebonesCart,
  MutationError,
  LineItem,
  NoInfer,
  OmitIndexSignature,
  OptionalPromise,
  MutationSuccess,
  UserError
} from './types'
import type { CookieAttributes } from 'js-cookie'

type MutatorResult<Data> = {
  data: Data | null | undefined
  userErrors?: UserError[] | undefined
  silenceUserErrors?: boolean
}

export type CartMutators<Cart> = {
  createCart: () => OptionalPromise<MutatorResult<Cart>>
  createCartWithLines: (
    lines: LineItem[]
  ) => OptionalPromise<MutatorResult<Cart>>
  addLineItemsToCart: (
    cartId: string,
    lines: LineItem[]
  ) => OptionalPromise<MutatorResult<Cart>>
  updateLineItemsInCart: (
    cartId: string,
    lines: LineItem[]
  ) => OptionalPromise<MutatorResult<Cart>>
  removeLineItemsFromCart: (
    cartId: string,
    lineIds: string[]
  ) => OptionalPromise<MutatorResult<Cart>>
}

export type Logging<Cart extends BarebonesCart> = {
  onError?: (
    type: MutationError<Cart>['type'],
    error: MutationError<Cart>['error']
  ) => void
  onSuccess?: (
    type: MutationSuccess<Cart>['type'],
    data: MutationSuccess<Cart>['data']
  ) => void
}

type StorefrontMutators<Cart> = CartMutators<Cart>

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
 *   cartCookieKey: 'my-store',
 *   fetchers: {
 *     fetchCart: async (cartId) => {
 *       const { cart } = await bsmntSdk.FetchCart({ id: cartId });
 *       if (cart === undefined) throw new Error("Request failed");
 *       return cart;
 *     },
 *   },
 *   mutators: {
 *     ...yourMutators
 *   }
 * })
 */
export function createStorefrontHooks<Cart extends BarebonesCart>({
  cartCookieKey,
  fetchers,
  mutators,
  createCartIfNotFound,
  queryClientConfig,
  cartOpenStateOptions,
  logging,
  cartCookieOptions
}: {
  cartCookieKey: string
  fetchers: {
    fetchCart: (cartId: string) => OptionalPromise<Cart | null>
  }
  mutators: StorefrontMutators<NoInfer<Cart>>
  createCartIfNotFound?: boolean
  queryClientConfig?: QueryClientConfig
  cartOpenStateOptions?: cartOpenState.UseCartOpenStateOptions
  logging?: Logging<Cart>
  cartCookieOptions?: CookieAttributes
}) {
  const queryClient = new QueryClient(queryClientConfig)

  return {
    QueryClientProvider: (props: Omit<QueryClientProviderProps, 'client'>) => {
      // @ts-ignore
      return <QueryClientProvider {...props} client={queryClient} />
    },
    // QUERIES
    useCartQuery: (options?: cartQuery.UseCartQueryUserOptions<Cart>) => {
      return cartQuery.useCartQuery({
        cartCookieKey,
        cartCookieOptions,
        fetchCart: fetchers.fetchCart,
        mutators: { createCart: mutators.createCart },
        options: {
          ...options,
          createCartIfNotFound:
            options?.createCartIfNotFound ?? createCartIfNotFound
        },
        logging
      })
    },
    // MUTATIONS
    useOptimisticCartUpdate: () => {
      return cartQuery.useOptimisticCartUpdate<Cart>({
        cartCookieKey,
        cartCookieOptions
      })
    },
    useAddLineItemsToCartMutation: (
      options?: addLines.AddLineItemsToCartMutationUserOptions<Cart>
    ) => {
      return addLines.useAddLineItemsToCartMutation<Cart>({
        mutators: {
          addLineItemsToCart: mutators.addLineItemsToCart,
          createCartWithLines: mutators.createCartWithLines
        },
        cartCookieKey,
        cartCookieOptions,
        options: { ...options },
        logging
      })
    },
    useUpdateLineItemsInCartMutation: (
      options?: updateLines.UpdateLineItemsInCartMutationUserOptions<Cart>
    ) => {
      return updateLines.useUpdateLineItemsInCartMutation<Cart>({
        mutators: { updateLineItemsInCart: mutators.updateLineItemsInCart },
        cartCookieKey,
        cartCookieOptions,
        options: {
          ...options,
          mutationOptions: options?.mutationOptions
        },
        logging
      })
    },
    useRemoveLineItemsFromCartMutation: (
      options?: removeLines.RemoveLineItemsFromCartMutationUserOptions<Cart>
    ) => {
      return removeLines.useRemoveLineItemsFromCartMutation<Cart>({
        mutators: { removeLineItemsFromCart: mutators.removeLineItemsFromCart },
        cartCookieKey,
        cartCookieOptions,
        options: {
          ...options,
          mutationOptions: options?.mutationOptions
        },
        logging
      })
    },
    // CART OPEN STATE
    useCartOpenState: () => {
      return cartOpenState.useCartOpenState({ ...cartOpenStateOptions })
    }
  }
}
