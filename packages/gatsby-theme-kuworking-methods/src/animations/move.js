import React, { useRef } from 'react'
import styled from '@emotion/styled'
import { useInView } from 'react-intersection-observer'
import { animated, useSpring } from 'react-spring'

export const Move = ({ children, margin = '-100px', toDelay = 0, renderProp, ...rest }) => {
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

  const from = { marginTop: '-50px', opacity: 0 }
  const to = inView || margin === 'none' ? { marginTop: '0px', opacity: 1 } : from

  const effect = useSpring({
    config: { mass: 5, tension: 800, friction: 200 },
    from: from,
    to: to,
    delay: toDelay,
  })

  return (
    <Div ref={margin === 'none' ? null : handleRef}>
      <animated.div style={effect} {...rest}>
        {renderProp ? children(inView) : children}
      </animated.div>
    </Div>
  )
}

const Div = styled.div`
  & > div {
    position: absolute;
  }
`
