import React from 'react'
import styled from '@emotion/styled'
import {
  SEO,
  Header,
  BlockA,
  BlockB,
  BlockC,
  BlockD,
  BlockE,
  Footer,
  config,
  seoText,
  wait,
  q,
  qq,
  useReplace100vh,
} from 'gatsby-theme-kuworking-landing-one'

import './globalcss.css'

export const Structure = ({ blogGrid }) => {
  useReplace100vh()

  const basePath = blogGrid.basePath

  return (
    <Main>
      <SEO blogGrid={blogGrid} config={config} seotext={seoText} />

      <Header basePath={basePath} />

      <BlockA />
      <BlockB />
      <BlockC />
      <BlockD />
      <BlockE />

      <Footer basePath={basePath} />
    </Main>
  )
}

const Main = styled.main`
  background: unset;
  display: flex;
  max-width: 100%;
  width: 100%;
  min-height: 100vh; /* needed for the sticky footer */
  min-height: calc(var(--vh, 1vh) * 100);
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  transition: all 0.2s ease;

  & > div,
  & > header {
    transition: all 0.5s cubic-bezier(0, 1.06, 0.77, 0.99);
  }
`
