import React, { useRef } from 'react'
import styled from '@emotion/styled'
import { useInView } from 'react-intersection-observer'
import { animated, useSpring } from 'react-spring'

export const Base = ({
  children,
  persistent = false,
  view = true,
  margin = '-100px',
  delay = 0,
  animationFrom = null,
  animationTo = null,
  config = { mass: 5, tension: 200, friction: 200 },
  ...rest
}) => {
  // eslint-disable-next-line no-unused-vars
  const [ref, inView, entry] = useInView({
    triggerOnce: true,
    rootMargin: `${margin} 0px`,
  })

  const trueRef = useRef()
  const handleRef = node => {
    // in order to have a real reference since the ref from useInView doesn't have a current value
    // https://github.com/thebuilder/react-intersection-observer/issues/186
    ref(node)
    trueRef.current = node
  }

  const effect = useSpring({
    config: config,
    from: animationFrom,
    to:
      inView || !view
        ? persistent
          ? (Array.isArray(animationTo) && [...animationTo]) || [animationTo]
          : (Array.isArray(animationTo) && [...animationTo, animationFrom]) || [animationTo, animationFrom]
        : animationTo,
    delay: delay,
  })

  return (
    <Div ref={view ? handleRef : trueRef} {...rest}>
      <animated.div style={effect}>{children}</animated.div>
    </Div>
  )
}

const Div = styled.div`
  ${props => props.component}
  & > div {
    ${props => props.subcomponent}
  }
`
