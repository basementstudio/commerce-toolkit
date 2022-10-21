import styled from 'styled-components'
import { Container } from "../container"
import { Cart } from "../cart"
import { FC } from "react"
import type { Product } from '../products'

type Header = {
   cart: Product[]
   removeFromCart: Cart['removeFromCart']
   restItem: Cart['restItem']
   sumItem: Cart['sumItem']
   checkout: Cart['checkout']
}

export const Header: FC<Header> = ({
   cart = [],
   removeFromCart,
   restItem,
   sumItem,
   checkout
}) => {
   return (
      <header style={{ fontFamily: 'Inter, sans-serif' }}>
         <Container>
            <StyledNav>
               <StyledGitHubLink
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/basementstudio/commerce-toolkit"
               >
                  GitHub
               </StyledGitHubLink>

               <p style={{ fontFamily: 'Basement Grotesque, sans-serif', fontSize: '1.2rem' }}>basement</p>

               <Cart
                  products={cart}
                  removeFromCart={removeFromCart}
                  restItem={restItem}
                  sumItem={sumItem}
                  checkout={checkout}
               >
                  <StyledCartButton>Cart ({cart.length})</StyledCartButton>
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

const StyledGitHubLink = styled.a`
   font-size: 1.1rem;
   margin-right: auto;
   transition: color 0.1s linear;
   outline-color: #fff;
   border-radius: 4px;

   &:hover,
   &:focus {
      outline-color: #ff4d00;
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
   background-color: #ff4d00;

   &:hover,
   &:focus {
      outline-color: #ff4d00;
      outline-style: solid;
      outline-offset: 4px;
      outline-width: 1px;
   }
`
