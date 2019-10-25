import React from 'react'
import styled from '@emotion/styled'
import { Styled, useThemeUI } from 'theme-ui'

export const CtaMain = () => {
  const { theme } = useThemeUI()

  return (
    <Container bg={theme.colors.panelOne}>
      <Styled.h1>CTA POSTS</Styled.h1>
    </Container>
  )
}

export const CtaPosts = () => (
  <Container>
    <Styled.h1>CTA MAIN</Styled.h1>
  </Container>
)

const Container = styled.div`
  background: ${props => props.bg};
  border-radius: 8px;
  border: 1px solid 'primary';
`
