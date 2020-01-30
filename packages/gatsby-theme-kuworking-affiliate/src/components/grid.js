import React from 'react'
import styled from '@emotion/styled'

import { CtaMain, Card } from 'gatsby-theme-kuworking-affiliate'

export const Grid = ({ blogGrid: { core, posts } }) => {
  return (
    <>
      <CtaMain />

      <Container>
        {core.map(({ node: { name, content } }) => {
          const ctn = JSON.parse(content)
          const { category, description } = ctn[0]
          return ctn.splice(1).map((item, i) => <Card key={'item' + i} item={item} category={category} />)
        })}
      </Container>
    </>
  )
}

const q = px => `@media (min-width: ${px}px)`

const Container = styled.div`
  margin: 50px 0px;
  width: 100%;
  transition: padding 0.5s ease;

  display: flex;
  flex-flow: column wrap;
  &::before,
  &::after {
    content: '';
    flex-basis: 100%;
    width: 0;
    order: 2;
  }

  ${q(1100)} {
  }

  & > a {
    width: 32%;
    box-sizing: border-box;
  }
`
