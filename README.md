# BSMNT Commerce Toolkit

![commerce-toolkit](https://user-images.githubusercontent.com/40034115/195423154-223a8187-5c3c-4caa-a19a-843b07d1684a.jpeg)

Welcome to the **BSMNT Commerce Toolkit**: packages to help you ship better storefronts, faster, and with more confidence.

This toolkit has helped us—[basement.studio](https://basement.studio/)—ship reliable storefronts that could handle crazy amounts of traffic. Some of them include: [shopmrbeast.com](https://shopmrbeast.com/), [karljacobs.co](https://karljacobs.co/), [shopmrballen.com](https://shopmrballen.com/), and [ranboo.fashion](https://ranboo.fashion/).

This repository currently holds three packages:

1. `@bsmnt/storefront-hooks`: React Hooks to manage storefront client-side state.
    - ✅ Manage the whole cart lifecycle with the help of [`@tanstack/react-query`](https://tanstack.com/query/v4) and `localStorage`
    - ✅ Easily manage your cart mutations (like adding stuff into it)
    - ✅ An opinionated, but powerful, way to structure storefront hooks

2. `@bsmnt/sdk-gen`: a CLI that generates a type-safe, graphql SDK.
    - ✅ Easily connect to any GraphQL API
    - ✅ Generated TypeScript types from your queries

3. `@bsmnt/drop`: Helpers for managing a countdown. Generally used to create hype around a merch drop.
    - ✅ Create your "countdown" in just a couple of minutes
    - ✅ Reveal your site only when the drop is ready to go ([see this example from one of our KarlJacobs drops](https://twitter.com/MikaelSargsyan/status/1578131832331272224))

These play really well together, but can also be used separately. Let's see how they work!

<br />

## `@bsmnt/storefront-hooks`

```zsh
yarn add @bsmnt/storefront-hooks @tanstack/react-query
```

This package exports:

- `createStorefrontHooks`: *function* that creates the hooks needed to interact with the cart.

```ts
import { createStorefrontHooks } from "@bsmnt/storefront-hooks";

export const hooks = createStorefrontHooks({
  cartLocalStorageKey: "",     // to save cart id in local storage
  fetchers: {},                // hooks will use these internally
  mutators: {},                // hooks will use these internally
  createCartIfNotFound: false, // defaults to false. if true, will create a cart if none is found
  extraHooks: {},              // other hooks you want to add here just to keep the code organized
  queryClientConfig: {},       // internal query client config
});
```

Take a look at some examples:

<details>
    <summary>Example with <code>localStorage</code></summary>
    
```ts
// todo
```
</details>
<details>
    <summary>Example with <code>@bsmnt/sdk-gen</code></summary>

```bash
# Given the following file tree:
.
└── storefront/
    ├── sdk-gen/
    │   └── sdk.ts # generated with @bsmnt/sdk-gen
    └── hooks.ts # <- we'll work here
```

This example depends on [@bsmnt/sdk-gen](#bsmntsdk-gen).

```ts
// ./storefront/hooks.ts

import { createStorefrontHooks } from "@bsmnt/storefront-hooks";
import { bsmntSdk } from "../gql-sdk/sdk";

export const hooks = createStorefrontHooks({
  cartLocalStorageKey: "<my-store>",
  fetchers: {
    fetchCart: async (cartId) => {
      const { cart } = await bsmntSdk.FetchCart({ id: cartId });
      if (cart === undefined) throw new Error("Request failed");
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
});
```

</details>

<br />
 
## `@bsmnt/sdk-gen`

```zsh
yarn add @bsmnt/sdk-gen --dev && yarn add graphql graphql-request
```

<br />

## `@bsmnt/drop`

```zsh
yarn add @bsmnt/drop
```

<br />

## Examples

Some examples to get you started:

- [With Next.js + Shopify](./examples/nextjs-shopify)
- [With Next.js + `localStorage`](./examples/nextjs-localstorage)

<br />

---

## Contributing

Pull requests are welcome. Issues are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Authors

- Santiago Moran ([@morangsantiago](https://twitter.com/morangsantiago)) – [basement.studio](https://basement.studio)
- Julian Benegas ([@julianbenegas8](https://twitter.com/julianbenegas8)) – [basement.studio](https://basement.studio)
