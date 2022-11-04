import Head from 'next/head'
import { Header, Hero, Products } from 'examples-ui'
import { useCallback } from 'react'

import {
  useCartQuery,
  useUpdateLineItemsInCartMutation
} from '../storefront/hooks'
import {
  useAddLineItemsToCartMutation,
  useRemoveLineItemsFromCartMutation
} from '../storefront/hooks'

const PRODUCT_LIST = [
  {
    id: 1,
    name: 'Black baseball Cap',
    image: { src: '/cap.jpg', alt: 'A BLACK cap' },
    price: 19.99
  },
  {
    id: 2,
    name: 'Plain white t-shirt',
    image: { src: '/tshirt.jpg', alt: 'Plain white shirt' },
    price: 39.99
  },
  {
    id: 3,
    name: 'Hoodie audere',
    image: { src: '/hoodie.jpg', alt: 'White hoodie' },
    price: 49.99
  }
]

export default function Home() {
  const { data } = useCartQuery()
  const { mutate: handleAddToCart } = useAddLineItemsToCartMutation()
  const { mutate: handleRemoveItem } = useRemoveLineItemsFromCartMutation()
  const { mutate: handleUpdateLineItems } = useUpdateLineItemsInCartMutation()

  const amountOfItems =
    data?.lines.reduce((total, line) => {
      return total + line.quantity
    }, 0) ?? 0

  const subtotal =
    data?.lines.reduce((acum, current) => {
      const product = PRODUCT_LIST.find(
        ({ id }) => String(id) === current.merchandiseId
      )

      if (!product) return acum
      if (acum === 0) return product.price * current.quantity

      return acum + product.price * current.quantity
    }, 0) ?? 0

  const restItem = useCallback(
    (id: string | number) => {
      const productIndex =
        data?.lines.findIndex(
          ({ merchandiseId }) => merchandiseId === String(id)
        ) ?? -1

      if (productIndex !== -1) {
        const lines = [...(data?.lines ?? [])]
        const line = lines[productIndex]!

        if (line.quantity > 1) {
          lines[productIndex]!.quantity -= 1
        } else {
          lines.splice(productIndex, 1)
        }
        
        handleUpdateLineItems(lines)
      }
    },
    [handleUpdateLineItems, data?.lines]
  )

  const sumItem = useCallback(
    (id: string | number) => {
      const productIndex =
        data?.lines.findIndex(
          ({ merchandiseId }) => merchandiseId === String(id)
        ) ?? -1

      if (productIndex !== -1) {
        const lines = data?.lines ?? []
        lines[productIndex]!.quantity += 1
        handleUpdateLineItems(lines)
      }
    },
    [handleUpdateLineItems, data?.lines]
  )

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header
        link={{
          href: 'https://github.com/basementstudio/commerce-toolkit',
          text: 'GitHub'
        }}
        cart={{
          items: data?.lines ?? [],
          title: 'Products',
          products: PRODUCT_LIST,
          amountOfItems,
          subtotal,
          handleRemoveItem: (id: number | string) =>
            handleRemoveItem([String(id)]),
          restItem,
          sumItem,
          checkout: () => alert('Checkout 💸')
        }}
      />

      <main>
        <Hero
          title="BSMNT Commerce Toolkit Examples"
          subtitle="nextjs-localstorage"
        />
        <Products
          productList={PRODUCT_LIST}
          onAddToCart={(product) =>
            handleAddToCart([
              { merchandiseId: String(product.id), quantity: 1 }
            ])
          }
        />
      </main>
    </div>
  )
}
