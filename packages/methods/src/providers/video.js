import React from 'react'

export const Video = ({ src }) => (
  <div
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    frameborder="0"
    allowfullscreen
    title="Video"
    src={src}
  ></div>
)
