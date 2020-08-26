import React from 'react'

export const GoogleMap = ({ src }) => (
  <div
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    frameborder="0"
    allowfullscreen
    title="Google Maps"
    src={src}
  ></div>
)
