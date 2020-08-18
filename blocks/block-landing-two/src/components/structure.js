import React from 'react'
import styled from '@emotion/styled'

import { useReplace100vh } from 'gatsby-theme-kuworking-methods'
import { Header } from './header'
import { BlockA } from './blocka'
import { BlockB } from './blockb'
import { BlockC } from './blockc'
import { Footer } from './footer'

import './globalcss.css'

export const Structure = ({ basePath = '/', folder = '/' }) => {
  useReplace100vh()

  const basePath = blogGrid.basePath

  return (
    <Main>
      <Header basePath={basePath} folder={folder} />

      <BlockA folder={folder} />
      <BlockB folder={folder} />
      <BlockC folder={folder} />
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
`
