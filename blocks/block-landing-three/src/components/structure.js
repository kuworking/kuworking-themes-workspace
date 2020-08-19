import React from 'react'
import styled from '@emotion/styled'

import 'typeface-handlee'
import 'typeface-open-sans'

import { GlobalStyles } from './globalstyles'
import { useReplace100vh } from '@kuworking/methods'
import { Header } from './header'
import { Image } from './image'

export const Structure = ({ attributes }) => {
  useReplace100vh()
  const {
    image_0,
    folder = '/',
    header_h1 = 'test',
    header_h2_0 = 'test',
    header_h2_1 = 'test',
    text_0 = 'test',
    text_1 = 'test',
    text_2 = 'test',
    gutenberg = null,
  } = attributes

  return (
    <>
      <GlobalStyles />
      <Header content={[header_h1, header_h2_0, header_h2_1]} />
      <Image gutenberg={gutenberg} src={`${folder}/${image_0}`} icon={`${folder}/icon.svg`}>
        <div>{text_0}</div>
        <div>{text_1}</div>
        <div>{text_2}</div>
      </Image>
    </>
  )
}
