import React from 'react'
import { Global, css } from '@emotion/core'

export const GlobalStyles = () => (
  <Global
    styles={css`
      html {
        background-size: cover;
        box-sizing: border-box;
        height: 100%;
        min-height: 100%;
        font-size: 62.5%;
      }
      body {
        text-rendering: optimizeLegibility;
        margin: 0;
        transition: background-color 1s ease, opacity 5s ease;
        min-height: 100%;
        font-size: 16px; /* fallback for rem */
        font-size: 1.6rem;

        overflow-y: scroll;
        /* overflow to prevent ethernal loop with masonry */
        margin: 0;
      }
      *,
      *:before,
      *:after,
      :after,
      :before {
        box-sizing: inherit;
      }
    `}
  />
)
