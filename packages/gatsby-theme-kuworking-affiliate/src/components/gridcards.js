import React, { forwardRef } from 'react'
import styled from '@emotion/styled'
import { useColorMode } from 'theme-ui'
import { Img } from 'gatsby-theme-kuworking-affiliate'

export const GridCard = forwardRef(({ item: { name, link, image, price }, category, adjustMasonry }, ref) => {
  const [colorMode] = useColorMode()

  return (
    <ContainerCard aria-label="Post" href={link} ref={ref} day={colorMode === 'light'}>
      <div data-desc="this div is needed to calculate the width">
        <Img image={[image]} adjustMasonry={adjustMasonry} />
        <Title>{name}</Title>
        <Abstract>{price}</Abstract>
      </div>
    </ContainerCard>
  )
})

// const q = px => `@media (min-width: ${px}px)`

const Title = styled.h4``
const Abstract = styled.p``
const ContainerCard = styled.a`
  & > div {
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

    @supports not (display: grid) {
      max-width: 240px;
      width: 100%;
      margin: 5px 2px;
    }

    & > img {
      width: 100%;
      transition: filter 0.3s ease;
    }

    &:hover {
      box-shadow: 2px 2px 0px #dadada;
      filter: brightness(0.9);
    }
  }
`
