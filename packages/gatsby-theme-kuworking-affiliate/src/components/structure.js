import React, { useState } from 'react'
import styled from '@emotion/styled'

import { SEO, Header, Footer, Grid } from 'gatsby-theme-kuworking-affiliate'
import './globalcss.css'

const grid_maxwidth = '1200px'

const useShape = () => {
  const [shape, setShape] = useState('a')
  const modes = ['a', 'b', 'c']

  const toggleShape = e => {
    const index = modes.indexOf(shape)
    const next = modes[(index + 1) % modes.length]
    setShape(next)
  }

  return [shape, <ShapeButton onClick={toggleShape}>change</ShapeButton>]
}

const ShapeButton = styled.div`
  cursor: pointer;
`

export const Structure = ({ blogGrid }) => {
  const basePath = blogGrid.basePath
  const [shape, ShapeButton] = useShape()

  return (
    <Main grid_maxwidth={grid_maxwidth}>
      <SEO blogGrid={blogGrid} />

      <Container grid_maxwidth={grid_maxwidth}>
        <Header basePath={basePath} ShapeButton={ShapeButton} />

        <Grid blogGrid={blogGrid} shape={shape} />

        <Footer basePath={basePath} />
      </Container>
    </Main>
  )
}

const Main = styled.main`
  background: ${props => props.main_background || 'unset'};
  display: flex;
  min-height: 100vh; /* needed for the sticky footer */
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  transition: font-size 0.5s ease;
`

const Container = styled.div`
  max-width: ${props => props.grid_maxwidth};
  width: 100%;
  padding: 0px 10px;

  min-height: 100vh;
  display: flex;
  flex-direction: column;
`
