import React from 'react'
import { Helmet } from 'react-helmet'
import { SEO, config } from 'gatsby-theme-kuworking-core'
import { Header } from './layout/header'
import { Footer } from './layout/footer'
import { Page } from './layout/page'
import './globalcss.css'
import { getSchemaProps, Main, Container } from './structure'

const grid_maxwidth = '600px'

export const StructurePage = ({ type, blogPage }) => {
  const { main_maxwidth, main_background } = blogPage.page
  const maxWidth = main_maxwidth || grid_maxwidth
  const basePath = blogPage && blogPage.page.basePath

  const schemaProps = getSchemaProps(type)
  blogPage.image = blogPage.page.image || config.url + '/global/image.jpg'

  return (
    <Main main_background={main_background}>
      <Helmet defer={false}>
        <SEO blogPage={blogPage} {...schemaProps} />
      </Helmet>

      <Container maxWidth={maxWidth}>
        <Header basePath={basePath} />

        <Page blogPage={blogPage} />

        <Footer basePath={basePath} />
      </Container>
    </Main>
  )
}
