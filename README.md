# React Dropify 

Let's drop some cool stuff 🔥

![react](https://user-images.githubusercontent.com/13522179/174338656-b1644ca5-f768-45ce-8576-b342f0675fae.png)


`react-dropify` is the best library for interacting with the Shopify Storefront API (SFAPI).

- ✅ Start quickly with ready-made queries.
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

### 4. Get your SDK

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

## Let's see the results!

Congratulations, you now have a type safe SDK to interact with the SFAPI. Open up `./react-dropify/sdk.ts`. It should look something like this:

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

## Using the `StorefrontProvider`

The `StorefrontProvider` is a React Context Provider which manages cart state. Wrap it on your `App` component.

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

When you add an item to cart, the provider:

1. will check on `localStorage` to see if there's a cart id stored there.
2. will fetch the cart **only when needed**, and will cache the result using [swr](https://swr.vercel.app/).
3. will report errors to an event emitter.

---

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Authors

- Santiago Moran ([@morangsantiago](https://twitter.com/morangsantiago)) – [basement.studio](https://basement.studio)
- Julian Benegas ([@julianbenegas8](https://twitter.com/julianbenegas8)) – [basement.studio](https://basement.studio)
