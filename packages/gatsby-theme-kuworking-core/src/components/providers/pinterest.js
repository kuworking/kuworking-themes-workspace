import React, { useEffect } from 'react'
import { Container } from './container'

export const Pinterest = ({ className, src, text }) => (
  <Container>
    <a
      aria-label="Pinterest"
      data-pin-do="embedPin"
      data-pin-width="large"
      data-pin-build="doBuild"
      href={src}
      className={className}
    >
      <div>{text}</div>
    </a>
  </Container>
)

export const PinterestScript = () => {
  useEffect(() => {
    const inject_pinterest = stillMounted => {
      const script = document.createElement('script')
      script.async = true
      script.type = 'text/javascript'
      script.dataset.pinBuild = 'doBuild'
      script.src = '//assets.pinterest.com/js/pinit.js'
      document.body.appendChild(script)
      if (!stillMounted.value) return
      if (window.doBuild) window.doBuild()
    }

    const stillMounted = { value: true }
    inject_pinterest(stillMounted)

    return () => {
      stillMounted.value = false
    }
  }, []) // only run once

  return <></>
}
