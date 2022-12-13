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

  return useMutation(
    ['addLineItemsToCart'],
    async (lines: LineItem[]) => {
      const { updateCartQueryDataOnSuccess = true } = options

      const cartId = cartLocalStorage.get()
      const { data, userErrors, silenceUserErrors } = cartId
        ? await mutators.addLineItemsToCart(cartId, lines)
        : await mutators.createCartWithLines(lines)

      surfaceMutationErrors(data, userErrors, silenceUserErrors)

      if (!cartId) {
        // means we needed to create the cart first
        // @ts-ignore
        data.__sfhooks_is_new = true
        cartLocalStorage.set(data.id)
      }

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
          logging.onError('addLineItemError', error as Error)
        }
      },
      onSuccess(data, variables, context) {
        // @ts-ignore
        const isNew: boolean = data?.__sfhooks_is_new
        if (isNew) {
          // @ts-ignore
          delete data.__sfhooks_is_new
        }

        if (options?.mutationOptions?.onSuccess) {
          options.mutationOptions.onSuccess(data, variables, context)
        }
        if (logging?.onSuccess) {
          logging.onSuccess(
            isNew ? 'createCartWithLinesSuccess' : 'addLineItemSuccess',
            data
          )
        }
      }
    }
  )
}
