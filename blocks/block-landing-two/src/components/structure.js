import React from 'react'
import styled from '@emotion/styled'

import 'typeface-text-me-one'

import { useReplace100vh } from '@kuworking/methods'
import { BlockA } from './blocka'
import { BlockB } from './blockb'
import { BlockC } from './blockc'

import './globalcss.css'

export const Structure = ({ folder = '/' }) => {
  useReplace100vh()

  return (
    <Main>
      <BlockA folder={folder} />
      <BlockB folder={folder} />
      <BlockC folder={folder} />
    </Main>
  )
}

const Main = styled.main`
  font-family: 'Text Me One', sans-serif;
  color: #fff;
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
