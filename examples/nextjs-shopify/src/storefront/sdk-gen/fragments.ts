import type {
    Collection,
    Product,
    CollectionGenqlSelection,
    FieldsSelection,
    ProductGenqlSelection,
    ImageGenqlSelection,
    ProductVariantGenqlSelection,
    ProductVariant,
    Image,
  } from './generated'
  
  const imageFragment = {
    url: true,
    width: true,
    height: true,
    altText: true,
  } satisfies ImageGenqlSelection
  
  export type ImageFragment = FieldsSelection<Image, typeof imageFragment>
  
  export const productVariantFragment = {
    id: true,
    title: true,
    availableForSale: true,
    quantityAvailable: true,
    compareAtPriceV2: {
      amount: true,
      currencyCode: true,
    },
    priceV2: {
      amount: true,
      currencyCode: true,
    },
    image: imageFragment,
    selectedOptions: {
      name: true,
      value: true,
    },
  } satisfies ProductVariantGenqlSelection
  
  export type ProductVariantFragment = FieldsSelection<
    ProductVariant,
    typeof productVariantFragment
  >
  
  export const productFragment = {
    id: true,
    title: true,
    options: {
      __args: { first: 25 },
      id: true,
      name: true,
      values: true,
    },
    availableForSale: true,
    variants: {
      __args: { first: 100 },
      nodes: productVariantFragment
    },
  } satisfies ProductGenqlSelection
  
  export type ProductFragment = FieldsSelection<Product, typeof productFragment>
  
  export const collectionFragment = {
    id: true,
    title: true,
    description: true,
    products: {
      __args: { first: 100 },
      nodes: productFragment,
    },
  } satisfies CollectionGenqlSelection
  
  export type CollectionFragment = FieldsSelection<
    Collection,
    typeof collectionFragment
  >
  