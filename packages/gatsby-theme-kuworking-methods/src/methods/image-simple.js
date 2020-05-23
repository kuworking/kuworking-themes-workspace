// v2020.05.23

import React, { useState, useRef, useEffect, useCallback } from 'react'
import styled from '@emotion/styled'
import { useWindowResize } from '../hooks/usewindowresize'

const wait = ms => new Promise((res, rej) => setTimeout(() => res('timed'), ms))

export const BImgSimple = ({
  blank = '/blank.gif',
  image: [standard, set],
  component,
  alt = 'image',
  children,
  ...rest
}) => {
  const [src, setSrc] = useState(blank)
  const resize = useWindowResize()

  useEffect(() => {
    const { innerWidth: clientWidth } = typeof window !== 'undefined' && window
//    const clientWidth = trueRef && trueRef.current && trueRef.current.clientWidth
    const bestImage = set
      ? clientWidth < 400
        ? set['400px'] || set['600px'] || set['800px'] || set['1000px'] || set['1200px'] || set['1800px'] || standard
        : clientWidth < 600
        ? set['600px'] || set['800px'] || set['1000px'] || set['1200px'] || set['1800px'] || standard
        : clientWidth < 800
        ? set['800px'] || set['1000px'] || set['1200px'] || set['1800px'] || standard
        : clientWidth < 1000
        ? set['1000px'] || set['1200px'] || set['1800px'] || standard
        : clientWidth < 1200
        ? set['1200px'] || set['1800px'] || standard
        : clientWidth < 1800
        ? set['1800px'] || standard
        : standard
      : standard

    setSrc(bestImage)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resize, standard, set]) // changes when window is resized

  return (
    <BackgroundImage src={src} alt={alt} className="kw_bimg_simple">
      {children}
    </BackgroundImage>
  )
}

const BackgroundImage = styled.div`
  background-image: ${props => `url("${props.src}")`};
  background-repeat: no-repeat;
`
