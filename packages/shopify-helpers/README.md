# @bsmnt/shopify-helpers

Internal, legacy use only. Although you can install at your risk:

```zsh
yarn add @bsmnt/shopify-helpers
```

Exports:

- `createStandardShopifyStorefrontSdk`: _function_ to create a shopify storefront sdk with pre made queries. We generally recommend you don't use this, and actually create the queries that fit your use case.
- `useProductHelper`: _Hook_ that helps manage product state, such as options available, options selected, and variant selected.
