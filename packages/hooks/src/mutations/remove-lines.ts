import { MutationOptions, useMutation } from '@tanstack/react-query'
import { EventEmitterType } from '../events'

import { surfaceMutationErrors } from '../helpers/error-handling'
import { useCartLocalStorage } from '../helpers/use-cart-local-storage'
import { useOptimisticCartUpdate } from '../queries/cart'
import { CartMutators } from '../storefront-hooks'
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
  storefrontEvents
}: {
  mutators: Pick<CartMutators<Cart>, 'removeLineItemsFromCart'>
  cartLocalStorageKey: string
  options: InternalOptions<Cart>
  storefrontEvents?: EventEmitterType
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
      if (storefrontEvents) {
        storefrontEvents.emit('removeLineItemSuccess', data)
        storefrontEvents.emit('allSuccesses', {
          type: 'removeLineItemSuccess',
          data
        })
      }
      return data
    },
    options?.mutationOptions
  )
}
