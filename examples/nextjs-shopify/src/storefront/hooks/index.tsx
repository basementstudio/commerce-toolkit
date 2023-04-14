import { createStorefrontHooks } from '@bsmnt/storefront-hooks'
import { storefront } from '../sdk-gen/sdk'
import type {
  CartGenqlSelection,
  CartUserErrorGenqlSelection,
  FieldsSelection,
  Cart as GenqlCart
} from '../sdk-gen/generated'

const cartFragment = {
  id: true,
  checkoutUrl: true,
  createdAt: true,
  cost: { subtotalAmount: { amount: true, currencyCode: true } }
} satisfies CartGenqlSelection

export type Cart = FieldsSelection<GenqlCart, typeof cartFragment>

const userErrorFragment = {
  message: true,
  code: true,
  field: true
} satisfies CartUserErrorGenqlSelection

export const {
  QueryClientProvider,
  useCartQuery,
  useAddLineItemsToCartMutation,
  useOptimisticCartUpdate,
  useRemoveLineItemsFromCartMutation,
  useUpdateLineItemsInCartMutation
} = createStorefrontHooks({
  cartCookieKey: 'example-nextjs-shopify',
  fetchers: {
    fetchCart: async (cartId) => {
      const { cart } = await storefront.query({
        cart: {
          __args: { id: cartId },
          ...cartFragment
        }
      })

      if (cart === undefined) throw new Error('Request failed')
      return cart
    }
  },
  mutators: {
    addLineItemsToCart: async (cartId, lines) => {
      const { cartLinesAdd } = await storefront.mutation({
        cartLinesAdd: {
          __args: {
            cartId,
            lines
          },
          cart: cartFragment,
          userErrors: userErrorFragment
        }
      })

      return {
        data: cartLinesAdd?.cart,
        userErrors: cartLinesAdd?.userErrors
      }
    },
    createCart: async () => {
      const { cartCreate } = await storefront.mutation({
        cartCreate: {
          cart: cartFragment,
          userErrors: userErrorFragment
        }
      })
      return {
        data: cartCreate?.cart,
        userErrors: cartCreate?.userErrors
      }
    },
    // TODO we could use the same mutation as createCart?
    createCartWithLines: async (lines) => {
      const { cartCreate } = await storefront.mutation({
        cartCreate: {
          __args: { input: { lines } },
          cart: cartFragment,
          userErrors: userErrorFragment
        }
      })
      return {
        data: cartCreate?.cart,
        userErrors: cartCreate?.userErrors
      }
    },
    removeLineItemsFromCart: async (cartId, lineIds) => {
      const { cartLinesRemove } = await storefront.mutation({
        cartLinesRemove: {
          __args: { cartId, lineIds },
          cart: cartFragment,
          userErrors: userErrorFragment
        }
      })
      return {
        data: cartLinesRemove?.cart,
        userErrors: cartLinesRemove?.userErrors
      }
    },
    updateLineItemsInCart: async (cartId, lines) => {
      const { cartLinesUpdate } = await storefront.mutation({
        cartLinesUpdate: {
          __args: {
            cartId,
            lines: lines.map((l) => ({
              id: l.merchandiseId,
              quantity: l.quantity,
              attributes: l.attributes
            }))
          },
          cart: cartFragment,
          userErrors: userErrorFragment
        }
      })
      return {
        data: cartLinesUpdate?.cart,
        userErrors: cartLinesUpdate?.userErrors
      }
    }
  },
  createCartIfNotFound: true
})

// export { useProductFormHelper } from './use-product-form-helper'
