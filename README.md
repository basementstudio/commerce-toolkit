# react-shopify-drop (not production ready)
react-shopify-drop is a react library for interacting with [shopify's storefront api](https://shopify.dev/api/storefront#top).


<p>
  <a aria-label="NPM version" href="https://www.npmjs.com/package/react-shopify-drop">
    <img alt="" src="https://badge.fury.io/js/react-shopify-drop.svg">
  </a>
  <a aria-label="License" href="https://github.com/basementstudio/react-shopify-drop/blob/master/LICENSE">
    <img alt="" src="https://badgen.net/github/license/basementstudio/react-shopify-drop">
  </a>
</p>

---

⚠️ Status: Alpha — please don't use this in production unless willing to contribute to the library.

<a aria-label="Vercel logo" href="https://basement.studio">
  <img src="https://basement.studio/gh-badge.svg">
</a>

This is a private package from [basement.studio](https://basement.studio).

## Installation

Use the package manager [yarn](https://www.npmjs.com/package/react-shopify-drop) to install react-shopify-drop.

```bash
yarn add react-shopify-drop
```

## First steps

### Set up

#### **`app.js`**

```typescript
import {
  createStorefrontClient,
  StorefrontProvider
} from 'react-shopify-drop';

export const storefrontClient = createStorefrontClient({
  accessToken: 'storefront-app-access-token',
  endpoint: 'storefront-app-graphql-endpoint',
});

const App = () => (
  <StorefrontProvider
    appCartId="app-name-cart-id"
    client={storefrontClient}
  >
    <MyApp />
  </StorefrontProvider>
);

export default App;
```

### Usage

#### **`component.js`**
Under the hood, the `<StorefrontProvider />` creates a friendly API with a set of useful properties to interact with your shopify application

```typescript
import { useStorefront } from 'react-shopify-drop';

const Component = () => {
  const api = useStorefront();

  return <div />;
};
```

## API properties
The API comes in form of an object with the following properties:

##### `cart`: _object_
An object which contains the shopify users cart.

##### `cartItemsCount`: _number_
The amount of items in the current cart.

##### `cartToggleState`: _object_
A toggle state to help manage the cart UI state (opened / closed).
  - isOn: _boolean_ - Defines the cart UI state.
  - handleToggle: _function_ - Toggles the cart UI state. 
  - handleOn: _function_ - Sets the cart UI state as on (opened). 
  - handleOff: _function_ - Sets the cart UI state as on (closed). 

##### `errors`: _object_
An object containing a set of possible errors
  - createCartError: _Error_ | _null_
  - addLineItemError: _Error_ | _null_
  - updateLineItemError: _Error_ | _null_
  - removeLineItemError: _Error_ | _null_

##### `onAddLineItem`: _function_ ``({ merchandiseId: string, quantity: number }) => Promise<void>``
Adds an item to the shopify cart.

##### `onUpdateLineItem`: _function_ ``({ merchandiseId: string, quantity: number }) => Promise<void>``
Updates an item inside the shopify cart.

##### `onRemoveLineItem`: _function_ ``({ merchandiseId: string }) => Promise<void>``
Removes an item from the shopify cart.

## Using the full Storefront client
In the other hand, you can also export the created client and import it outside your application frontend (f.e: next.js page getStaticProps function)

```typescript
import { storefrontClient } from '~/pages/_app.js';

export const getStaticProps = async () => {
  const { product } = await storefrontClient.GetProductByHandle({ handle: 'my-product' });

  return {
    props: {
      product
    },
    revalidate: 1
  };
};
```
### Client properties

##### `CreateCart`: _function_ ``(variables?: CreateCartMutationVariables, requestHeaders?: Dom.RequestInit["headers"]) => Promise<CreateCartMutation>``
Creates a new cart.

##### `CreateCartWithLines`: _function_ ``(variables: CreateCartWithLinesMutationVariables, requestHeaders?: Dom.RequestInit["headers"]) => Promise<CreateCartWithLinesMutation>``
Creates a new cart with line.

##### `AddLineItem`: _function_ ``(variables: AddLineItemMutationVariables, requestHeaders?: Dom.RequestInit["headers"]) => Promise<AddLineItemMutation>``
Adds an item to a line.

##### `UpdateLineItem`: _function_ ``(variables: UpdateLineItemMutationVariables, requestHeaders?: Dom.RequestInit["headers"]) => Promise<UpdateLineItemMutation>``
Updates a line.

##### `RemoveLineItem`: _function_ ``(variables: RemoveLineItemMutationVariables, requestHeaders?: Dom.RequestInit["headers"]) => Promise<RemoveLineItemMutation>``
Removes an item from a line.

##### `FetchCart`: _function_ ``(variables: FetchCartQueryVariables, requestHeaders?: Dom.RequestInit["headers"]) => Promise<FetchCartQuery>``
Fetches an already created cart.

##### `GetProductByHandle`: _function_ ``(variables: GetProductByHandleQueryVariables, requestHeaders?: Dom.RequestInit["headers"]) => Promise<GetProductByHandleQuery>``
Fetches a product based on a handle.

##### `GetAllProducts`: _function_ ``(variables?: GetAllProductsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]) => Promise<GetAllProductsQuery>``
Fetches all products on a shop.

##### `GetProductsOnCollection`: _function_ ``(variables: GetProductsOnCollectionQueryVariables, requestHeaders?: Dom.RequestInit["headers"]) => Promise<GetProductsOnCollectionQuery>``
Fetches all collection products on a shop.

##### `GetCollections`: _function_ ``(variables?: GetCollectionsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]) => Promise<GetCollectionsQuery>``
Fetches all collections.

##### `Request`: _function_ ``(query: string, variables?: Record<string, any>) => Promise<any>``
Executes a custom query.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)