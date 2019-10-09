import React, { useEffect } from 'react'

/* V0.1 */

export const Pinterest = () => {
  useEffect(() => {
    let stillMounted = true
    // add pinterest library
    const script = document.createElement('script')
    script.async = true
    script.type = 'text/javascript'
    script.dataset.pinBuild = 'doBuild'
    script.src = '//assets.pinterest.com/js/pinit.js'
    if (stillMounted) {
      document.body.appendChild(script)
      if (window.doBuild) window.doBuild()
    }

    return function cancelFetch() {
      stillMounted = false
    }
  }, []) // only run once

  return <></>
}
