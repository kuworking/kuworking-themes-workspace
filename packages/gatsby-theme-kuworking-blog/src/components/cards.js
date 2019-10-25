import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { Styled, useThemeUI } from 'theme-ui'

export const Card = ({ post, i }) => {
  const { theme } = useThemeUI()
console.log(post)
  return (
    <Styled.a
      as={Container}
      aria-label="Post"
      to={'/' + post.name}
      bs={theme.colors.boxShadow}
      bsh={theme.colors.boxShadowHover}
    >
      <Image>
        <img alt={post.name} src={post.post_image} />
        {/*
        post.abstract.split('#').map((el, i) => (i % 2 === 0 ? <span key={i}>{el}</span> : <Styled.mark key={i}>{el}</Styled.mark>))
        */}
      </Image>
      <Styled.h1 i={i}>
        {post.title
          .split('#')
          .map((el, i) => (i % 2 === 0 ? <span key={i}>{el}</span> : <Styled.mark key={i}>{el}</Styled.mark>))}
      </Styled.h1>
    </Styled.a>
  )
}

const device = {
  laptop: `(max-width: 1100px)`,
  mobile: `(max-width: 600px)`,
  mobileS: `(max-width: 400px)`,
}

const laptop = '@media (min-width: 1100px)'
const mobile = '@media (min-width: 600px)'

const Container = styled(Link)`
  display: grid !important;
  grid-template-columns: minmax(0, 1fr);
  grid-template-rows: 100px minmax(70px, 1fr);
  ${mobile} {
    grid-template-rows: 140px minmax(70px, 1fr);
  }
  align-content: flex-start !important;

  transition: max-height 0.2s ease 0s, width 0.2s ease 0s, background-color 0.2s ease 0s, box-shadow 0.6s ease;

  & span {
    color: inherit;
  }
  border-radius: 8px;
  box-shadow: 2px 2px 0px 4px ${props => props.bs};

  &:hover {
    box-shadow: 2px 2px 0px 6px ${props => props.bsh};
  }

  @supports not (display: grid) {
    max-width: 240px;
    width: 100%;
    margin: 5px 2px;
  }
`

const Image = styled.div`
  width: 100%;
  background-color: #2d2d2d;
  overflow: hidden;
  transition: color 0.2s ease 0s;

  display: grid;
  align-items: center;
  border-radius: 8px 8px 0px 0px;

  & > img {
    width: 102% !important; /* to eliminate a border that shouldn't be there */
    max-width: 500px;
    overflow: hidden;
    border: unset !important;
    padding: unset !important;
  }

  @supports not (display: grid) {
    height: 140px;
  }
`
