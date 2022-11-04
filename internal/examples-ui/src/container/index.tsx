import { FC, PropsWithChildren } from 'react'
import styled from 'styled-components'

export const Container: FC<PropsWithChildren> = ({ children }) => (
   <StyledContainer>
      {children}
   </StyledContainer>
)

const StyledContainer = styled.div`
   position: relative;
   width: 100%;
   margin: 0 auto;
   padding: 0 24px;
   
   @media screen and (min-width: 768px) {
      padding: 0 40px;
   }
   
   @media screen and (min-width: 1024px) {
      max-width: 996px;
   }
   
   @media screen and (min-width: 1440px) {
      max-width: 1024px;
   }
`
