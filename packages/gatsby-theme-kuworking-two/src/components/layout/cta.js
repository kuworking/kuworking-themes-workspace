/** @jsx jsx */
import React, { useRef } from 'react'
import styled from '@emotion/styled'
import { jsx } from 'theme-ui'
import { TextZoom } from 'gatsby-theme-kuworking-methods'

export const Cta = () => {
  const refForWidth = useRef()

  return (
    <Container ref={refForWidth}>
      <h1 sx={{ fontSize: ['4rem', '5rem', '6rem'] }}>
        <TextZoom view={false} config={{ mass: 0.5, tension: 8000, friction: 20 }}>
          KUWORKING
        </TextZoom>
      </h1>
    </Container>
  )
}

const q = px => `@media (min-width: ${px}px)`

const Container = styled.div`
  background: ${props => props.theme.colors.cta__div__background};
  border: 1px solid ${props => props.theme.colors.cta__div__border};
  border-radius: 20px;
  font-size: 2em;

  padding: 10px;
  ${q(700)} {
    padding: 20px 40px 15px 15px;
  }

  & h1 {
    color: ${props => props.theme.colors.cta__title__color};
    transition: color 0.5s ease;
    text-transform: uppercase;
    display: inline-block;
  }
`
