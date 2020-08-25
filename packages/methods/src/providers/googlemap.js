import React from 'react'
import { styled } from 'linaria/react'

export const GoogleMap = ({ src }) => (
  <Frame
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    frameborder="0"
    allowfullscreen
    title="Google Maps"
    src={src}
  />
)

const Frame = styled.iframe`
  width: 100%;
  height: 450px;
  border: none;
`
