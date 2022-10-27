import { FC } from "react"
import styled, { createGlobalStyle } from "styled-components"
import { Container } from "../container"

export const Hero: FC<{ title: string, subtitle: string }> = ({ title, subtitle }) => {
  return (
   <Container>
      <StyledHero>
        <StyledHeroTitle>{title}</StyledHeroTitle>
        <StyledCode>{subtitle}</StyledCode>
      </StyledHero>
      <FontStyles />
   </Container>
  )
}

const StyledHero = styled.div`
  padding: 56px 0;

  @media screen and (min-width: 768px) {
    padding: 64px 0;
  }

  @media screen and (min-width: 1280px) {
    padding: 80px 0;
  }
`

const StyledHeroTitle = styled.h1`
  font-size: 2rem;
  font-family: Basement Grotesque, sans-serif;
  margin: 0;

  @media screen and (min-width: 768px) {
    font-size: 2.7rem;
  }
`

const StyledCode = styled.code`
  font-size: 1.1rem;
  display: inline-block;
  margin-top: .5rem;
  background-color: rgb(52, 52, 52);
  padding: 4px 6px;
  border-radius: 4px;
`

const FontStyles = createGlobalStyle`
  @font-face {
      font-family: 'Basement Grotesque';
      src: url(../fonts/BasementGrotesque-Black_v1.202.woff2) format('woff2'),
            url(../fonts/BasementGrotesque-Black_v1.202.woff}) format('woff');
  };
  @font-face {
      font-family: 'Inter';
      src: url(../fonts/Inter-Medium.woff2) format('woff2'),
            url(../fonts/Inter-Medium.woff}) format('woff');
  }
`;