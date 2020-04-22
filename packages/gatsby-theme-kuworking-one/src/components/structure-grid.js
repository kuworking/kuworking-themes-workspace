import React from 'react'
import { Helmet } from 'react-helmet'
import { SEO, config } from 'gatsby-theme-kuworking-core'
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
      <Helmet defer={false}>
        <SEO blogGrid={blogGrid} {...schemaProps} />
      </Helmet>

      <Container maxWidth={maxWidth}>
        <Header basePath={basePath} />

        <Grid blogGrid={blogGrid} />

        <Footer basePath={basePath} />
      </Container>
    </Main>
  )
}
