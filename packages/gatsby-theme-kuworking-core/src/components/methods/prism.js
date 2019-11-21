import React from 'react'
import { useScript } from '../hooks/usescript'
import { useCss } from '../hooks/usecss'

export const Prism = ({ styling }) => {
  const url = styling ? `/prism/${styling}.css` : '/prism/prism-base2tone-lake-dark.css'
  const [loadedJS, errorJS] = useScript('/prism/prism.js', { manual: true })
  const [loadedCSS, errorCSS] = useCss(url)

  return <>{loadedJS && loadedCSS && apply_prism()}</>
}

export const apply_prism = () => window.Prism && window.Prism.highlightAll()
