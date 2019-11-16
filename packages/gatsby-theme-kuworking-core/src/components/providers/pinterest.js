import React, { useEffect } from 'react'

export const Pinterest = ({ src }) => (
  <a aria-label="Pinterest" data-pin-do="embedPin" data-pin-width="large" data-pin-build="doBuild" href={src}></a>
)

export const PinterestScript = () => {
  useEffect(() => {
    const inject_pinterest = stillMounted => {
      const url = '//assets.pinterest.com/js/pinit.js'
      const script = document.createElement('script')
      script.async = true
      script.type = 'text/javascript'
      script.dataset.pinBuild = 'doBuild'
      script.src = url // script.src now includes the http
      const alreadyLoaded = document.querySelectorAll(`script[src="${url}"]`).length === 0 ? false : true
      if (alreadyLoaded) return
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
