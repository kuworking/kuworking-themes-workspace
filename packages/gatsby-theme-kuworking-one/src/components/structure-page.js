import React from 'react'
import { SEO, config } from 'gatsby-theme-kuworking-core'
import { Header } from './layout/header'
import { Footer } from './layout/footer'
import { Page } from './layout/page'
import './globalcss.css'
import { getSchemaProps, Main, Container } from './structure'

const grid_maxwidth = '1000px'

export const StructurePage = ({ type, blogPage }) => {
  const { main_maxwidth, main_background } = blogPage.page
  const maxWidth = main_maxwidth || grid_maxwidth
  const basePath = blogPage && blogPage.page.basePath

  const schemaProps = getSchemaProps(type)
  blogPage.image = blogPage.page.image || config.url + '/global/image.jpg'

  return (
    <Main main_background={main_background}>
      <SEO blogPage={blogPage} {...schemaProps} />

      <Container maxWidth={maxWidth}>
        <Header basePath={basePath} />

        <Page blogPage={blogPage} />

        <Footer basePath={basePath} />
      </Container>
    </Main>
  )
}
