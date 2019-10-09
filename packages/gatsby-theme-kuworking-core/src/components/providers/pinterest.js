import React from 'react'
import styled from 'styled-components'

export const Pinterest = ({ className, src, text }) => (
  <Container>
    <a
      aria-label="Pinterest"
      data-pin-do="embedPin"
      data-pin-width="large"
      data-pin-build="doBuild"
      href={src}
      className={className}
    >
      <div>{text}</div>
    </a>
  </Container>
)
const Container = styled(Wrapper)`
  & > span {
    box-shadow: unset !important;
  }
`
