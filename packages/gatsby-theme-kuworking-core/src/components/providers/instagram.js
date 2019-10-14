import React from 'react'
import styled from '@emotion/styled'
import { Container } from './container'

export const Instagram = ({ src, text }) => (
  <Container>
    <a aria-label="Instagram" href={src + '?utm_source=ig_web_copy_link'}>
      <Img alt="Instagram" src={src + 'media/?size=l'} />
      <div>{text} [ Instagram ]</div>
    </a>
  </Container>
)

const Img = styled.img`
  width: 100%;
`
