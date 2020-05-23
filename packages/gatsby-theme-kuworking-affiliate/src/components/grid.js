import React from 'react'
import styled from '@emotion/styled'
import { useGridMasonry } from 'gatsby-theme-kuworking-methods'
import { CtaMain } from './cta'
import { GridCard } from './gridcards'

export const Grid = ({ blogGrid: { core, posts } }) => {
  const row_unit = 20
  const grid_gap = 10
  const [gridAutoRows, assignRef, updateGrid] = useGridMasonry(row_unit, grid_gap)

  const data = {}
  core.forEach(({ node: { content } }) => {
    const ctn = JSON.parse(content)
    // eslint-disable-next-line
    const { category, description } = ctn[0]
    data[category] = ctn.splice(1)
  })
  return (
    <>
      <CtaMain />

      <Title>BAGS</Title>
      <Container row_unit={gridAutoRows} grid_gap={grid_gap}>
        {data.bags.map((item, i) => (
          <GridCard key={'bags' + i} item={item} category="bags" adjustMasonry={updateGrid} ref={assignRef} />
        ))}
      </Container>

      <Title>TECH</Title>
      <Container row_unit={gridAutoRows} grid_gap={grid_gap}>
        {data.tech.map((item, i) => (
          <GridCard key={'tech' + i} item={item} category="tech" adjustMasonry={updateGrid} ref={assignRef} />
        ))}
      </Container>
    </>
  )
}

const Container = styled.div`
  width: 100%;
  transition: all 0.5s ease;

  display: grid;
  grid-gap: ${props => props.grid_gap}px;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-auto-rows: ${props => props.row_unit}px;
`

const Title = styled.h1`
  margin-top: 100px;
`
