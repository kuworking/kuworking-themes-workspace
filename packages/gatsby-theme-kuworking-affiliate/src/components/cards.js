import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { Styled } from 'theme-ui'
import { LazyBackgroundImg, LazyImg } from 'gatsby-theme-kuworking-affiliate'

export const Card = ({ item: { name, link, image, price }, category }) => {
  return (
    <ContainerCard as={Link} aria-label="Post" to={link}>
      <LazyImg data_image={{ standard: image }} />
      <Title>{name}</Title>
      <Abstract>{price}</Abstract>
    </ContainerCard>
  )
}

const q = px => `@media (min-width: ${px}px)`

const Title = styled(Styled.h4)``
const Abstract = styled(Styled.p)``
const Container = styled.div`
  transition: all 0.2s ease-in;

  text-decoration: none;
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  align-content: flex-start;

  border: 1px solid ${props => props.theme.colors.cards__border};
  background: ${props => props.theme.colors.cards__background};
  padding: 3px 3px 10px 3px;
  border-radius: 3px;

  @supports not (display: grid) {
    max-width: 240px;
    width: 100%;
    margin: 5px 2px;
  }
`

const ContainerCard = styled(Container)`
  ${props =>
    props.related
      ? 'grid-template-rows: 0px 200px minmax(50px, 1fr);'
      : 'grid-template-rows: 0px 300px minmax(50px, 1fr);'}

  ${q(600)} {
    ${props =>
      props.related
        ? 'grid-template-rows: 0px 200px minmax(50px, 1fr);'
        : 'grid-template-rows: 0px 300px minmax(50px, 1fr);'}
  }

  & > img {
    width: 100%;
    transition: filter 0.3s ease;
  }

  & > div:nth-of-type(1) {
    z-index: 1;

    @supports not (display: grid) {
      position: absolute;
    }
  }

  ${Title} {
    z-index: 10;

    width: 90%;
    padding: 2px;
    line-height: 1.3;

    & > div {
      background: ${props => props.theme.colors.cards__title__background};
      color: ${props => props.theme.colors.cards__title__color};
      padding: 0 3px;
      display: inline;
      box-decoration-break: clone;
      transition: all 0.5s ease-in;
      & > em {
        background: ${props => props.theme.colors.cards__title_em__background};
        color: ${props => props.theme.colors.cards__title__color};
        padding: 0px 4px;
        text-transform: uppercase;
      }
    }
  }

  ${Abstract} {
    margin-top: 2px;
    width: 90%;

    & > em {
      background: ${props => props.theme.colors.cards__abstract_em__background} !important;
    }
  }

  &:hover {
    box-shadow: 2px 2px 0px #dadada;
    & > img {
      filter: brightness(0.9);
    }
  }

    & > section:nth-of-type(2) > div:first-of-type {
      color: #ffffffe8 !important;
      background-color: #494949 !important;
    }
  }
`
