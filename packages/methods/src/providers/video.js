import React from 'react'
import { styled } from 'linaria/react'

export const Video = ({ src }) => (
  <Frame
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    frameborder="0"
    allowfullscreen
    title="Video"
    src={src}
  />
)

const Frame = styled.iframe`
  width: 100%;
  height: 400px;
  border: none;
`
