import React from 'react'
import { SEO } from 'gatsby-theme-kuworking-methods'
import { config } from '../utils/config'
import { Header } from './layout/header'
import { Footer } from './layout/footer'
import { Grid } from './layout/grid'
import './globalcss.css'
import { getSchemaProps, Main, Container } from './structure'

const grid_maxwidth = '1000px'

export const StructureGrid = ({ type, blogGrid }) => {
  const maxWidth = grid_maxwidth
  const basePath = blogGrid.pagination.basePath

  const schemaProps = getSchemaProps(type)
  blogGrid.image = config.url + '/global/image.jpg'

  return (
    <Main>
      <SEO blogGrid={blogGrid} {...schemaProps} />

      <Container maxWidth={maxWidth}>
        <Header basePath={basePath} />

        <Grid blogGrid={blogGrid} />

        <Footer basePath={basePath} />
      </Container>
    </Main>
  )
}
