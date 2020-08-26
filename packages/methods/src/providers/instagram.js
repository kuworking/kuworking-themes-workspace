import React from 'react'

export const Instagram = ({ src }) => (
  <a aria-label="Instagram" href={src + '?utm_source=ig_web_copy_link'}>
    <img alt="Instagram" src={src + 'media/?size=l'} />
  </a>
)
