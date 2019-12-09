import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { Styled, useThemeUI } from 'theme-ui'
import { LazyBackgroundImg } from 'gatsby-theme-kuworking-core'

const backgroundImage = `
background-size: cover;
background-position: center;
display: grid;
align-items: end;
border-radius: 2px;
transition: filter 0.3s ease;
&:hover {
  filter: brightness(0.9);
}
`

export const Card = ({ post, i, related }) => {
  const { theme } = useThemeUI()
  if (!post) return

  return (
    <ContainerCard as={Link} aria-label="Post" to={'/' + post.name} theme={theme} related={related ? 1 : 0}>
      <LazyBackgroundImg data_image={post.full_image} component={backgroundImage} />
      <Abstract theme={theme}>
        <div>
          {post.abstract.split('#').map((el, i) => (i % 2 === 0 ? <span key={i}>{el}</span> : <em key={i}>{el}</em>))}
        </div>
      </Abstract>
      <Styled.h4 as="h1" i={i} css={{ marginBottom: 'unset' }}>
        <Title>
          {post.title.split('#').map((el, i) => (i % 2 === 0 ? <span key={i}>{el}</span> : <em key={i}>{el}</em>))}
        </Title>
      </Styled.h4>
    </ContainerCard>
  )
}

const q = px => `@media (min-width: ${px}px)`

const Title = styled.div`
  margin-top: 2px;
  width: 90%;
`
const Abstract = styled.div`
  opacity: 0;
  transition: opacity 0.3s ease 0s;
  width: 90%;
  padding: 2px;
  & > div {
    background: ${props => props.theme.colors.global__text_with_background__background};
    color: ${props => props.theme.colors.global__text_with_background__color};
    padding: 0 3px;
    display: inline;
    -webkit-box-decoration-break: clone; /* to get the padding */
    box-decoration-break: clone;
  }
`

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
      ? 'grid-template-rows: 0px 100px minmax(60px, 1fr);'
      : 'grid-template-rows: 0px 100px minmax(60px, 1fr);'}

  ${q(600)} {
    ${props =>
      props.related
        ? 'grid-template-rows: 0px 140px minmax(100px, 1fr);'
        : 'grid-template-rows: 0px 140px minmax(100px, 1fr);'}
  }

  & > div:nth-of-type(1) {
    grid-row: 1 / span 2;
    grid-column: 1 / 2;
    z-index: 10;
    & > svg {
      width: 50px;
      height: 50px;
      padding: 8px;
      color: #00000054;
    }

    @supports not (display: grid) {
      position: absolute;
    }
  }

  & > div:nth-of-type(2) {
    grid-row: 1 / span 2;
    grid-column: 1 / 2;
  }

  &:hover {
    box-shadow: 2px 2px 0px #dadada;
    & > div:nth-of-type(2) {
      filter: brightness(0.7);
    }

    & > section:nth-of-type(2) > div:first-of-type {
      color: #ffffffe8 !important;
      background-color: #494949 !important;
    }
  }
`
