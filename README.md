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
