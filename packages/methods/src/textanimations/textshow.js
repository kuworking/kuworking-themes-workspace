import React from 'react'
import { TextBase } from './textbase'

export const TextShow = ({
  children,
  persistent = true,
  view = true,
  difference = 50,
  margin = '-100px',
  delay = 0,
  animationFrom = { transform: 'translate3d(0,0px,0)' },
  animationTo = [{ transform: 'translate3d(0,-40px,0)' }, { transform: 'translate3d(0,0px,0)' }],
  config = { mass: 5, tension: 8000, friction: 200 },
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
