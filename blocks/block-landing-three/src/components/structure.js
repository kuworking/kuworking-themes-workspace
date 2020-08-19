import React from 'react'
import styled from '@emotion/styled'

import 'typeface-handlee'
import 'typeface-open-sans'

import { useReplace100vh } from '@kuworking/methods'

import './globalcss.css'

export const Structure = attributes => {
  useReplace100vh()
  const { image_0, folder = '/', text_0 = 'test', text_1 = 'test', text_2 = 'test', gutenberg = null } = attributes

  return (
    <Image gutenberg={gutenberg} src={`${folder}${image_0}`} icon={`${folder}/icon.svg`}>
      <div>{text_0}</div>
      <div>{text_1}</div>
      <div>{text_2}</div>
    </Image>
  )
}
