import React from 'react'
import styled from '@emotion/styled'

import { Config, SocialShare } from 'gatsby-theme-kuworking-core'
import { CtaPosts } from './cta'

export const Tool = ({ blogPage: { images, page, children } }) => {
  return (
    <Container>
      {children}
      <SocialShare title={page.title} url={Config.url + page.name} image={Config.url + page.publicUrl} />

      <CtaPosts />
    </Container>
  )
}

const Container = styled.article`
  display: block;
  padding-bottom: 30px;
`
