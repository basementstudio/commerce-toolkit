import { MutationOptions, useMutation } from '@tanstack/react-query'

import { surfaceMutationErrors } from '../helpers/error-handling'
import { useCartLocalStorage } from '../helpers/use-cart-local-storage'
import { useOptimisticCartUpdate } from '../queries/cart'
import { CartMutators, Logging } from '../storefront-hooks'
import { BarebonesCart } from '../types'

export type RemoveLineItemsFromCartMutationUserOptions<Cart> = {
  mutationOptions?: MutationOptions<Cart, unknown, string[]>
  updateCartQueryDataOnSuccess?: boolean
}

type InternalOptions<Cart> = RemoveLineItemsFromCartMutationUserOptions<Cart>

export const useRemoveLineItemsFromCartMutation = <Cart extends BarebonesCart>({
  mutators,
  cartLocalStorageKey,
  options,
  logging
}: {
  mutators: Pick<CartMutators<Cart>, 'removeLineItemsFromCart'>
  cartLocalStorageKey: string
  options: InternalOptions<Cart>
  logging?: Logging<Cart>
}) => {
  const cartLocalStorage = useCartLocalStorage(cartLocalStorageKey)
  const optimisticCartUpdate = useOptimisticCartUpdate<Cart>()

  return useMutation(
    ['removeLineItemsFromCart'],
    async (lineIds: string[]) => {
      const cartId = cartLocalStorage.get()
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
        if (options?.mutationOptions?.onError)
          options?.mutationOptions?.onError(error, variables, context)
        if (logging?.onError) {
          logging.onError('removeLineItemError', error as Error)
        }
      },
      onSuccess(data, variables, context) {
        if (options?.mutationOptions?.onSuccess)
          options?.mutationOptions?.onSuccess(data, variables, context)
        if (logging?.onSuccess) {
          logging.onSuccess('removeLineItemSuccess', data)
        }
      }
    }
  )
}
