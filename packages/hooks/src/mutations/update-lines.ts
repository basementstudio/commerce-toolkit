import { MutationOptions, useMutation } from '@tanstack/react-query'

import { surfaceMutationErrors } from '../helpers/error-handling'
import { useCartLocalStorage } from '../helpers/use-cart-local-storage'
import { useOptimisticCartUpdate } from '../queries/cart'
import { CartMutators, Logging } from '../storefront-hooks'
import { BarebonesCart, LineItem } from '../types'

export type UpdateLineItemsInCartMutationUserOptions<Cart> = {
  mutationOptions?: MutationOptions<Cart, unknown, LineItem[]>
  updateCartQueryDataOnSuccess?: boolean
}

type InternalOptions<Cart> = UpdateLineItemsInCartMutationUserOptions<Cart>

export const useUpdateLineItemsInCartMutation = <Cart extends BarebonesCart>({
  mutators,
  cartLocalStorageKey,
  options,
  logging
}: {
  mutators: Pick<CartMutators<Cart>, 'updateLineItemsInCart'>
  cartLocalStorageKey: string
  options: InternalOptions<Cart>
  logging?: Logging<Cart>
}) => {
  const cartLocalStorage = useCartLocalStorage(cartLocalStorageKey)
  const optimisticCartUpdate = useOptimisticCartUpdate<Cart>()

  return useMutation(
    ['updateLineItemsInCart'],
    async (lines: LineItem[]) => {
      const cartId = cartLocalStorage.get()
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
        if (options?.mutationOptions?.onError)
          options?.mutationOptions?.onError(error, variables, context)
        if (logging?.onError) {
          logging.onError('updateLineItemError', error as Error)
        }
      },
      onSuccess(data, variables, context) {
        if (options?.mutationOptions?.onSuccess)
          options?.mutationOptions?.onSuccess(data, variables, context)
        if (logging?.onSuccess) {
          logging.onSuccess('updateLineItemSuccess', data)
        }
      }
    }
  )
}
