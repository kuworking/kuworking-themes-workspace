import React from 'react'
import { TextBase } from './textbase'

export const TextLetterFade2 = ({
  children,
  persistent = true,
  view = true,
  difference = 0,
  margin = '-100px',
  delay = 500,
  animationFrom = { opacity: 0, x: 20, height: 0 },
  animationTo = { opacity: 1, x: 0, height: 80 },
  config = { mass: 5, tension: 2000, friction: 200 },
  ...rest
}) => (
  <TextBase
    type="trailHeight"
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
