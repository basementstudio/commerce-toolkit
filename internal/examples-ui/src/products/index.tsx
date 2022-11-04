import styled from 'styled-components'
import { FC } from 'react'
import { Container } from '../container'

export type Product = {
  id: number | string
  name: string
  price: number
  image: {
    src: string
    alt: string
  }
}
type Products = {
  productList: Product[]
  onAddToCart: (product: Product) => void
}

export const Products: FC<Products> = ({ productList, onAddToCart }) => {
  return (
    <Container>
      <div style={{ fontFamily: 'Inter, sans-serif', paddingBottom: 56 }}>
        <StyledProductsTitle>All Products</StyledProductsTitle>

        <StyledGrid>
          {productList.map((product) => {
            return (
              <div key={product.id}>
                <div
                  style={{
                    marginBottom: 16,
                    borderRadius: 8,
                    overflow: 'hidden'
                  }}
                >
                  <div
                    style={{
                      position: 'relative',
                      borderRadius: 8,
                      overflow: 'hidden',
                      width: '100%',
                      marginBottom: 24,
                      aspectRatio: '1/1'
                    }}
                  >
                    <img
                      alt={product.image.alt}
                      src={product.image.src}
                      style={{
                        objectFit: 'cover',
                        objectPosition: 'center center',
                        width: '100%',
                        height: '100%',
                        userSelect: 'none'
                      }}
                    />
                  </div>
                  <StyledProductTitle>{product.name}</StyledProductTitle>
                  <StyledProductPrice>${product.price}</StyledProductPrice>
                </div>
                <StyledProductCartButton onClick={() => onAddToCart(product)}>
                  Add to Cart
                </StyledProductCartButton>
              </div>
            )
          })}
        </StyledGrid>
      </div>
    </Container>
  )
}

const StyledProductsTitle = styled.h4`
  font-size: 1.75rem;
  font-weight: 500;
  margin-top: 0;
`

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(auto, 1fr));
  gap: 32px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(auto, 1fr));
  }
`

const StyledProductTitle = styled.p`
  font-size: 1.65rem;
  margin-bottom: 8px;
  font-family: Basement Grotesque, sans-serif;
`

const StyledProductPrice = styled.p`
  font-size: 1.3rem;
  margin-top: 0;
`

const StyledProductCartButton = styled.button`
  border: 0;
  width: 100%;
  font-size: 1.1rem;
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
