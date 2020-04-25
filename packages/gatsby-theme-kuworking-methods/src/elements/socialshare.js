import React from 'react'
import {
  FacebookShareButton,
  TwitterShareButton,
  PinterestShareButton,
  FacebookIcon,
  TwitterIcon,
  PinterestIcon,
} from 'react-share'
import styled from '@emotion/styled'

export const SocialShare = ({ title, url, image, size = 32 }) => (
  <Social>
    <FacebookShareButton url={url} quote={title} id="gtm_socialshare_facebook">
      <FacebookIcon size={size} round={true} />
    </FacebookShareButton>
    <TwitterShareButton url={url} title={title} id="gtm_socialshare_twitter">
      <TwitterIcon size={size} round={true} />
    </TwitterShareButton>
    <PinterestShareButton url={url} media={image} windowWidth={1000} windowHeight={730} id="gtm_socialshare_pinterest">
      <PinterestIcon size={size} round={true} />
    </PinterestShareButton>
  </Social>
)

const Social = styled.div`
  display: flex;
  max-width: 100%;

  & button {
    cursor: pointer;
    opacity: 0.75;
  }

  & button:hover {
    opacity: 1;
  }
`
