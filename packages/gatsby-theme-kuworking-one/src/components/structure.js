import React from 'react'
import styled from '@emotion/styled'

import { SEO } from 'gatsby-theme-kuworking-core'
import { Header } from './header'
import { Footer } from './footer'
import { Grid } from './grid'
import { Post } from './post'
import { Page } from './page'
import { Tool } from './tool'
import './globalcss.css'

const grid_maxwidth = '800px'
const post_maxwidth = '600px'

export const Structure = ({ type, blogGrid, blogPost, blogPage }) => {
  const { main_maxwidth, main_background } = blogPage || ''
  const maxWidth = (blogPost && post_maxwidth) || main_maxwidth || grid_maxwidth
  const basePath =
    (blogGrid && blogGrid.pagination.basePath) ||
    (blogPost && blogPost.pre_path) ||
    (blogPage && blogPage.page.basePath)

  return (
    <Main main_background={main_background}>
      <SEO type={type} blogGrid={blogGrid} blogPost={blogPost} blogPage={blogPage} />

      <Container maxWidth={maxWidth}>
        <Header basePath={basePath} />

        {(type === 'grid' && <Grid blogGrid={blogGrid} />) ||
          (type === 'mdx' && <Post blogPost={blogPost} />) ||
          (type === 'page' && <Page blogPage={blogPage} />) ||
          (type === 'tool' && <Tool blogPage={blogPage} />)}

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
  max-width: ${props => props.maxWidth};
  width: 100%;
  padding: 0px 10px;

  min-height: 100vh;
  display: flex;
  flex-direction: column;
`
