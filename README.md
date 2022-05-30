![image](https://user-images.githubusercontent.com/40034115/170902196-3a3e5c50-b47a-4446-a04b-995fc7ffee42.png)

Let's drop some cool stuff 🔥

`react-dropify` is the best library for interacting with the Shopify Storefront API (SFAPI).

- ✅ Start quickly with readymade queries.
- ✅ Grab the full power of the SFAPI with custom GraphQL queries.
- ✅ Type safe with a built in, ready-to-go GraphQL x TypeScript codegen.
- ✅ Cart state saved to `localStorage`, and provided via React Context.
- ✅ Drop ready, with hooks to easily create countdowns and newsletter forms.

Hyped already? Let's start.

## Getting Started

### 1. Install it

```zsh
yarn add react-dropify
```

### 2. Create a Custom App on Shopify and grab your Storefront Access Token.

See [instructions here](https://help.shopify.com/en/manual/apps/custom-apps). If you find it hard to create the Custom App, please let us know and we can expand on this point.

Save the Storefront Access Token as a public `.env` variable.

⁉️ The Storefront API Access Token can be public. In fact, the API is optimized for being accessed from the client.


### 3. Get your Store Domain Name.

This is generally something like `<your-store>.myshopify.com`.

Save the Store Domain Name as a public `.env` variable.


### 3. Create `./react-dropify/config.js` at the root of your project.

```js
// ./react-dropify/config.js

// Example showing how you'd name your environment variables in Next.js.
// Make sure you follow the convention of your chosen framework.
// And please, delete these comments!

/**
 * @type {import('react-dropify/generate').ReactDropifyConfig}
 */
module.exports = {
  domain: process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN,
  accessToken: process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN
}
```

⁉️ The Storefront API Access Token can be public. In fact, the API is optimized for being accessed from the client.

### 4. Get your SDK!

Simply run

```zsh
yarn react-dropify generate
```

Tip:
```js
  // package.json

  "scripts": {
     // your scripts...
    "generate": "yarn react-dropify generate",
  },
```

## And now?

Congratulations, now you have a type safe SDK to interact with the SFAPI. Open up `./react-dropify/sdk.ts`. It should look something like this:

```ts
import config from './config'
import { createReactDropifySdk } from './generated'

export const reactDropifySdk = createReactDropifySdk(config)
```

`reactDropifySdk` contains some basic queries, such as:

- `_GetAllProducts`
- `_GetAllCollections`
- `_GetProductByHandle`
- ... etc

What's even cooler is that you can define **custom queries** in `.graphql` files, and if you run the codegen again, you'll get all of those queries available (and type safe) on `reactDropifySdk` 💥

Isn't that amazing?

## Yeah, the SDK is one thing, but let's check out the `StorefrontProvider`

The `StorefrontProvider` is a React Context provider which manages cart state. Simply wrap it on your `App` component and you're ready to create a cool cart UI for your users.

```tsx
// Example using Next.js

import { AppProps } from 'next/app'
import { StorefrontProvider } from 'react-dropify'
import { reactDropifySdk } from '~/lib/react-dropify/sdk'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <StorefrontProvider appCartId="<store>-cart-id" client={reactDropifySdk}>
      <Component {...pageProps} />
    </StorefrontProvider>
  )
}

export default App
```

And then, somewhere in your app:

```tsx
import { useStorefront } from 'react-dropify'

const Component = () => {
  const {
    cart,
    cartItemsCount,
    cartToggleState,
    onAddLineItem,
    onRemoveLineItem,
    onUpdateLineItem
  } = useStorefront()

  return <div />
}
```

---

And this is not all. I'll get some rest and continue writing this README later on 😅
