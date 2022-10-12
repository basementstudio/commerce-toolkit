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
    fetchCart: async (cartId) => {
      const { cart } = await bsmntSdk.FetchCart({ id: cartId });
      if (cart === undefined) throw new Error("Cart not found");
      return cart;
    },
  },
  mutators: {
    addLineItemsToCart: async (cartId, lines) => {
      const { cartLinesAdd } = await bsmntSdk.AddLineItem({
        cartId,
        lines,
      });
      return {
        data: cartLinesAdd?.cart,
        userErrors: cartLinesAdd?.userErrors,
      };
    },
    createCart: async () => {
      const { cartCreate } = await bsmntSdk.CreateCart();
      return {
        data: cartCreate?.cart,
        userErrors: cartCreate?.userErrors,
      };
    },
    createCartWithLines: async (lines) => {
      const { cartCreate } = await bsmntSdk.CreateCartWithLines({ lines });
      return {
        data: cartCreate?.cart,
        userErrors: cartCreate?.userErrors,
      };
    },
    removeLineItemsFromCart: async (cartId, lineIds) => {
      const { cartLinesRemove } = await bsmntSdk.RemoveLineItem({
        cartId,
        lineIds,
      });
      return {
        data: cartLinesRemove?.cart,
        userErrors: cartLinesRemove?.userErrors,
      };
    },
    updateLineItemsInCart: async (cartId, lines) => {
      const { cartLinesUpdate } = await bsmntSdk.UpdateLineItem({
        cartId,
        lines: lines.map((l) => ({
          id: l.merchandiseId,
          quantity: l.quantity,
          attributes: l.attributes,
        })),
      });
      return {
        data: cartLinesUpdate?.cart,
        userErrors: cartLinesUpdate?.userErrors,
      };
    },
  },
  createCartIfNotFound: true,
});
