import { createStorefrontHooks } from "@bsmnt/storefront-hooks";
import { Product } from "examples-ui";

type LineItem = {
  merchandiseId: string;
  quantity: number; 
}

type Cart = {
  id: string,
  lines: LineItem[]
}

export const {
  QueryClientProvider,
  useCartQuery,
  useAddLineItemsToCartMutation,
  useOptimisticCartUpdate,
  useRemoveLineItemsFromCartMutation,
  useUpdateLineItemsInCartMutation,
} = createStorefrontHooks<Cart>({
  cartLocalStorageKey: "example-nextjs-localstorage",
  fetchers: {
    fetchCart: (cartId: string) => {
      console.log("Fetching cart");
      const cartFromLocalStorage = localStorage.getItem(cartId)
      
      if (!cartFromLocalStorage) throw new Error('Cart not found')

      const cart: Cart = JSON.parse(cartFromLocalStorage)

      return cart
    },
  },
  mutators: {
    addLineItemsToCart: (cartId, lines) => {
      const cartFromLocalStorage = localStorage.getItem(cartId)
      
      if (!cartFromLocalStorage) throw new Error('Cart not found')

      const cart: Cart = JSON.parse(cartFromLocalStorage)
      cart.lines = [...cart.lines, ...lines]
  
      localStorage.setItem(cartId, JSON.stringify(cart));

      return {
        data: cart
      };
    },
    createCart: () => {
      const cart: Cart = { id: 'cart', lines: [] }
      localStorage.setItem(cart.id, JSON.stringify(cart));

      return { data: cart }
    },
    createCartWithLines: (lines) => {
      console.log('Create')
      const cart = { id: 'cart', lines }
      localStorage.setItem(cart.id, JSON.stringify(cart));

      return {
        data: cart
      };
    },
    removeLineItemsFromCart: (cartId, lineIds) => {
      const cartFromLocalStorage = localStorage.getItem(cartId)
      
      if (!cartFromLocalStorage) throw new Error('Cart not found')

      const cart: Cart = JSON.parse(cartFromLocalStorage)
      cart.lines = cart.lines.filter(line => !lineIds.includes(line.merchandiseId))
      localStorage.setItem(cart.id, JSON.stringify(cart));

      return {
        data: cart
      };
    },
    updateLineItemsInCart: (cartId, lines) => {
      const cartFromLocalStorage = localStorage.getItem(cartId)

      if (!cartFromLocalStorage) throw new Error('Cart not found')

      const cart: Cart = JSON.parse(cartFromLocalStorage)
      cart.lines = cart.lines.map(line => {
        const lineToUpdate = lines.find(lineToUpdate => lineToUpdate.merchandiseId === line.merchandiseId)

        if (lineToUpdate) {
          return lineToUpdate
        }

        return line
      })
      localStorage.setItem(cart.id, JSON.stringify(cart));

      return {
        data: cart
      };
    }
  }
});
