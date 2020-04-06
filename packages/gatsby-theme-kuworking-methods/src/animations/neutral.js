import React, { useRef } from 'react'
import { useInView } from 'react-intersection-observer'

export const Neutral = ({ children, margin = '-100px' }) => {
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

  return <div ref={handleRef}>{children(inView)}</div>
}
