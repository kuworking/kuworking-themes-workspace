import { elements } from './styles-elements'

export const styles = {
  breakpoints: ['25em', '37.5em', '56.25em'], // 400px, 600px, 900px
  fontSizes: ['1.2rem', '1.4rem', '1.5rem', '1.7rem', '2.0rem', '3.2rem', '4rem', '4.8rem'],
  fonts: {
    post: 'Squada One, sans-serif',
    monospace: 'monospace',
    standard: 'Squada One, sans-serif',
    special: 'Squada One, sans-serif',
  },
  styles: {
    root: {
      fontFamily: 'standard',
      fontSize: 4,
      lineHeight: 1.3,
      ...elements,
    },
    ...elements,
  },
}
