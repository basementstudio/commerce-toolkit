import { MutationOptions, useMutation } from '@tanstack/react-query'
import { EventEmitterType } from '../events'

import { surfaceMutationErrors } from '../helpers/error-handling'
import { useCartLocalStorage } from '../helpers/use-cart-local-storage'
import { useOptimisticCartUpdate } from '../queries/cart'
import { CartMutators } from '../storefront-hooks'
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
  storefrontEvents
}: {
  mutators: Pick<CartMutators<Cart>, 'updateLineItemsInCart'>
  cartLocalStorageKey: string
  options: InternalOptions<Cart>
  storefrontEvents?: EventEmitterType
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
      if (storefrontEvents) {
        storefrontEvents.emit('updateLineItemSuccess', data)
        storefrontEvents.emit('allSuccesses', {
          type: 'updateLineItemSuccess',
          data: data
        })
      }
      return data
    },
    options?.mutationOptions
  )
}
