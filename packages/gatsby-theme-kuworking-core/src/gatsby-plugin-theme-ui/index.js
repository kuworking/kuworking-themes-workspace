import merge from 'deepmerge'
import typography from './typography'
import colors from './colors'
import styles from './styles'
import { swiss } from '@theme-ui/presets'

const combined = merge.all([
  swiss,
  typography,
  {
    initialColorMode: `light`, // rename default as light
    colors,
    styles,
  },
])
combined.fontSizes = [12, 13, 14, 16, 18, 22, 28, 36, 46]
combined.lineHeights = typography.lineHeights

console.log(combined)

export default combined
