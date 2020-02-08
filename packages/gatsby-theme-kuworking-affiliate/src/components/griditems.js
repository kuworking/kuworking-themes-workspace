import React from 'react'
import styled from '@emotion/styled'
import { Styled } from 'theme-ui'

import { GridCard } from 'gatsby-theme-kuworking-affiliate'

export const GridItems = ({ pieces: { grid_gap, gridAutoRows, data, assignRef, updateGrid, shape } }) => (
  <>
    <Title>BAGS</Title>
    <Container row_unit={gridAutoRows} grid_gap={grid_gap}>
      {data.bags.map((item, i) => (
        <GridCard
          key={'bags' + i}
          item={item}
          category="bags"
          adjustMasonry={updateGrid}
          ref={assignRef}
          shape={shape}
        />
      ))}
    </Container>

    <Title>TECH</Title>
    <Container row_unit={gridAutoRows} grid_gap={grid_gap}>
      {data.tech.map((item, i) => (
        <GridCard
          key={'tech' + i}
          item={item}
          category="tech"
          adjustMasonry={updateGrid}
          ref={assignRef}
          shape={shape}
        />
      ))}
    </Container>
  </>
)

const Container = styled.div`
  width: 100%;
  transition: all 0.5s ease;

  display: grid;
  grid-column-gap: 10px;
  grid-row-gap: ${props => props.grid_gap}px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: ${props => props.row_unit}px;
`

const Title = styled(Styled.h1)``
