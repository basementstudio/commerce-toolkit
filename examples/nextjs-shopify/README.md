# nextjs-shopify

## Requirements

You'll need a Shopify Storefront App to use this example. Follow [this guide](https://help.shopify.com/en/manual/apps/app-types/custom-apps) to do so.

## Walk Through

The flow is:

1. We use `@bsmnt/sdk-gen` to hook into [Shopify's Storefront API](https://shopify.dev/docs/api/storefront) — see this in `/src/storefront/sdk-gen`
2. We use `@bsmnt/storefront-hooks` to create client side hooks that'll help us manage cart state, and more — see this in `/src/storefront/hooks`
3. We use `@bsmnt/drop` to put a drop countdown in fron of our app — see this in `/src/pages/_app`

## Development

1. Install pnpm (or use whichever package manager you prefer):

   ```
   npm install -g pnpm
   ```

2. Install the dependencies with:

   ```
   pnpm
   ```

3. Start developing and watch for code changes:

   ```
   pnpm dev
   ```
