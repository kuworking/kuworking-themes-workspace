import React from 'react'
import { TextBase } from './textbase'

export const TextZoomPanic = ({
  children,
  persistent = true,
  view = true,
  difference = 10,
  margin = '-100px',
  delay = 0,
  animationFrom = { fontSize: '100%' },
  animationTo = [{ fontSize: '140%' }, { fontSize: '60%' }, { fontSize: '160%' }],
  config = { mass: 2, tension: 80000, friction: 20 },
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
