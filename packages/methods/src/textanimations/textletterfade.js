import React from 'react'
import { TextBase } from './textbase'

export const TextLetterFade = ({
  children,
  persistent = true,
  view = true,
  difference = 0,
  margin = '-100px',
  delay = 0,
  animationFrom = { opacity: 0 },
  animationTo = { opacity: 1 },
  config = { mass: 5, tension: 800, friction: 200 },
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
