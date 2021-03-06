import React from 'react'
import styled from '@emotion/styled'
import { Global, css } from '@emotion/core'

import 'typeface-handlee'
import 'typeface-open-sans'

import { useReplace100vh } from '@kuworking/methods'
import { Header } from './header'
import { Image } from './image'

export const Structure = ({ attributes }) => {
  useReplace100vh()

  const {
    image_0,
    image_1,
    folder = '/',
    fonts = '/',
    header_h1 = 'test',
    header_h2_0 = 'test',
    header_h2_1 = 'test',
    text_0 = 'test',
    text_1 = 'test',
    text_2 = 'test',
    wordpress = null,
    gutenberg = null,
  } = attributes

  return (
    <>
      {wordpress && (
        <Global
          styles={css`
            ${load_fonts(fonts)}
          `}
        />
      )}

      <Header gutenberg={gutenberg} content={[header_h1, header_h2_0, header_h2_1]} />
      <Image gutenberg={gutenberg} src={`${folder}/${image_0}`} icon={`${folder}/${image_1}`}>
        <div>{text_0}</div>
        <div>{text_1}</div>
        <div>{text_2}</div>
      </Image>
    </>
  )
}

const load_fonts = fonts => `
  @font-face {
    font-family: 'Handlee';
    font-style: normal;
    font-display: swap;
    font-weight: 400;
    src:
      local('Handlee Regular '), 
      local('Handlee-Regular'),
      url('${fonts}/files/handlee-latin-400.woff2') format('woff2'),
      url('${fonts}/files/handlee-latin-400.woff') format('woff');
  }

  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-display: swap;
    font-weight: 400;
    src:
      local('Open Sans Regular '),
      local('Open Sans-Regular'),
      url('${fonts}/files/open-sans-latin-400.woff2') format('woff2'),
      url('${fonts}/files/open-sans-latin-400.woff') format('woff');
  }
`
