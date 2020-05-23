// v2020.05.23

import React, { useState, useLayoutEffect } from 'react'
import styled from '@emotion/styled'
import { useWindowResize } from '../hooks/usewindowresize'

export const BImageSet = ({ image: { small, big, ...v }, alt = 'image', children }) => {
  const [src, setSrc] = useState(small)
  const resize = useWindowResize()

  useLayoutEffect(() => {
    const { innerWidth: clientWidth } = typeof window !== 'undefined' && window
    //    const clientWidth = trueRef && trueRef.current && trueRef.current.clientWidth
    const bestImage = v
      ? clientWidth > 1800
        ? big
        : clientWidth > 1200
        ? v['1800px'] || big
        : clientWidth > 1000
        ? v['1200px'] || v['1800px'] || big
        : clientWidth > 800
        ? v['1000px'] || v['1200px'] || v['1800px'] || big
        : clientWidth > 600
        ? v['800px'] || v['1000px'] || v['1200px'] || v['1800px'] || big
        : clientWidth > 400
        ? v['600px'] || v['800px'] || v['1000px'] || v['1200px'] || v['1800px'] || big
        : v['400px'] || v['600px'] || v['800px'] || v['1000px'] || v['1200px'] || v['1800px'] || big
      : small || big

    setSrc(bestImage)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resize]) // changes when window is resized

  return (
    <BackgroundImage src={src} alt={alt} className="kw_bimg_simple">
      {children}
    </BackgroundImage>
  )
}

const BackgroundImage = styled.div`
  background-image: ${props => `url("${props.src}")`};
`
