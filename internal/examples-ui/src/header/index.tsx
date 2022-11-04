import styled from 'styled-components'
import { FC } from 'react'

import { Container } from '../container'
import { Cart } from '../cart'

type Header = { cart: Cart } & {
  title?: string
  link: { text: string; href: string }
}

export const Header: FC<Header> = ({ link, title, cart }) => {
  return (
    <header style={{ fontFamily: 'Inter, sans-serif' }}>
      <Container>
        <StyledNav>
          <StyledLink target="_blank" rel="noreferrer" href={link.href}>
            {link.text}
          </StyledLink>

          <p
            style={{
              fontFamily: 'Basement Grotesque, sans-serif',
              fontSize: '1.2rem'
            }}
          >
            {title}
          </p>

          <Cart
            items={cart.items}
            title={cart.title}
            subtotal={cart.subtotal}
            products={cart.products}
            handleRemoveItem={cart.handleRemoveItem}
            restItem={cart.restItem}
            sumItem={cart.sumItem}
            checkout={cart.checkout}
          >
            <StyledCartButton>
              Cart ({cart.amountOfItems ?? 0})
            </StyledCartButton>
          </Cart>
        </StyledNav>
      </Container>
    </header>
  )
}

const StyledNav = styled.nav`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, minmax(min-content, 1fr));
  justify-items: center;
  align-items: center;
  padding: 1rem 0;
`

const StyledLink = styled.a`
  font-size: 1.1rem;
  margin-right: auto;
  transition: color 0.1s linear;
  outline-color: #fff;
  border-radius: 4px;

  &:hover,
  &:focus {
    outline-color: #0024ad;
    outline-style: solid;
    outline-offset: 4px;
    outline-width: 1px;
  }
`

const StyledCartButton = styled.button`
  border: 0;
  margin-left: auto;
  font-size: 1rem;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  background-color: #0024ad;

  &:hover,
  &:focus {
    outline-color: #0024ad;
    outline-style: solid;
    outline-offset: 4px;
    outline-width: 1px;
  }
`
