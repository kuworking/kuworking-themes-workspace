import React from 'react'
import { TextBase } from './textbase'

export const TextZoom = ({
  children,
  persistent = true,
  view = true,
  difference = 0,
  margin = '-100px',
  delay = 0,
  animationFrom = { opacity: 0, transform: 'scale(4)' },
  animationTo = { opacity: 1, transform: 'scale(1)' },
  config = { mass: 1, tension: 3000, friction: 200 },
  ...rest
}) => (
  <TextBase
    type="trail"
    {...{
      children,
      persistent,
      view,
      difference,
      margin,
      delay,
      animationFrom,
      animationTo,
      config,
      rest,
    }}
  />
)
