import React, { useState, useEffect } from 'react'
import Img from 'gatsby-image'
import styled from '@emotion/styled'
import { Styled } from 'theme-ui'

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

  return (
    <Styled.root>
      <Main main_background={main_background}>
        <SEO type={type} blogGrid={blogGrid} blogPost={blogPost} blogPage={blogPage} />

        <Container maxWidth={maxWidth}>
          <Header />

          {(type === 'grid' && <Grid blogGrid={blogGrid} />) ||
            (type === 'mdx' && <Post blogPost={blogPost} />) ||
            (type === 'page' && <Page blogPage={blogPage} />) ||
            (type === 'tool' && <Tool blogPage={blogPage} />)}

          <Footer />
        </Container>
      </Main>
    </Styled.root>
  )
}

const mw = [
  '@media (min-width: 400px)',
  '@media (min-width: 600px)',
  '@media (min-width: 800px)',
  '@media (min-width: 1100px)',
]

const Main = styled.main`
  background: ${props => props.main_background || 'unset'};
  display: flex;
  min-height: 100vh; /* needed for the sticky footer */
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  transition: font-size 0.5s ease, background-color 0.5s ease;
`

const Container = styled.div`
  max-width: ${props => props.maxWidth};
  width: 100%;
  padding: 0px 10px;

  min-height: 100vh;
  display: flex;
  flex-direction: column;
`
