// v2020.03.31

import { useWindowResize } from '../hooks/usewindowresize'

export const replace100vh = () => {
  const setCssVar = () => document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`)
  useWindowResize(setCssVar, 500)
  return ''
}
