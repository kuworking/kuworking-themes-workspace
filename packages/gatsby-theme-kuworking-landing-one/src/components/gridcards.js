import React from 'react'
import styled from '@emotion/styled'
import { useColorMode } from 'theme-ui'
import { Img } from 'gatsby-theme-kuworking-landing-one'

export const GridCard = ({ children, style }) => {
  const [colorMode] = useColorMode()

  return (
    <ContainerCard day={colorMode === 'light'}>
      <Abstract style={style}>{children}</Abstract>
    </ContainerCard>
  )
}

// const q = px => `@media (min-width: ${px}px)`

const Title = styled.h4``
const Abstract = styled.p``
const ContainerCard = styled.div`
  ${Title} {
    z-index: 10;

    width: 90%;
    padding: 2px;
    margin: 0;
    line-height: 1.3;

    & > div {
      background: ${props => props.theme.colors.cards__title__background};
      color: ${props => props.theme.colors.cards__title__color};
      padding: 0 3px;
      display: inline;
      box-decoration-break: clone;
      transition: all 0.5s ease-in;
    }
  }

  ${Abstract} {
    margin-top: 2px;
    width: 90%;
    margin: 0;
    padding: 0;
    display: flex;
  }

  border: 1px solid ${props => props.theme.colors.cards__border};
  background: ${props => props.theme.colors.cards__background};
  border-radius: 3px;
  padding: 15px;

  overflow: hidden;

  transition: all 0.2s ease-in;

  text-decoration: none;
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  align-content: flex-start;

  & > img {
    width: 100%;
    transition: filter 0.3s ease;
  }

  &:hover {
    box-shadow: 2px 2px 0px #dadada;
    filter: brightness(0.9);
  }
`
