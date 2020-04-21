import React from 'react'
import { TextBase } from './textbase'

export const TextPeek = ({
  children,
  persistent = false,
  view = true,
  difference = 50,
  margin = '-100px',
  delay = 0,
  animationFrom = { transform: 'translateY(0px) rotate(0deg) rotateX(0deg) scale(1)' },
  animationTo = [
    { transform: 'translateY(10px) rotate(-0deg) rotateX(30deg) scale(1)' },
    { transform: 'translateY(-22px) rotate(30deg) rotateX(0deg) scale(1.3)' },
  ],
  config = { mass: 5, tension: 4000, friction: 200 },
  ...rest
}) => (
  <TextBase
    type="springs"
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
