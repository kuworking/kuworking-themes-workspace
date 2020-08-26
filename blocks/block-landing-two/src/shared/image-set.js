// v2020.08.25

import React, { useState, useLayoutEffect, useRef } from 'react'
import styled from '@emotion/styled'
import { useWindowResize } from '@kuworking/methods'

/**
 * Implements a background image without lazy loading
 */

export const BImageSet = ({ image: { small, big, ...v }, alt = 'image', children }) => {
  const [src, setSrc] = useState(small)
  const resize = useWindowResize()
  const background_id = useRef()

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

  useEffect(() => {
    background_id.current.style.setProperty('--background', 'url(' + src + ')')
  }, [src])

  return (
    <BackgroundImage ref={background_id} alt={alt}>
      {children}
    </BackgroundImage>
  )
}

const BackgroundImage = styled.div`
  background-image: var(--background);
  --background: url();
`
