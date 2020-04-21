import 'typeface-text-me-one'
import 'typeface-dokdo'

import { colors } from './colors'
import { styles } from './styles'

const kuworking = {
  ...styles,
  initialColorModeName: `light`, // rename default as light
  colors,
}

export default kuworking

export { modes } from './colors'
