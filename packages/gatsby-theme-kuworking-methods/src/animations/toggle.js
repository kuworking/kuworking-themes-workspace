import React, { useRef } from 'react'
import styled from '@emotion/styled'
import { useInView } from 'react-intersection-observer'
import { animated, useSpring } from 'react-spring'

export const Toggle = ({ children, margin = '-100px', toDelay = 0, renderProp, ...rest }) => {
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
    config: { mass: 5, tension: 200, friction: 80 },
    from: { transform: `rotateX(0deg)` },
    to: { transform: `rotateX(${inView || margin === 'none' ? 0 : 360}deg)` },
    delay: toDelay,
  })

  return (
    <animated.div ref={margin === 'none' ? null : handleRef} style={effect} {...rest}>
      {renderProp ? children(inView) : children}
    </animated.div>
  )
}
