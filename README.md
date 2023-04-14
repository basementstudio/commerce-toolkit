# BSMNT Commerce Toolkit

![commerce-toolkit](https://user-images.githubusercontent.com/40034115/195423154-223a8187-5c3c-4caa-a19a-843b07d1684a.jpeg)

Welcome to the **BSMNT Commerce Toolkit**: packages to help you ship better storefronts, faster, and with more confidence.

This toolkit has helped us—[basement.studio](https://basement.studio/)—ship reliable storefronts that could handle crazy amounts of traffic. Some of them include: [shopmrbeast.com](https://shopmrbeast.com/), [karljacobs.co](https://karljacobs.co/), [shopmrballen.com](https://shopmrballen.com/), and [ranboo.fashion](https://ranboo.fashion/).

<hr />

<b><i>💡 If you're looking for an example with Next.js + Shopify, check out [our example here](./examples/nextjs-shopify).</i></b>

<hr />

This repository currently holds three packages:

1. `@bsmnt/storefront-hooks`: React Hooks to manage storefront client-side state.

   - ✅ Manage the whole cart lifecycle with the help of [`@tanstack/react-query`](https://tanstack.com/query/v4) and `localStorage`
   - ✅ Easily manage your cart mutations (like adding stuff into it)
   - ✅ An opinionated, but powerful, way to structure storefront hooks

2. `@bsmnt/sdk-gen`: a CLI that generates a type-safe, graphql SDK.

   - ✅ Easily connect to any GraphQL API
   - ✅ Generated TypeScript types from your queries
   - ✅ Lighter than avarage, as it doesn't depend on `graphql` for production

3. `@bsmnt/drop`: Helpers for managing a countdown. Generally used to create hype around a merch drop.
   - ✅ Create your countdown in just a couple of minutes
   - ✅ Reveal your site only when the drop is ready to go ([see this example from one of our drops](https://twitter.com/MikaelSargsyan/status/1578131832331272224))

These play really well together, but can also be used separately. Let's see how they work!

<br />

## `@bsmnt/storefront-hooks`

```zsh
yarn add @bsmnt/storefront-hooks @tanstack/react-query
```

This package exports:

- `createStorefrontHooks`: _function_ that creates the hooks needed to interact with the cart.

```ts
import { createStorefrontHooks } from '@bsmnt/storefront-hooks'

export const hooks = createStorefrontHooks({
  cartCookieKey: '', // to save cart id in cookie
  fetchers: {}, // hooks will use these internally
  mutators: {}, // hooks will use these internally
  createCartIfNotFound: false, // defaults to false. if true, will create a cart if none is found
  queryClientConfig: {} // internal query client config
})
```

Take a look at some examples:

<details>
    <summary>Simple example, with <code>localStorage</code></summary>
    
```ts
// todo
```
</details>
<details>
    <summary>Complete example, with <code>@bsmnt/sdk-gen</code></summary>

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

import { createStorefrontHooks } from '@bsmnt/storefront-hooks'
import { bsmntSdk } from '../gql-sdk/sdk'

export const hooks = createStorefrontHooks({
  cartCookieKey: '<my-store>',
  fetchers: {
    fetchCart: async (cartId) => {
      const { cart } = await bsmntSdk.FetchCart({ id: cartId })
      if (cart === undefined) throw new Error('Request failed')
      return cart
    }
  },
  mutators: {
    addLineItemsToCart: async (cartId, lines) => {
      const { cartLinesAdd } = await bsmntSdk.AddLineItem({
        cartId,
        lines
      })
      return {
        data: cartLinesAdd?.cart,
        userErrors: cartLinesAdd?.userErrors
      }
    },
    createCart: async () => {
      const { cartCreate } = await bsmntSdk.CreateCart()
      return {
        data: cartCreate?.cart,
        userErrors: cartCreate?.userErrors
      }
    },
    createCartWithLines: async (lines) => {
      const { cartCreate } = await bsmntSdk.CreateCartWithLines({ lines })
      return {
        data: cartCreate?.cart,
        userErrors: cartCreate?.userErrors
      }
    },
    removeLineItemsFromCart: async (cartId, lineIds) => {
      const { cartLinesRemove } = await bsmntSdk.RemoveLineItem({
        cartId,
        lineIds
      })
      return {
        data: cartLinesRemove?.cart,
        userErrors: cartLinesRemove?.userErrors
      }
    },
    updateLineItemsInCart: async (cartId, lines) => {
      const { cartLinesUpdate } = await bsmntSdk.UpdateLineItem({
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
  }
})
```

</details>

<br />
 
## `@bsmnt/sdk-gen`

```zsh
yarn add @bsmnt/sdk-gen --dev
```

This package installs a CLI with a single command: `generate`. Running it will hit your GraphQL endpoint and generate TypeScript types from your queries and mutations.

```bash
# By default, you can have a file tree like the following:
.
└── sdk-gen/
    ├── config.js
    └── documents.gql
```

```js
// ./sdk-gen/config.js

/**
 * @type {import("@bsmnt/sdk-gen").Config}
 */
module.exports = {
  endpoint: '',
  headers: {}
}
```

```gql
# ./sdk-gen/document.gql

query FetchCart($id: ID!) {
  cart(id: $id) {
    id
    lines {
      # ...
    }
    checkoutURL
    # ... any other key you want to fetch
  }
}

```

And then you can run `generate`:

```zsh
yarn sdk-gen generate
```

This will look inside `./sdk-gen/` for a `config.js` file, and for all your `.{graphql,gql}` files under that directory.

If you want to use a custom directory (and not the default, which is `./sdk-gen/`), you can use the `--dir` argument.

```zsh
yarn sdk-gen generate --dir ./my-custom/directory
```

After running the generator, you should get the following result:

```bash
.
└── sdk-gen/
    ├── config.js
    ├── documents.gql
    ├── generated/              # <- generated
    │   ├── index.ts
    │   └── graphql.schema.json
    └── sdk.ts                  # <- generated
```

Inside `sdk.ts`, you'll have the `bsmntSdk` being exported:

```ts
import config from './config'
import { createSdk } from './generated'

export const bsmntSdk = createSdk(config)
```

And that's all. You should be able to use that to hit your GraphQL API in a type safe manner.

An added benefit is that this sdk doesn't depend on `graphql`. Many GraphQL Clients require it as a peer dependency (e.g [`graphql-request`](https://github.com/prisma-labs/graphql-request/blob/master/package.json#L53)), which adds important KBs to the bundle.

↳ For a standard way to use this with the [Shopify Storefront API](https://shopify.dev/api/storefront), take a look at our example [With Next.js + Shopify](./examples/nextjs-shopify/src/storefront/sdk-gen).

<br />

## `@bsmnt/drop`

```zsh
yarn add @bsmnt/drop
```

This package exports:

- `CountdownProvider`: _Context Provider_ for the `CountdownStore`
- `useCountdownStore`: _Hook_ that consumes the `CountdownProvider` context and returns the `CountdownStore`
- `zeroPad`: _utility_ to pad a number with zeroes

To use, just wrap the `CountdownProvider` wherever you want to add your countdown. For example with Next.js:

```tsx
// _app.tsx
import type { AppProps } from 'next/app'
import { CountdownProvider } from '@bsmnt/drop'
import { Countdown } from '../components/countdown'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CountdownProvider
      endDate={Date.now() + 1000 * 5} // set this to 5 seconds from now just to test
      countdownChildren={<Countdown />}
      exitDelay={1000} // optional, just to give some time to animate the countdown before finally unmounting it
      startDate={Date.now()} // optional, just if you need some kind of progress UI
    >
      <Component {...pageProps} />
    </CountdownProvider>
  )
}
```

And then your Countdown may look something like:

```tsx
import { useCountdownStore } from '@bsmnt/drop'

export const Countdown = () => {
  const humanTimeRemaining = useCountdownStore()(
    (state) => state.humanTimeRemaining // keep in mind this is zustand, so you can slice this store
  )

  return (
    <div>
      <h1>Countdown</h1>
      <ul>
        <li>Days: {humanTimeRemaining.days}</li>
        <li>Hours: {humanTimeRemaining.hours}</li>
        <li>Minutes: {humanTimeRemaining.minutes}</li>
        <li>Seconds: {humanTimeRemaining.seconds}</li>
      </ul>
    </div>
  )
}
```

<details>
<summary>Important note regarding SSR</summary>

If you render `humanTimeRemaining.seconds`, there's a high chance that your server will render something different than your client, as that value will change each second.

In most cases, you can safely `suppressHydrationWarning` (see issue [#21](https://github.com/basementstudio/commerce-toolkit/issues/21) for more info):

```tsx
import { useCountdownStore } from '@bsmnt/drop'

export const Countdown = () => {
  const humanTimeRemaining = useCountdownStore()(
    (state) => state.humanTimeRemaining // keep in mind this is zustand, so you can slice this store
  )

  return (
    <div>
      <h1>Countdown</h1>
      <ul>
        <li suppressHydrationWarning>Days: {humanTimeRemaining.days}</li>
        <li suppressHydrationWarning>Hours: {humanTimeRemaining.hours}</li>
        <li suppressHydrationWarning>Minutes: {humanTimeRemaining.minutes}</li>
        <li suppressHydrationWarning>Seconds: {humanTimeRemaining.seconds}</li>
      </ul>
    </div>
  )
}
```

If you don't want to take that risk, a safer option is waiting until your app is hydrated before rendering the real time remaining:

```tsx
import { useEffect, useState } from 'react'
import { useCountdownStore } from '@bsmnt/drop'

const Countdown = () => {
  const humanTimeRemaining = useCountdownStore()(
    (state) => state.humanTimeRemaining // keep in mind this is zustand, so you can slice this store
  )

  const [hasRenderedOnce, setHasRenderedOnce] = useState(false)

  useEffect(() => {
    setHasRenderedOnce(true)
  }, [])

  return (
    <div>
      <h1>Countdown</h1>
      <ul>
        <li>Days: {humanTimeRemaining.days}</li>
        <li>Hours: {humanTimeRemaining.hours}</li>
        <li>Minutes: {hasRenderedOnce ? humanTimeRemaining.minutes : '59'}</li>
        <li>Seconds: {hasRenderedOnce ? humanTimeRemaining.seconds : '59'}</li>
      </ul>
    </div>
  )
}
```

</details>

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

[MIT](./LICENSE/)

## Authors

- Santiago Moran ([@morangsantiago](https://twitter.com/morangsantiago)) – [basement.studio](https://basement.studio)
- Julian Benegas ([@julianbenegas8](https://twitter.com/julianbenegas8)) – [basement.studio](https://basement.studio)
