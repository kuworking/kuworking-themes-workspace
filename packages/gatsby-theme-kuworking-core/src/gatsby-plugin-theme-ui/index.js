import merge from 'deepmerge'
import typography from './typography'
import colors from './colors'
import styles from './styles'

export default merge(typography, {
  initialColorMode: `light`,
  colors,
  fonts: {
    heading: `OpenSans, sans-serif`,
    monospace: `Consolas, Menlo, Monaco, source-code-pro, Courier New, monospace`,
  },
  sizes: {
    container: 672,
  },
  styles,
})
