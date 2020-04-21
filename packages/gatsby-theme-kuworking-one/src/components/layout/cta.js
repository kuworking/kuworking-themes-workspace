/** @jsx jsx */
import React, { useRef, useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { jsx } from 'theme-ui'
import { TextShadow } from 'gatsby-theme-kuworking-core'

export const Cta = () => {
  const refForWidth = useRef()
  const [shadow, setShadow] = useState({ textShadow: '1px 1px 1px #000, 3px 3px 1px #ff00e2, 5px 5px 1px #ededed' })
  useEffect(() => {
    if (refForWidth.current.clientWidth > 800)
      setShadow({ textShadow: '1px 1px 1px #000, 5px 5px 5px #ff00e2, 10px 10px 1px #ededed' })
  }, [])

  return (
    <Container sx={{ variant: 'copy' }} ref={refForWidth}>
      <h1>
        <TextShadow
          view={false}
          delay="50"
          difference="300"
          animationTo={shadow}
          config={{ mass: 1, tension: 8000, friction: 20 }}
        >
          KUWORKING
        </TextShadow>
      </h1>
    </Container>
  )
}

const q = px => `@media (min-width: ${px}px)`

const Container = styled.div`
  background: ${props => props.theme.colors.cta__div__background};
  border: 1px solid ${props => props.theme.colors.cta__div__border};
  border-radius: 2px;
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
