import React from 'react'
import styled from '@emotion/styled'
import { Container } from './container'

export const Youtube = ({ src, text }) => (
  <Container>
    <Frame title="Youtube" src={src} />
    <div>{text}</div>
  </Container>
)
const Frame = styled.iframe`
  width: 100%;
  height: 400px;
  border: none;
`
