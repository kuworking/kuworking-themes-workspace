import React from 'react'
import styled from '@emotion/styled'

import 'typeface-text-me-one'

import { useReplace100vh, GlobalStyles } from '@kuworking/methods'
import { BlockA } from './blocka'
import { BlockB } from './blockb'
import { BlockC } from './blockc'

export const Structure = ({ attributes }) => {
  useReplace100vh()

  return (
    <>
      <GlobalStyles />
      <Main>
        <BlockA attributes={attributes} />
        <BlockB attributes={attributes} />
        <BlockC attributes={attributes} />
      </Main>
    </>
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
