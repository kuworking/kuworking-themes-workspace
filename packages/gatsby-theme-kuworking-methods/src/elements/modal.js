import React from 'react'
import { useTransition, animated } from 'react-spring'

export const Modal = ({ isShow, text }) => {
  const transitions = useTransition(isShow, null, {
    from: { opacity: 0, marginTop: '-50px' },
    enter: { opacity: 1, marginTop: '0px' },
    leave: { opacity: 0, marginTop: '50px' },
  })

  return (
    <>
      {transitions.map(({ item, props, key }) =>
        item ? (
          <animated.div key={key} style={props}>
            <div>{text}</div>
          </animated.div>
        ) : null
      )}
    </>
  )
}

