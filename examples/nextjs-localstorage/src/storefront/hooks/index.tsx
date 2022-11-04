import { createStorefrontHooks } from '@bsmnt/storefront-hooks'

type LineItem = {
  merchandiseId: string
  quantity: number
}

type Cart = {
  id: string
  lines: LineItem[]
}

export const {
  QueryClientProvider,
  useCartQuery,
  useAddLineItemsToCartMutation,
  useOptimisticCartUpdate,
  useRemoveLineItemsFromCartMutation,
  useUpdateLineItemsInCartMutation
} = createStorefrontHooks<Cart>({
  cartLocalStorageKey: 'example-nextjs-localstorage',
  fetchers: {
    fetchCart: (cartId: string) => {
      const cartFromLocalStorage = localStorage.getItem(cartId)

      if (!cartFromLocalStorage) throw new Error('Cart not found')

      const cart: Cart = JSON.parse(cartFromLocalStorage)

      return cart
    }
  },
  mutators: {
    addLineItemsToCart: (cartId, lines) => {
      const cartFromLocalStorage = localStorage.getItem(cartId)

      if (!cartFromLocalStorage) throw new Error('Cart not found')

      const cart: Cart = JSON.parse(cartFromLocalStorage)
      // Add line if not exists, update quantity if exists
      const updatedCart = lines.reduce((cart, line) => {
        const lineIndex = cart.lines.findIndex(
          (cartLine) => cartLine.merchandiseId === line.merchandiseId
        )

        if (lineIndex === -1) {
          cart.lines.push(line)
        } else {
          cart.lines[lineIndex]!.quantity += line.quantity
        }

        return cart
      }, cart)

      localStorage.setItem(cartId, JSON.stringify(updatedCart))

      return {
        data: updatedCart
      }
    },
    createCart: () => {
      const cart: Cart = { id: 'cart', lines: [] }
      localStorage.setItem(cart.id, JSON.stringify(cart))

      return { data: cart }
    },
    createCartWithLines: (lines) => {
      const cart = { id: 'cart', lines }
      localStorage.setItem(cart.id, JSON.stringify(cart))

      return { data: cart }
    },
    removeLineItemsFromCart: (cartId, lineIds) => {
      const cartFromLocalStorage = localStorage.getItem(cartId)

      if (!cartFromLocalStorage) throw new Error('Cart not found')

      const cart: Cart = JSON.parse(cartFromLocalStorage)
      cart.lines = cart.lines.filter(
        (line) => !lineIds.includes(line.merchandiseId)
      )
      localStorage.setItem(cart.id, JSON.stringify(cart))

      return {
        data: cart
      }
    },
    updateLineItemsInCart: (cartId, lines) => {
      const cartFromLocalStorage = localStorage.getItem(cartId)

      if (!cartFromLocalStorage) throw new Error('Cart not found')

      const cart: Cart = JSON.parse(cartFromLocalStorage)
      cart.lines = lines
      localStorage.setItem(cart.id, JSON.stringify(cart))

      return {
        data: cart
      }
    }
  }
})
