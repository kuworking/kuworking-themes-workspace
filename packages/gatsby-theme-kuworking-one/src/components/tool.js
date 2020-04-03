import React from 'react'
import styled from '@emotion/styled'

import { config, SocialShare } from 'gatsby-theme-kuworking-one'
import { CtaPosts } from './cta'

export const Tool = ({
  blogPage: {
    images,
    children,
    page: { wallpaper: isWallpaper, cta, share, title, image, ctalist_center, marginTop, thePath },
  },
}) => {
  const url = config.url + thePath

  return (
    <Container>
      {share && <SocialShare title={title} url={url} image={image && url + image} />}
      {children}
      {cta && <CtaPosts />}
    </Container>
  )
}

const Container = styled.article`
  display: block;
  padding-bottom: 30px;
`
