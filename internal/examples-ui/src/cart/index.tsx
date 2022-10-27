import { FC, PropsWithChildren } from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import styled from 'styled-components'
import type { Product } from '../products'

export type Cart = {
  title?: string
  subtotal: number
  items: { merchandiseId: string; quantity: number }[]
  products?: Product[]
  amountOfItems?: number
  handleRemoveItem: (id: Product['id']) => void
  sumItem: (id: Product['id']) => void
  restItem: (id: Product['id']) => void
  checkout: () => void
}

export const Cart: FC<PropsWithChildren<Cart>> = ({
  children,
  title = 'Products',
  subtotal,
  items,
  products = [],
  handleRemoveItem,
  restItem,
  sumItem,
  checkout
}) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>{children}</DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <StlyedDropdownMenuContent sideOffset={12} align="end">
          <StyledCartHeader>
            <StyledDropdownMenuLabel>{title}</StyledDropdownMenuLabel>
            <StlyedDropdownMenuClose>
              <svg
                width="24"
                height="24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 6 6 18M6 6l12 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </StlyedDropdownMenuClose>
          </StyledCartHeader>

          <StyledCartProductList>
            {items.length < 1 ? (
              <p
                style={{
                  textAlign: 'center',
                  fontSize: '1.4rem',
                  margin: '48px 0'
                }}
              >
                Your Cart is Empty
              </p>
            ) : (
              items.map((product, index) => {
                const currentProduct = products.find(
                  ({ id }) => String(id) === product.merchandiseId
                )

                return (
                  currentProduct && (
                    <StyledDropdownMenuCartProduct key={index}>
                      <StyledCartProductThumbnail>
                        <img
                          src={currentProduct.image.src}
                          alt={currentProduct.image.alt}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'contain'
                          }}
                        />
                      </StyledCartProductThumbnail>
                      <StyledProductBody>
                        <div>
                          <label>{currentProduct.name}</label>
                          <p style={{ marginTop: 8 }}>
                            $ {currentProduct.price}
                          </p>
                        </div>
                        <StyledProductControls>
                          <div
                            style={{ display: 'flex', alignItems: 'center' }}
                          >
                            <StyledDropdownMenuItemProductControls
                              onSelect={(e: any) => {
                                e.preventDefault()
                                restItem(currentProduct.id)
                              }}
                            >
                              -
                            </StyledDropdownMenuItemProductControls>
                            <p style={{ margin: '0 12px 0 0' }}>
                              {product.quantity}
                            </p>
                            <StyledDropdownMenuItemProductControls
                              onSelect={(e: any) => {
                                e.preventDefault()
                                sumItem(currentProduct.id)
                              }}
                            >
                              +
                            </StyledDropdownMenuItemProductControls>
                          </div>

                          <DropdownMenuItemProductRemove
                            onSelect={(e: any) => {
                              e.preventDefault()
                              handleRemoveItem(currentProduct.id)
                            }}
                          >
                            Remove
                          </DropdownMenuItemProductRemove>
                        </StyledProductControls>
                      </StyledProductBody>
                    </StyledDropdownMenuCartProduct>
                  )
                )
              })
            )}
          </StyledCartProductList>

          <DropdownMenu.Separator
            style={{
              height: 1,
              margin: '0 0 12px 0',
              backgroundColor: '#5c5c5c'
            }}
          />

          <StyledDropdownMenuGroupCartCheckout>
            <StyledCartCheckoutPrice>
              <p>Subtotal</p>
              <p>$ {subtotal.toFixed(2)}</p>
            </StyledCartCheckoutPrice>
            <DropdownMenuItemCheckoutButton
              onSelect={checkout}
              disabled={items.length < 1}
            >
              Checkout
            </DropdownMenuItemCheckoutButton>
          </StyledDropdownMenuGroupCartCheckout>
        </StlyedDropdownMenuContent>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

const StlyedDropdownMenuContent = styled(DropdownMenu.Content)`
  border: 1px solid #5c5c5c;
  background: #000;
  padding: 16px 24px;
  min-width: 98vw;
  max-width: 98vw;
  overflow-y: auto;
  border-radius: 4px;

  @media screen and (min-width: 640px) {
    min-width: 420px;
    max-width: 420px;
  }
`

const StyledCartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`

const StyledDropdownMenuLabel = styled(DropdownMenu.Label)`
  font-size: 1.65rem;
  font-weight: 700;
`

const StyledDropdownMenuCartProduct = styled(DropdownMenu.Group)`
  pointer-events: none;
  margin-bottom: 24px;
  display: flex;
  justify-content: space-between;
`

const StyledCartProductThumbnail = styled.div`
  position: relative;
  overflow: hidden;
  aspect-ratio: 1;
  width: 33%;

  img {
    border-radius: 4px;
  }
`

const StyledProductBody = styled.div`
  pointer-events: all;
  margin-left: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`

const StyledDropdownMenuGroupCartCheckout = styled(DropdownMenu.Group)`
  margin-top: 24px;

  &:hover {
    outline: 0;
  }
`

const DropdownMenuItemCheckoutButton = styled(DropdownMenu.Item)`
  text-align: center;
  display: block;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${(props) => (props.disabled ? '.5' : '1')};
  margin-top: 16px;
  font-size: 1.4rem;
  width: 100%;
  padding: 8px;
  background-color: #ff4d00;
  border: 0;
  border-radius: 4px;
  margin-top: 32px;

  &:hover,
  &:focus {
    outline-color: ${(props) => (props.disabled ? null : '#ff4d00')};
    outline-style: ${(props) => (props.disabled ? null : 'solid')};
    outline-offset: ${(props) => (props.disabled ? null : '4px')};
    outline-width: ${(props) => (props.disabled ? null : '1px')};
  }
`

const DropdownMenuItemProductRemove = styled(DropdownMenu.Item)`
  border: 0;
  margin-left: 32px;
  background-color: #ff4d00;
  border-radius: 4px;
  padding: 4px 8px;
  cursor: pointer;

  &:hover,
  &:focus {
    outline-color: #ff4d00;
    outline-style: solid;
    outline-offset: 4px;
    outline-width: 1px;
  }
`

const StyledProductControls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StyledDropdownMenuItemProductControls = styled(DropdownMenu.Item)`
  margin-right: 12px;
  cursor: pointer;
  outline: none;
  border-radius: 4px;

  &:last-child {
    margin-right: 0;
  }

  &:hover,
  &:focus {
    outline-color: #ff4d00;
    outline-style: solid;
    outline-offset: 4px;
    outline-width: 1px;
  }
`

const StlyedDropdownMenuClose = styled(DropdownMenu.Item)`
  cursor: pointer;
  outline: none;
  display: flex;
  transition: color 0.1s linear;
  border-radius: 4px;

  &:hover,
  &:focus {
    outline-color: #ff4d00;
    outline-style: solid;
    outline-offset: 4px;
    outline-width: 1px;
  }
`

const StyledCartProductList = styled.div`
  max-height: 324px;
  overflow-y: auto;
  padding-right: 5px;
`

const StyledCartCheckoutPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  font-size: 1.4rem;
`
