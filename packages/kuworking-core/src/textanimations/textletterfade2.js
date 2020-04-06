import React, { useRef } from 'react'
import styled from '@emotion/styled'
import { useInView } from 'react-intersection-observer'
import { animated, useTrail } from 'react-spring'

export const TextLetterFade2 = ({ children, margin = '-100px', toDelay = 0, ...rest }) => {
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
  const from = { opacity: 0, x: 20, height: 0 }
  const to = inView ? { opacity: 1, x: 0, height: 80 } : from

  const trail = useTrail(text.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    from: from,
    to: to,
    delay: toDelay,
  })

  return (
    <Div ref={handleRef} {...rest}>
      {trail.map(({ opacity, x, height }, i) => (
        <animated.span key={`char${i}`} style={{ opacity, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}>
          <animated.div style={{ height }}>{text[i] === ' ' ? <>&nbsp;</> : text[i]}</animated.div>
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
