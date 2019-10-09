import React from 'react'
import { FacebookShareButton, TwitterShareButton, PinterestShareButton } from 'react-share'
import { FacebookIcon, TwitterIcon, PinterestIcon } from 'react-share'
import styled from 'styled-components'

const Social = styled.div`
  display: flex;
  max-width: 100%;

  & .social-icon {
    cursor: pointer;
  }

  & .social-icon:hover {
    opacity: 0.75;
  }
`

export const SocialShare = ({ title, url, image }) => (
  <Social>
    <FacebookShareButton url={url} quote={title} additionalProps={{ 'aria-label': 'Facebook Share' }}>
      <FacebookIcon size={32} round />
    </FacebookShareButton>
    <TwitterShareButton url={url} title={title} additionalProps={{ 'aria-label': 'Twitter Share' }}>
      <TwitterIcon size={32} round />
    </TwitterShareButton>
    <PinterestShareButton
      url={url}
      media={image}
      windowWidth={1000}
      windowHeight={730}
      additionalProps={{ 'aria-label': 'Pinterest Share' }}
    >
      <PinterestIcon size={32} round />
    </PinterestShareButton>
  </Social>
)
