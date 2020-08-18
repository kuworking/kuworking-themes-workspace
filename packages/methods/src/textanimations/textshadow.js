import React from 'react'
import { TextBase } from './textbase'

export const TextShadow = ({
  children,
  persistent = false,
  view = true,
  difference = 50,
  margin = '-100px',
  delay = 0,
  animationFrom = { textShadow: '0px 0px 0px #000, 0px 0px 0px #ccc, 0px 0px 0px #ededed' },
  animationTo = { textShadow: '1px 1px 1px #000, 4px 4px 1px #ccc, 6px 6px 1px #ededed' },
  config = { mass: 5, tension: 800, friction: 200 },
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
