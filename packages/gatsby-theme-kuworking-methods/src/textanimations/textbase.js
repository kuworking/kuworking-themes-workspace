import React, { useRef } from 'react'
import styled from '@emotion/styled'
import { useInView } from 'react-intersection-observer'
import { animated, useSprings, useTrail } from 'react-spring'

export const TextBase = ({
  type,
  children,
  persistent = false,
  view = true,
  difference = 50,
  margin = '-100px',
  delay = 0,
  animationFrom = null,
  animationTo = null,
  config = { mass: 5, tension: 800, friction: 200 },
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

  const text = [...(children.props ? children.props.children.toString() : children.toString())]
  const from = animationFrom

  const to =
    inView || !view
      ? persistent
        ? (Array.isArray(animationTo) && [...animationTo]) || [animationTo]
        : (Array.isArray(animationTo) && [...animationTo, from]) || [animationTo, from]
      : from

  const base = {
    config: config,
    from: from,
    to: to,
    delay: delay,
  }

  return (
    <Div ref={view ? handleRef : trueRef} {...rest}>
      {type === 'springs' && <Springs text={text} base={base} delay={delay} difference={difference} />}
      {type === 'trail' && <Trail text={text} base={base} difference={difference} />}
      {type === 'trailHeight' && <TrailHeight text={text} base={base} difference={difference} />}
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

const Springs = ({ text, base, delay, difference }) => {
  const springs = useSprings(
    text.length,
    text.map((t, i) => ({ ...base, delay: Number(delay) + Number(difference * i) }))
  )

  return springs.map((s, i) => (
    <animated.span key={`char${i}`} style={s}>
      {text[i] === ' ' ? <>&nbsp;</> : text[i]}
    </animated.span>
  ))
}

const Trail = ({ text, base, difference }) => {
  const trail = useTrail(text.length, {
    ...base,
    duration: difference,
  })

  return trail.map((s, i) => (
    <animated.span key={`char${i}`} style={s}>
      {text[i] === ' ' ? <>&nbsp;</> : text[i]}
    </animated.span>
  ))
}

const TrailHeight = ({ text, base, difference }) => {
  const trail = useTrail(text.length, {
    ...base,
    duration: difference,
  })

  return trail.map(({ opacity, x, height }, i) => (
    <animated.span key={`char${i}`} style={{ opacity, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}>
      <animated.div style={{ height }}>{text[i] === ' ' ? <>&nbsp;</> : text[i]}</animated.div>
    </animated.span>
  ))
}
