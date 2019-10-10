import React from 'react'
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
      // add pinterest library
      const script = document.createElement('script')
      script.async = true
      script.type = 'text/javascript'
      script.dataset.pinBuild = 'doBuild'
      script.src = '//assets.pinterest.com/js/pinit.js'
      if (!stillMounted.value) return
      document.body.appendChild(script)
      if (window.doBuild) window.doBuild()
    }

    const stillMounted = { value: true }
    inject_pinterest(stillMounted)

    return function cancelFetch() {
      stillMounted.value = false
    }
  }, []) // only run once

  return <></>
}
