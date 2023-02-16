import { createStorefrontHooks } from '@bsmnt/storefront-hooks'
import { storefront } from '../sdk-gen/sdk'

export const {
  QueryClientProvider,
  useCartQuery,
  useAddLineItemsToCartMutation,
  useOptimisticCartUpdate,
  useRemoveLineItemsFromCartMutation,
  useUpdateLineItemsInCartMutation
} = createStorefrontHooks({
  cartLocalStorageKey: 'example-nextjs-shopify',
  fetchers: {
    fetchCart: async (cartId) => {
      const { cart } = await storefront.FetchCart({ id: cartId })
      if (cart === undefined) throw new Error('Request failed')
      return cart
    }
  },
  mutators: {
    addLineItemsToCart: async (cartId, lines) => {
      const { cartLinesAdd } = await storefront.AddLineItem({
        cartId,
        lines
      })
      return {
        data: cartLinesAdd?.cart,
        userErrors: cartLinesAdd?.userErrors
      }
    },
    createCart: async () => {
      const { cartCreate } = await storefront.CreateCart()
      return {
        data: cartCreate?.cart,
        userErrors: cartCreate?.userErrors
      }
    },
    createCartWithLines: async (lines) => {
      const { cartCreate } = await storefront.CreateCartWithLines({ lines })
      return {
        data: cartCreate?.cart,
        userErrors: cartCreate?.userErrors
      }
    },
    removeLineItemsFromCart: async (cartId, lineIds) => {
      const { cartLinesRemove } = await storefront.RemoveLineItem({
        cartId,
        lineIds
      })
      return {
        data: cartLinesRemove?.cart,
        userErrors: cartLinesRemove?.userErrors
      }
    },
    updateLineItemsInCart: async (cartId, lines) => {
      const { cartLinesUpdate } = await storefront.UpdateLineItem({
        cartId,
        lines: lines.map((l) => ({
          id: l.merchandiseId,
          quantity: l.quantity,
          attributes: l.attributes
        }))
      })
      return {
        data: cartLinesUpdate?.cart,
        userErrors: cartLinesUpdate?.userErrors
      }
    }
  },
  createCartIfNotFound: true
})

export { useProductFormHelper } from './use-product-form-helper'
