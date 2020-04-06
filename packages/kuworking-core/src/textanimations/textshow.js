import React, { useRef } from 'react'
import styled from '@emotion/styled'
import { useInView } from 'react-intersection-observer'
import { animated, useSprings } from 'react-spring'

export const TextShow = ({ children, margin = '-100px', toDelay = 0, ...rest }) => {
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
  const from = { transform: 'translate3d(0,0px,0)' }
  const to = inView ? [{ transform: 'translate3d(0,-40px,0)' }, { transform: 'translate3d(0,0px,0)' }] : from

  const base = {
    config: { mass: 5, tension: 8000, friction: 200 },
    from: from,
    to: to,
    delay: toDelay,
  }

  const springs = useSprings(
    text.length,
    text.map((t, i) => ({ ...base, delay: toDelay + 100 * i }))
  )

  return (
    <Div ref={handleRef} {...rest}>
      {springs.map((s, i) => {
        return (
          <animated.span key={`char${i}`} style={s}>
            {text[i] === ' ' ? <>&nbsp;</> : text[i]}
          </animated.span>
        )
      })}
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
