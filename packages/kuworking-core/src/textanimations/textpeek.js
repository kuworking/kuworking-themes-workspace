import React, { useRef } from 'react'
import styled from '@emotion/styled'
import { useInView } from 'react-intersection-observer'
import { animated, useSprings } from 'react-spring'

export const TextPeek = ({ children, margin = '-100px', toDelay = 0, ...rest }) => {
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
  const from = { transform: 'translateY(0px) rotate(0deg) rotateX(0deg) scale(1)' }
  const to = inView
    ? [
        { transform: 'translateY(10px) rotate(-13deg) rotateX(30deg) scale(1)' },
        { transform: 'translateY(-22px) rotate(3deg) rotateX(0deg) scale(1.1)' },
        from,
      ]
    : from

  const base = {
    config: { mass: 5, tension: 4000, friction: 200 },
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
