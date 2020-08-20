import React from 'react'
import styled from '@emotion/styled'
import { Global, css } from '@emotion/core'

import 'typeface-text-me-one'

import { useReplace100vh, GlobalStyles } from '@kuworking/methods'
import { BlockA } from './blocka'
import { BlockB } from './blockb'
import { BlockC } from './blockc'

export const Structure = ({ attributes }) => {
  useReplace100vh()

  const { fonts = '/', wordpress = null } = attributes

  return (
    <>
      {wordpress && (
        <Global
          styles={css`
            ${load_fonts(fonts)}
          `}
        />
      )}

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

const load_fonts = fonts => `
  @font-face {
    font-family: 'Text Me One';
    font-style: normal;
    font-display: swap;
    font-weight: 400;
    src: local('Text Me One Regular '), local('Text Me One-Regular'),
      url('.${fonts}/files/text-me-one-latin-400.woff2') format('woff2'),
      url('.${fonts}/files/text-me-one-latin-400.woff') format('woff');
  }
`
