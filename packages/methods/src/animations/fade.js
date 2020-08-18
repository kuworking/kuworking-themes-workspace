import React from 'react'
import { Base } from './base'

export const Fade = ({
  children,
  persistent = true,
  view = true,
  margin = '-100px',
  delay = 0,
  animationFrom = { opacity: 0 },
  animationTo = { opacity: 1 },
  config = { mass: 5, tension: 800, friction: 200 },
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
