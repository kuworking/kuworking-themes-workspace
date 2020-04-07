import React, { useState, useRef, useEffect } from 'react'
import styled from '@emotion/styled'
import { useInView } from 'react-intersection-observer'
import { animated, useSpring } from 'react-spring'

export const Box = ({ children, margin = '-100px', toDelay = 0, renderProp, ...rest }) => {
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

  const [width, setWidth] = useState(0)
  useEffect(() => {
    inView && setWidth(entry.boundingClientRect.width)
  }, [inView]) // eslint-disable-line react-hooks/exhaustive-deps

  const effect = useSpring({
    config: { mass: 5, tension: 200, friction: 200 },
    from: { width: 0 },
    to: { width: inView || margin === 'none' ? width : 0 },
    delay: toDelay,
  })
  return (
    <Div ref={margin === 'none' ? null : handleRef} {...rest}>
      <animated.div style={effect}>{renderProp ? children(inView) : children}</animated.div>
    </Div>
  )
}

const Div = styled.div`
  ${props => props.component}
  width: 100%;
  & > div {
    ${props => props.subcomponent}
  }
`
