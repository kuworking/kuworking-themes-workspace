import React from 'react'
import { Base } from './base'

export const Toggle = ({
  children,
  persistent = true,
  view = true,
  margin = '-100px',
  delay = 0,
  animationFrom = { transform: `rotateX(0deg)` },
  animationTo = { transform: `rotateX(360deg)` },
  config = { mass: 5, tension: 200, friction: 80 },
  ...rest
}) => (
  <Base
    {...{
      children,
      persistent,
      view,
      margin,
      delay,
      animationFrom,
      animationTo,
      config,
      rest,
    }}
  />
)
