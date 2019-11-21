import React from 'react'
import { useScript } from '../hooks/usescript'
import { useCss } from '../hooks/usecss'

export const Highlight = ({ styling }) => {
  const url = styling ? `/highlight/${styling}.css` : '/highlight/monokai-sublime.css'
  const [loadedJS, errorJS] = useScript('/highlight/highlight.pack.js')
  const [loadedCSS, errorCSS] = useCss(url)

  return <>{loadedJS && loadedCSS && apply_highlight()}</>
}

export const apply_highlight = () =>
  document.querySelectorAll('pre code').forEach(block => window.hljs && window.hljs.highlightBlock(block))
