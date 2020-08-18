import React from 'react'
import { Base } from './base'

export const MoveLeft = ({ children, ...rest }) => (
  <Move animationFrom={{ left: '-20px', opacity: 0 }} animationTo={{ left: '0px', opacity: 1 }} {...rest}>
    {children}
  </Move>
)
export const MoveUp = ({ children, ...rest }) => (
  <Move animationFrom={{ top: '-20px', opacity: 0 }} animationTo={{ top: '0px', opacity: 1 }} {...rest}>
    {children}
  </Move>
)
export const MoveDown = ({ children, ...rest }) => (
  <Move animationFrom={{ top: '20px', opacity: 0 }} animationTo={{ top: '0px', opacity: 1 }} {...rest}>
    {children}
  </Move>
)
export const MoveRight = ({ children, ...rest }) => (
  <Move animationFrom={{ left: '20px', opacity: 0 }} animationTo={{ left: '0px', opacity: 1 }} {...rest}>
    {children}
  </Move>
)

export const Move = ({
  children,
  type = 'up',
  persistent = true,
  view = true,
  margin = '-100px',
  delay = 0,
  animationFrom = { marginTop: '-20px', opacity: 0 },
  animationTo = { marginTop: '0px', opacity: 1 },
  config = { mass: 5, tension: 800, friction: 200 },
  subcomponent = { position: 'relative' },
  ...rest
}) => {
  let typeAnimationFrom, typeAnimationTo
  if (type === 'left') {
    typeAnimationFrom = { left: '-20px', opacity: 0 }
    typeAnimationTo = { left: '0px', opacity: 1 }
  } else if (type === 'right') {
    typeAnimationFrom = { top: '-20px', opacity: 0 }
    typeAnimationTo = { top: '0px', opacity: 1 }
  } else if (type === 'up') {
    typeAnimationFrom = { top: '20px', opacity: 0 }
    typeAnimationTo = { top: '0px', opacity: 1 }
  } else if (type === 'down') {
    typeAnimationFrom = { left: '20px', opacity: 0 }
    typeAnimationTo = { left: '0px', opacity: 1 }
  } else {
    typeAnimationFrom = animationFrom
    typeAnimationTo = animationTo
  }

  return (
    <Base
      {...{
        children,
        persistent,
        view,
        margin,
        delay,
        animationFrom: typeAnimationFrom,
        animationTo: typeAnimationTo,
        config,
        subcomponent,
        rest,
      }}
    />
  )
}
