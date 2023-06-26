import { MutationOptions, useMutation } from '@tanstack/react-query'

import { surfaceMutationErrors } from '../helpers/error-handling'
import { useCartCookieManager } from '../helpers/use-cart-cookie-manager'
import { useOptimisticCartUpdate } from '../queries/cart'
import { CartMutators, Logging } from '../storefront-hooks'
import { BarebonesCart } from '../types'
import type { CookieAttributes } from 'js-cookie'

export type RemoveLineItemsFromCartMutationUserOptions<Cart> = {
  mutationOptions?: MutationOptions<Cart, unknown, string[]>
  updateCartQueryDataOnSuccess?: boolean
}

type InternalOptions<Cart> = RemoveLineItemsFromCartMutationUserOptions<Cart>

export const useRemoveLineItemsFromCartMutation = <Cart extends BarebonesCart>({
  mutators,
  cartCookieKey,
  options,
  logging,
  cartCookieOptions
}: {
  mutators: Pick<CartMutators<Cart>, 'removeLineItemsFromCart'>
  cartCookieKey: string
  options: InternalOptions<Cart>
  logging?: Logging<Cart>
  cartCookieOptions?: CookieAttributes
}) => {
  const cartCookieManager = useCartCookieManager(
    cartCookieKey,
    cartCookieOptions
  )
  const optimisticCartUpdate = useOptimisticCartUpdate<Cart>()

  return useMutation(
    ['removeLineItemsFromCart'],
    async (lineIds: string[]) => {
      const cartId = cartCookieManager.get()
      if (!cartId) {
        throw new Error(
          'Cart not found while trying to remove line items from it'
        )
      }

      const { updateCartQueryDataOnSuccess = true } = options

      const { data, userErrors, silenceUserErrors } =
        await mutators.removeLineItemsFromCart(cartId, lineIds)

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
          logging.onError('removeLineItemError', error as Error)
        }
      },
      onSuccess(data, variables, context) {
        if (options?.mutationOptions?.onSuccess) {
          options.mutationOptions.onSuccess(data, variables, context)
        }
        if (logging?.onSuccess) {
          logging.onSuccess('removeLineItemSuccess', data)
        }
      }
    }
  )
}
