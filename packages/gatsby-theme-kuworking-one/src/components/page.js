import React from 'react'
import styled from '@emotion/styled'

import { Config, SocialShare } from 'gatsby-theme-kuworking-core'
import { CtaPosts } from './cta'

export const Page = ({
  blogPage: {
    canonical,
    images,
    page: { title, name, image, share },
    children,
  },
}) => {
  return (
    <Container>
      {share && <SocialShare title={title} url={Config.url + name} image={image && canonical + image} />}
      {children}

      <CtaPosts />
    </Container>
  )
}

const Container = styled.article`
  display: block;
  padding-bottom: 30px;
`
