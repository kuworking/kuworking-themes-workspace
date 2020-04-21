import { elements } from './styles-elements'

export const styles = {
  breakpoints: ['400px', '600px'],
  fontSizes: [10, 12, 13, 14, 20, 25, 30, 43, 60, 75, 150],
  fonts: {
    post: 'Text Me One, sans-serif',
    monospace: 'monospace',
    standard: 'Text Me One, sans-serif',
    special: 'dokdo, sans-serif',
  },
  em2: {
    em: elements.em2,
  },
  title: {
    h1: {
      ...elements.h1,
      fontSize: [8, 9, 10],
      fontFamily: 'special',
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
