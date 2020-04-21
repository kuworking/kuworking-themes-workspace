import React from 'react'
import styled from '@emotion/styled'

export const Page = ({ blogPage: { children } }) => {
  return <Container>{children}</Container>
}

const Container = styled.article`
  display: block;
  padding-bottom: 30px;
`
