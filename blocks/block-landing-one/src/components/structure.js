import React from 'react'
import styled from '@emotion/styled'

import { useReplace100vh } from 'gatsby-theme-kuworking-methods'
import { BlockA } from './blocka'
import { BlockB } from './blockb'
import { BlockC } from './blockc'
import { BlockD } from './blockd'
import { BlockE } from './blocke'

import './globalcss.css'

export const Structure = ({ folder = '/' }) => {
  useReplace100vh()

  return (
    <Main>
      <BlockA folder={folder} />
      <BlockB folder={folder} />
      <BlockC folder={folder} />
      <BlockD folder={folder} />
      <BlockE folder={folder} />
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

  & > header {
    transition: all 0.5s cubic-bezier(0, 1.06, 0.77, 0.99);
  }
`
