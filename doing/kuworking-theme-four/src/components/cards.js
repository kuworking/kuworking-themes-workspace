import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { Styled } from 'theme-ui'

export const Card = ({ post, i, related }) => {
  return (
    <Styled.a
      as={Container}
      aria-label="Post"
      to={'/' + post.name}
      related={related ? 1 : 0} /* to prevent a warning from styled-components */
    >
      <Image src={related ? post.fixed_image.src : post.image.src} />
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
  width: 100%;

  font-size: 1.2em;
  text-transform: uppercase;
  letter-spacing: -0.6px;
  transition: font-size 0.2s ease 0s, color 0.2s ease 0s, background-color 0.2s ease 0s;
  padding: 0px 4px;
`

const Container = styled(Link)`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  grid-template-rows: 200px minmax(20px, 1fr);
  align-content: flex-start;

  border: 10px solid ${props => props.theme.colors.cards__border};
  background: ${props => props.theme.colors.cards__background};
  border-radius: 8px;
  /*background-color: #5b4f4fc9;*/
  box-shadow: #ffffff00 0px 0px 0px 0px;
  transition: max-height 0.2s ease 0s, width 0.2s ease 0s, background-color 0.2s ease 0s, box-shadow 0.2s ease 0s;

  &:hover {
    background-color: #f4f4f4;
    box-shadow: #71717152 0px 1px 2px 0px;
    border: 10px solid #fd2d2d8a;
  }

  & ${Title} > span {
    padding: 0px 2px;
  }

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
