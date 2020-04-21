import React from 'react'
import { Base } from './base'

export const Move = ({
  children,
  persistent = true,
  view = true,
  margin = '-100px',
  delay = 0,
  animationFrom = { marginTop: '-50px', opacity: 0 },
  animationTo = { marginTop: '0px', opacity: 1 },
  config = { mass: 5, tension: 800, friction: 200 },
  subcomponent = { position: 'absolute' },
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
