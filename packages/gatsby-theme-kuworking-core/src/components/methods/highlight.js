import React, { useState, useEffect } from 'react'

export const apply_highlight = () =>
  document.querySelectorAll('pre code').forEach(block => window.hljs && window.hljs.highlightBlock(block))

export const Highlight = ({ styling }) => {
  const [state, setState] = useState(0)

  if (state) apply_highlight()

  useEffect(() => {
    let stillMounted = true
    // add highlight library
    const script = document.createElement('script')
    script.async = true
    script.type = 'text/javascript'
    script.src = '/highlight/highlight.pack.js'

    const onScriptLoad = () => setState(1)

    script.addEventListener('load', onScriptLoad)

    const css = document.createElement('link')
    css.rel = 'stylesheet'
    css.href = styling ? `/highlight/${styling}.css` : '/highlight/monokai-sublime.css'

    if (stillMounted) {
      document.body.appendChild(script)
      document.body.appendChild(css)
    }

    return () => {
      stillMounted = false
      script.removeEventListener('load', onScriptLoad)
    }
  }, []) // only run once

  return <></>
}
