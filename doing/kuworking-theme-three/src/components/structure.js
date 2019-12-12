import React from 'react'
import styled from '@emotion/styled'

import { SEO } from 'gatsby-theme-kuworking-core'
import { Header, Footer, Post, Grid, Page, Tool } from 'gatsby-theme-kuworking-blog'
import './globalcss.css'

const grid_maxwidth = '1000px'
const post_maxwidth = '800px'

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

      <Header maxWidth={maxWidth} basePath={basePath} />

      <Container maxWidth={maxWidth}>
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
  margin-top: 20px;
  max-width: ${props => props.maxWidth};
  width: 100%;
  padding: 0px 10px;

  min-height: 100vh;
  display: flex;
  flex-direction: column;
`
