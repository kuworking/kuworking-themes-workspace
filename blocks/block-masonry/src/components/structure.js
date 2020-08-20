import React from 'react'
import styled from '@emotion/styled'
import { Global, css } from '@emotion/core'

import 'typeface-text-me-one'

import { GlobalStyles } from '@kuworking/methods'
import { Grid } from './grid'

export const Structure = ({ attributes }) => {
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
        <Container>
          <Grid attributes={attributes} />
        </Container>
      </Main>
    </>
  )
}

const Main = styled.main`
  font-family: 'Text Me One', sans-serif;
  display: flex;
  min-height: 100vh; /* needed for the sticky footer */
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  transition: font-size 0.5s ease;
`

const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  padding: 0px 10px;

  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const load_fonts = fonts => `
  @font-face {
    font-family: 'Text Me One';
    font-style: normal;
    font-display: swap;
    font-weight: 400;
    src: local('Text Me One Regular '), local('Text Me One-Regular'),
      url('${fonts}/files/text-me-one-latin-400.woff2') format('woff2'),
      url('${fonts}/files/text-me-one-latin-400.woff') format('woff');
  }
`
