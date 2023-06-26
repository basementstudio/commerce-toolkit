import { useMutation, UseMutationOptions } from '@tanstack/react-query'

import { surfaceMutationErrors } from '../helpers/error-handling'
import { useCartCookieManager } from '../helpers/use-cart-cookie-manager'
import { useOptimisticCartUpdate } from '../queries/cart'
import { CartMutators, Logging } from '../storefront-hooks'
import { BarebonesCart, LineItem } from '../types'
import type { CookieAttributes } from 'js-cookie'

export type UpdateLineItemsInCartMutationUserOptions<Cart> = {
  mutationOptions?: UseMutationOptions<Cart, unknown, LineItem[]>
  updateCartQueryDataOnSuccess?: boolean
}

type InternalOptions<Cart> = UpdateLineItemsInCartMutationUserOptions<Cart>

export const useUpdateLineItemsInCartMutation = <Cart extends BarebonesCart>({
  mutators,
  cartCookieKey,
  options,
  logging,
  cartCookieOptions
}: {
  mutators: Pick<CartMutators<Cart>, 'updateLineItemsInCart'>
  cartCookieKey: string
  options: InternalOptions<Cart>
  logging?: Logging<Cart>
  cartCookieOptions?: CookieAttributes
}) => {
  const cartCookieManager = useCartCookieManager(
    cartCookieKey,
    cartCookieOptions
  )
  const optimisticCartUpdate = useOptimisticCartUpdate<Cart>({
    cartCookieKey,
    cartCookieOptions
  })

  return useMutation(
    ['updateLineItemsInCart'],
    async (lines: LineItem[]) => {
      const cartId = cartCookieManager.get()
      if (!cartId) {
        throw new Error(
          'Cart not found while trying to update line items in it'
        )
      }
      const { updateCartQueryDataOnSuccess = true } = options

      const { data, userErrors, silenceUserErrors } =
        await mutators.updateLineItemsInCart(cartId, lines)

      surfaceMutationErrors(data, userErrors, silenceUserErrors)
      if (updateCartQueryDataOnSuccess) {
        optimisticCartUpdate.update(data)
      }
      return data
    },
    {
      ...options?.mutationOptions,
      onError(error, variables, context) {
        if (options?.mutationOptions?.onError) {
          options.mutationOptions.onError(error, variables, context)
        }
        if (logging?.onError) {
          logging.onError('updateLineItemError', error as Error)
        }
      },
      onSuccess(data, variables, context) {
        if (options?.mutationOptions?.onSuccess) {
          options.mutationOptions.onSuccess(data, variables, context)
        }
        if (logging?.onSuccess) {
          logging.onSuccess('updateLineItemSuccess', data)
        }
      }
    }
  )
}
