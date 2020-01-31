import React, { useRef, useLayoutEffect, useState } from 'react'
import styled from '@emotion/styled'
import { Styled } from 'theme-ui'

import { CtaMain, Card, useMasonry } from 'gatsby-theme-kuworking-affiliate'

export const Grid = ({ blogGrid: { core, posts }, shape }) => {
  const row_unit = 20
  const grid_gap = 15
  const [gridAutoRows, assignRef, adjustMasonry] = useMasonry(row_unit, grid_gap)

  const data = {}
  core.forEach(({ node: { content } }) => {
    const ctn = JSON.parse(content)
    const { category, description } = ctn[0]
    data[category] = ctn.splice(1)
  })

  return (
    <>
      <CtaMain />

      <Title>TECH</Title>
      <Container row_unit={gridAutoRows} grid_gap={grid_gap}>
        {data.tech.map((item, i) => (
          <Card
            key={'tech' + i}
            item={item}
            category="tech"
            adjustMasonry={adjustMasonry}
            ref={assignRef}
            shape={shape}
          />
        ))}
      </Container>

      <Title>BAGS</Title>
      <Container row_unit={gridAutoRows} grid_gap={grid_gap}>
        {data.bags.map((item, i) => (
          <Card
            key={'bags' + i}
            item={item}
            category="bags"
            adjustMasonry={adjustMasonry}
            ref={assignRef}
            shape={shape}
          />
        ))}
      </Container>
    </>
  )
}

const q = px => `@media (min-width: ${px}px)`

const Container = styled.div`
  width: 100%;
  transition: all 0.5s ease;

  display: grid;
  grid-column-gap: 10px;
  grid-row-gap: ${props => props.grid_gap}px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: ${props => props.row_unit}px;

  ${q(1100)} {
  }
`

const Title = styled(Styled.h1)``
