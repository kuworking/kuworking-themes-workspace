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

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-column-gap: 1vw;
  grid-row-gap: 3vw;
  justify-content: space-between;

  ${q(1100)} {
    grid-column-gap: 10px;
    grid-row-gap: 30px;
  }

  @supports not (display: grid) {
    display: flex;
    flex-wrap: wrap;
  }
`
