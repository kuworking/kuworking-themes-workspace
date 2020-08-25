import React from 'react'
import { styled } from 'linaria/react'

export const Instagram = ({ src }) => (
  <a aria-label="Instagram" href={src + '?utm_source=ig_web_copy_link'}>
    <Img alt="Instagram" src={src + 'media/?size=l'} />
  </a>
)

const Img = styled.img`
  width: 100%;
`
