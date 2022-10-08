import { createStorefrontHooks } from "@bsmnt/storefront-hooks";
import { bsmntSdk } from "../sdk/sdk";

export const {
  QueryClientProvider,
  useCartQuery,
  useAddLineItemsToCartMutation,
  useOptimisticCartUpdate,
  useRemoveLineItemsFromCartMutation,
  useUpdateLineItemsInCartMutation,
} = createStorefrontHooks({
  cartLocalStorageKey: "example-nextjs-shopify",
  fetchers: {
    // why is Cart not being infered from here?
    fetchCart: async (cartId) => {
      const { cart } = await bsmntSdk.FetchCart({ id: cartId });
      if (cart === undefined) throw new Error("Cart not found");
      return cart;
    },
  },
  // TODO FIX TYPES :(
  mutators: {
    addLineItemsToCart: async (cartId, lines) => {
      // const { cart } = await bsmntSdk.AddLineItemsToCart({
      //   cartId,
      //   lines,
      // });
      return {
        data: {
          id: "sadas",
        },
        userErrors: undefined,
      };
    },
    createCart: async () => {
      return {
        data: {
          id: "asdasd",
        },
        userErrors: undefined,
      };
    },
    createCartWithLines: async () => {
      return {
        data: {
          id: "sadas",
        },
        userErrors: undefined,
      };
    },
    removeLineItemsFromCart: async () => {
      return {
        data: {
          id: "sadas",
        },
        userErrors: undefined,
      };
    },
    updateLineItemsInCart: async () => {
      return {
        data: {
          id: "sadas",
        },
        userErrors: undefined,
      };
    },
  },
  createCartIfNotFound: true,
});
