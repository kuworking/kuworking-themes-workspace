import React, { useState } from 'react'
import { useScript } from '../hooks/usescript'
import { useCss } from '../hooks/usecss'

export const Highlight = ({ styling, delay = 2000 }) => {
  const [script, setScript] = useState('')
  setTimeout(() => setScript('/highlight/highlight.pack.js'), delay)

  const [loadedCSS, errorCSS] = useCss(`/highlight/${styling}.css`) // eslint-disable-line no-unused-vars
  const [loadedJS, errorJS] = useScript(script) // eslint-disable-line no-unused-vars
  return <>{loadedJS && loadedCSS && apply_highlight()}</>
}

export const apply_highlight = () =>
  document.querySelectorAll('pre code').forEach(block => window.hljs && window.hljs.highlightBlock(block))
