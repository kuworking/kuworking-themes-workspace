import React, { useRef } from 'react'
import styled from '@emotion/styled'
import { useInView } from 'react-intersection-observer'
import { animated, useTrail } from 'react-spring'

export const TextZoom = ({ children, margin = '-100px', toDelay = 0, ...rest }) => {
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

  const text = [...(children.props ? children.props.children.toString() : children.toString())]
  const from = { opacity: 0, transform: 'scale(4)' }
  const to = inView ? { opacity: 1, transform: 'scale(1)' } : from

  const trail = useTrail(text.length, {
    config: { mass: 1, tension: 3000, friction: 200 },
    from: from,
    to: to,
    delay: toDelay,
  })

  return (
    <Div ref={handleRef} {...rest}>
      {trail.map((props, i) => (
        <animated.span key={`char${i}`} style={props}>
          {text[i] === ' ' ? <>&nbsp;</> : text[i]}
        </animated.span>
      ))}
    </Div>
  )
}

const Div = styled.div`
  ${props => props.component}
  & > span {
    ${props => props.subcomponent}
    display: inline-block;
  }
`
