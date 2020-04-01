import { elements } from './styles-elements'

export const styles = {
  breakpoints: ['400px', '600px'],
  fontSizes: [12, 14, 15, 17, 20, 24, 32, 40, 48, 64, 72],
  fonts: {
    post: 'Open Sans, sans-serif',
    monospace: 'monospace',
    standard: 'Open Sans, sans-serif',
    special: 'Open Sans, sans-serif',
  },
  em2: {
    em: elements.em2,
  },
  copy: {
    a: elements.a2,
    em: {
      ...elements.em2,
      fontWeight: '700',
    },
    h1: {
      ...elements.h1,
      fontSize: [6, 7, 8],
    },
    h2: {
      ...elements.h2,
      fontSize: [2, 3, 4],
    },
    h3: {
      ...elements.h3,
      fontSize: [1, 1, 2],
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
