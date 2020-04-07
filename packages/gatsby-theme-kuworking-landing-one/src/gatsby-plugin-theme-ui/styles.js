import { elements } from './styles-elements'

export const styles = {
  breakpoints: ['400px', '600px'],
  fontSizes: [12, 13, 15, 17, 20, 25, 30, 43, 51, 67, 75],
  fonts: {
    post: 'Text Me One, sans-serif',
    monospace: 'monospace',
    standard: 'Text Me One, sans-serif',
    special: 'Text Me One, sans-serif',
  },
  em2: {
    em: elements.em2,
  },
  title: {
    h1: {
      ...elements.h1,
      fontSize: [7, 7, 8],
    },
  },
  styles: {
    root: {
      fontFamily: 'standard',
      lineHeight: 1.3,
      fontWeight: '400',
      fontSize: [1, 2, 3],
      ...elements,
    },
    ...elements,
  },
}
