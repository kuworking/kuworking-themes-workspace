import React, { useRef } from 'react'
import styled from '@emotion/styled'
import { useInView } from 'react-intersection-observer'
import { animated, useSpring } from 'react-spring'

export const Fade = ({ children, margin = '-100px', ...rest }) => {
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

  const effect = useSpring({ opacity: inView ? 1 : 0 })

  return (
    <animated.div ref={handleRef} style={effect} {...rest}>
      {children}
    </animated.div>
  )
}
