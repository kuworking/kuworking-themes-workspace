import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { Styled, useThemeUI } from 'theme-ui'

export const Card = ({ post, i }) => {
  const { theme } = useThemeUI()

  return (
    <Styled.a
      as={Container}
      aria-label="Post"
      to={'/' + post.name}
      bgem={theme.colors.cards__em__background}
      em={theme.colors.cards__em__color}
      lh={theme.lineHeights.body}
    >
      <Image src={post.image.src}>
        <Abstract
          bg={theme.colors.global__text_with_background__background}
          c={theme.colors.global__text_with_background__color}
        >
          <div>
            {post.abstract.split('#').map((el, i) => (i % 2 === 0 ? <span key={i}>{el}</span> : <em key={i}>{el}</em>))}
          </div>
        </Abstract>
      </Image>
      <Styled.h4 as="h1" i={i} css={{ marginBottom: 'unset' }}>
        <Title>
          {post.title.split('#').map((el, i) => (i % 2 === 0 ? <span key={i}>{el}</span> : <em key={i}>{el}</em>))}
        </Title>
      </Styled.h4>
    </Styled.a>
  )
}

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
    background: ${props => props.bg};
    color: ${props => props.c};
    padding: 0 3px;
    display: inline;
    -webkit-box-decoration-break: clone; /* to get the padding */
    box-decoration-break: clone;
  }
`

const Container = styled(Link)`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  grid-template-rows: 200px minmax(20px, 1fr);
  align-content: flex-start;

  &:hover {
    ${Abstract} {
      opacity: 0.8;
    }
  }

  & ${Abstract} > div > span,
  & ${Title} > span {
    padding: 0px 2px;
  }

  & ${Abstract} > div > em,
  & ${Title} > em {
    background: ${props => props.bgem};
    color: ${props => props.em};
    font-style: normal;
    padding: 0px 2px;
    font-weight: 700;
    line-height: ${props => props.lh};
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
