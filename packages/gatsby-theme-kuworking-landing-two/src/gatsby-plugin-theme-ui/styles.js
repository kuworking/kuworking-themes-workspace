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
      color: 'textBlocA',
      fontSize: [5, 5, 6],
    },
    h2: {
      ...elements.h2,
      color: 'textBlocA',
    },
  },
  styles: {
    root: {
      fontFamily: 'standard',
      lineHeight: 1.3,
      fontWeight: '400',
      fontSize: [1, 2, 2],
      ...elements,
    },
    ...elements,
  },
}
