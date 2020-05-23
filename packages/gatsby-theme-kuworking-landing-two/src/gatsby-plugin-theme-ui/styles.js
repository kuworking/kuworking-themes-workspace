import { elements } from './styles-elements'

export const styles = {
  breakpoints: ['25em', '37.5em', '56.25em'], // 400px, 600px, 900px
  fontSizes: ['1.2rem', '1.4rem', '1.5rem', '1.7rem', '2.0rem', '2.4rem', '3.2rem', '4.8rem'],
//  fontSizes: [12, 13, 15, 17, 20, 25, 30, 43, 51, 67, 75],
  fonts: {
    post: 'Text Me One, sans-serif',
    monospace: 'monospace',
    standard: 'Text Me One, sans-serif',
    special: 'Text Me One, sans-serif',
  },
  styles: {
    root: {
      fontFamily: 'standard',
      lineHeight: 1.3,
      ...elements,
    },
    ...elements,
  },
}
