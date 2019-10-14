const baseColors = {
  white: '#fff',
  black: '#000',
  gray: [
    '#fff', // 0 index
    '#f8f9fa',
    '#e9ecef',
    '#dee2e6',
    '#ced4da',
    '#adb5bd',
    '#6c757d',
    '#495057',
    '#343a40',
    '#212529',
  ],
  blue: '#007bff',
  indigo: '#6610f2',
  purple: '#6f42c1',
  pink: '#e83e8c',
  red: '#dc3545',
  orange: '#fd7e14',
  yellow: '#ffc107',
  green: '#28a745',
  teal: '#20c997',
  cyan: '#17a2b8',
}

const purple60 = `#663399`
const purple30 = `#D9BAE8`
const grey90 = `#232129`
const black80 = `#1B1F23`
const white = `#fff`
const lightWhite = `rgba(255, 255, 255, 0.86)`
const opaqueLightYellow = `rgba(255, 229, 100, 0.2)`
const opaqueLightWhite = `hsla(0, 0%, 100%, 0.2)`
const lightGray = `hsla(0, 0%, 0%, 0.2)`

export default {
  text: grey90,
  background: white,
  primary: purple60,
  secondary: black80,
  highlight: opaqueLightYellow,
  muted: lightGray,
  heading: grey90,
  modes: {
    dark: {
      text: 'hsl(210, 50%, 96%)',
      background: 'hsl(230, 25%, 18%)',
      primary: 'hsl(260, 100%, 80%)',
      secondary: 'hsl(290, 100%, 80%)',
      highlight: 'hsl(260, 20%, 40%)',
      purple: 'hsl(290, 100%, 80%)',
      muted: 'hsla(230, 20%, 0%, 20%)',
      gray: 'hsl(210, 50%, 60%)',
      heading: white,
    },
    tosh: {
      text: '#000',
      background: '#fff',
      primary: '#000',
      secondary: '#3f3f3f',
      muted: '#e0e0e0',
      highlight: '#9f9f9f',
      gray: '#6c6c6c',
      accent: '#3f3f3f',
    },
    swiss: {
      text: 'hsl(10, 20%, 20%)',
      background: 'hsl(10, 10%, 98%)',
      primary: 'hsl(10, 80%, 50%)',
      secondary: 'hsl(10, 60%, 50%)',
      highlight: 'hsl(10, 40%, 90%)',
      purple: 'hsl(250, 60%, 30%)',
      muted: 'hsl(10, 20%, 94%)',
      gray: 'hsl(10, 20%, 50%)',
    },
    bootstrap: {
      text: '#212529',
      background: '#fff',
      primary: '#007bff',
      secondary: '#6c757d',
      highlight: '#ffc107',
      muted: '#dee2e6',
      success: '#28a745',
      info: '#17a2b8',
    },
  },
}
