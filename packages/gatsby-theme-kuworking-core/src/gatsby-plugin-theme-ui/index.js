import merge from 'deepmerge'
import typography from './typography'
import colors from './colors'
import styles from './styles'
import { swiss } from '@theme-ui/presets'

export default merge.all([
  typography,
  swiss,
  {
    initialColorMode: `light`,
    colors,
    sizes: {
      container: 672,
    },
    styles,
  },
])
