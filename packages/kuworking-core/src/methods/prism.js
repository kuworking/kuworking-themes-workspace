import React from 'react'
import { useScript } from '../hooks/usescript'
import { useCss } from '../hooks/usecss'

export const Prism = ({ styling }) => {
  const [loadedCSS, errorCSS] = useCss(`/prism/${styling}.css`) // eslint-disable-line no-unused-vars
  const [loadedJS, errorJS] = useScript('/prism/prism.js', { manual: true }) // eslint-disable-line no-unused-vars
  return <>{loadedJS && loadedCSS && window.Prism && window.Prism.highlightAll()}</>
}
