import { MutationOptions, useMutation } from '@tanstack/react-query'

import { surfaceMutationErrors } from '../helpers/error-handling'
import { useCartLocalStorage } from '../helpers/use-cart-local-storage'
import { useOptimisticCartUpdate } from '../queries/cart'
import { CartMutators, Logging } from '../storefront-hooks'
import { BarebonesCart, LineItem } from '../types'

export type AddLineItemsToCartMutationUserOptions<Cart> = {
  mutationOptions?: MutationOptions<Cart, unknown, LineItem[]>
  updateCartQueryDataOnSuccess?: boolean
}

type InternalOptions<Cart> = AddLineItemsToCartMutationUserOptions<Cart>

export const useAddLineItemsToCartMutation = <Cart extends BarebonesCart>({
  mutators,
  cartLocalStorageKey,
  options,
  logging
}: {
  mutators: Pick<
    CartMutators<Cart>,
    'addLineItemsToCart' | 'createCartWithLines'
  >
  cartLocalStorageKey: string
  options: InternalOptions<Cart>
  logging?: Logging<Cart>
}) => {
  const cartLocalStorage = useCartLocalStorage(cartLocalStorageKey)
  const optimisticCartUpdate = useOptimisticCartUpdate<Cart>()
  const cartId = cartLocalStorage.get()

  return useMutation(
    ['addLineItemsToCart'],
    async (lines: LineItem[]) => {
      const { updateCartQueryDataOnSuccess = true } = options

      const { data, userErrors, silenceUserErrors } = cartId
        ? await mutators.addLineItemsToCart(cartId, lines)
        : await mutators.createCartWithLines(lines)

      surfaceMutationErrors(data, userErrors, silenceUserErrors)

      if (!cartId) {
        cartLocalStorage.set(data.id)
      }

      if (updateCartQueryDataOnSuccess) {
        optimisticCartUpdate.update(data)
      }
      return data
    },
    {
      ...options?.mutationOptions,
      onError(error) {
        if (logging?.onError) {
          logging.onError(
            cartId ? 'addLineItemError' : 'createCartError',
            error as Error
          )
        }
      },
      onSuccess(data) {
        if (logging?.onSuccess) {
          logging.onSuccess(
            cartId ? 'addLineItemSuccess' : 'createCartSuccess',
            data
          )
        }
      }
    }
  )
}
