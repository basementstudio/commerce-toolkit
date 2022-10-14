import {
  QueryClient,
  QueryClientConfig,
  QueryClientProvider,
  QueryClientProviderProps,
} from "@tanstack/react-query";

import * as addLines from "./mutations/add-lines";
import * as removeLines from "./mutations/remove-lines";
import * as updateLines from "./mutations/update-lines";
import * as cartQuery from "./queries/cart";
import {
  BarebonesCart,
  LineItem,
  NoInfer,
  OmitIndexSignature,
  OptionalPromise,
  UserError,
} from "./types";

type MutatorResult<Data> = {
  data: Data | null | undefined;
  userErrors: UserError[] | undefined;
  silenceUserErrors?: boolean;
};

export type CartMutators<Cart> = {
  createCart: () => OptionalPromise<MutatorResult<Cart>>;
  createCartWithLines: (
    lines: LineItem[]
  ) => OptionalPromise<MutatorResult<Cart>>;
  addLineItemsToCart: (
    cartId: string,
    lines: LineItem[]
  ) => OptionalPromise<MutatorResult<Cart>>;
  updateLineItemsInCart: (
    cartId: string,
    lines: LineItem[]
  ) => OptionalPromise<MutatorResult<Cart>>;
  removeLineItemsFromCart: (
    cartId: string,
    lineIds: string[]
  ) => OptionalPromise<MutatorResult<Cart>>;
};

type StorefrontMutators<Cart> = CartMutators<Cart>;

/**
 *
 * @example
 * export const {
 *   QueryClientProvider,
 *   useCartQuery,
 *   useOptimisticCartUpdate,
 *   useAddLineItemsToCartMutation,
 *   ...rest
 * } = createStorefrontHooks({
 *   cartLocalStorageKey: 'my-store',
 *   fetchers: {
 *     fetchCart: async (cartId) => {
 *       const { cart } = await reactDropifySdk.FetchCart({ id: cartId })
 *       return cart
 *     }
 *   },
 *   mutators: {
 *     ...yourMutators
 *   }
 * })
 */
export function createStorefrontHooks<
  Cart extends BarebonesCart,
  ExtraHooks extends Record<string, (...args: any) => OptionalPromise<any>>
>({
  cartLocalStorageKey,
  fetchers,
  mutators,
  createCartIfNotFound,
  queryClientConfig,
  extraHooks,
}: {
  cartLocalStorageKey: string;
  fetchers: {
    fetchCart: (cartId: string) => OptionalPromise<Cart | null>;
  };
  mutators: StorefrontMutators<NoInfer<Cart>>;
  createCartIfNotFound?: boolean;
  queryClientConfig?: QueryClientConfig;
  extraHooks?: ExtraHooks;
}) {
  const queryClient = new QueryClient(queryClientConfig);

  return {
    QueryClientProvider: (props: Omit<QueryClientProviderProps, "client">) => {
      // @ts-ignore
      return <QueryClientProvider {...props} client={queryClient} />;
    },
    useCartQuery: (options?: cartQuery.UseCartQueryUserOptions<Cart>) => {
      return cartQuery.useCartQuery({
        cartLocalStorageKey,
        fetchCart: fetchers.fetchCart,
        mutators: { createCart: mutators.createCart },
        options: {
          ...options,
          createCartIfNotFound:
            options?.createCartIfNotFound ?? createCartIfNotFound,
        },
      });
    },
    useOptimisticCartUpdate: () => {
      return cartQuery.useOptimisticCartUpdate<Cart>();
    },
    useAddLineItemsToCartMutation: (
      options?: addLines.AddLineItemsToCartMutationUserOptions<Cart>
    ) => {
      return addLines.useAddLineItemsToCartMutation<Cart>({
        mutators: {
          addLineItemsToCart: mutators.addLineItemsToCart,
          createCartWithLines: mutators.createCartWithLines,
        },
        cartLocalStorageKey,
        options: { ...options },
      });
    },
    useUpdateLineItemsInCartMutation: (
      options?: updateLines.UpdateLineItemsInCartMutationUserOptions<Cart>
    ) => {
      return updateLines.useUpdateLineItemsInCartMutation<Cart>({
        mutators: { updateLineItemsInCart: mutators.updateLineItemsInCart },
        cartLocalStorageKey,
        options: { ...options },
      });
    },
    useRemoveLineItemsFromCartMutation: (
      options?: removeLines.RemoveLineItemsFromCartMutationUserOptions<Cart>
    ) => {
      return removeLines.useRemoveLineItemsFromCartMutation<Cart>({
        mutators: { removeLineItemsFromCart: mutators.removeLineItemsFromCart },
        cartLocalStorageKey,
        options: { ...options },
      });
    },
    ...(extraHooks as OmitIndexSignature<ExtraHooks>),
  };
}
