import React from 'react'
import styled from 'styled-components'

export const Youtube = ({ src, text }) => (
  <Container>
    <Frame title="Youtube" src={src} />
    <div>{text}</div>
  </Container>
)
const Container = styled(Wrapper)``
const Frame = styled.iframe`
  width: 100%;
  height: 400px;
  border: none;
`
