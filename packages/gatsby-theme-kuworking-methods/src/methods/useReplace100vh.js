// v2020.03.31

import { useWindowResize } from '../hooks/usewindowresize'
import { useEffect } from 'react'

export const useReplace100vh = () => {
  const setCssVar = () => document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`)

  useEffect(() => setCssVar(), [])
  useWindowResize(setCssVar, 500)
  return ''
}
