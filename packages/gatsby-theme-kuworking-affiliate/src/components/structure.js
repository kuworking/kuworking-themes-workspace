import React from 'react'
import styled from '@emotion/styled'
import { SEO, Header, Footer, Grid, config, seoText } from 'gatsby-theme-kuworking-affiliate'
import './globalcss.css'

const grid_maxwidth = '1200px'

export const Structure = ({ blogGrid }) => {
  const basePath = blogGrid.basePath

  return (
    <Main grid_maxwidth={grid_maxwidth}>
      <SEO blogGrid={blogGrid} config={config} seotext={seoText} />

      <Container grid_maxwidth={grid_maxwidth}>
        <Header basePath={basePath} />

        <Grid blogGrid={blogGrid} />

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
