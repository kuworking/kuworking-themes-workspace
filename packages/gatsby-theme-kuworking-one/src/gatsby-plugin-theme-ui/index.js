import merge from 'deepmerge'
import typography from './typography'
import { colors } from './colors'
import { styles } from './styles'
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
combined.fontSizes = [12, 13, 14, 16, 20, 24, 32, 48, 64, 72]
combined.lineHeights = typography.lineHeights

export default combined

export { modes } from './colors' // necessary for the switcher of color modes
