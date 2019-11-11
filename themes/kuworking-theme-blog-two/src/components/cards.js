import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { Styled, useThemeUI } from 'theme-ui'

export const Card = ({ post, i, related }) => {
  const { theme } = useThemeUI()

  return (
    <Styled.a
      as={Container}
      aria-label="Post"
      to={'/' + post.name}
      theme={theme}
      related={related ? 1 : 0} /* to prevent a warning from styled-components */
    >
      <Image src={related ? post.fixed_image.src : post.image.src} />
      <Styled.h4 as="h1" i={i} css={{ marginBottom: 'unset' }}>
        <Title>
          {post.title.split('#').map((el, i) => (i % 2 === 0 ? <span key={i}>{el}</span> : <em key={i}>{el}</em>))}
        </Title>
      </Styled.h4>
      <Abstract>
        <div>
          {post.abstract.split('#').map((el, i) => (i % 2 === 0 ? <span key={i}>{el}</span> : <em key={i}>{el}</em>))}
        </div>
      </Abstract>
    </Styled.a>
  )
}

const q = px => `@media (min-width: ${px}px) {`

const Title = styled.div`
  margin-top: 2px;
  width: 90%;
`
const Abstract = styled.div`
  width: 90%;
  & > div {
    display: inline;
    -webkit-box-decoration-break: clone; /* to get the padding */
    box-decoration-break: clone;
  }
`

const Container = styled(Link)`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  grid-template-rows: ${props => (props.related ? '200px' : '300px')} minmax(20px, 1fr);
  ${q(500)} {
    grid-template-rows: ${props => (props.related ? '200px' : '500px')} minmax(20px, 1fr);
  }
  align-content: flex-start;

  border: 1px solid ${props => props.theme.colors.cards__border};
  padding: 3px 3px 10px 3px;
  background: ${props => props.theme.colors.cards__background};
  border-radius: 3px;
  transition: border 0.5s ease, background 0.5s ease;

  & ${Abstract} > div > span,
  & ${Title} > span {
    padding: 0px 2px;
  }

  & ${Abstract} > div > em,
  & ${Title} > em {
    background: ${props => props.theme.colors.cards__em__background};
    color: ${props => props.theme.colors.cards__em__color};
    font-style: normal;
    padding: 0px 2px;
    font-weight: 700;
    line-height: ${props => props.theme.lineHeights.body};
  }

  @supports not (display: grid) {
    max-width: 240px;
    width: 100%;
    margin: 5px 2px;
  }
`

const Image = styled.div`
  background-image: ${props => `url(${props.src})`};
  background-size: cover;
  background-position: center;
  display: grid;
  align-items: end;
  border-radius: 2px;
`
