// implements color themes to be switched

export default {
  panelOne: '#cadce6',
  boxShadow: '#ececec',
  boxShadowHover: '#666',

  modes: {
    dark: {
      panelOne: '#b14b4b',
      boxShadow: '#666',
      boxShadowHover: '#ececec',
      text: 'hsl(210, 50%, 96%)',
      background: 'hsl(230, 25%, 18%)',
      primary: 'hsl(260, 100%, 80%)',
      secondary: 'hsl(290, 100%, 80%)',
      highlight: 'hsl(260, 20%, 40%)',
      purple: 'hsl(290, 100%, 80%)',
      muted: 'hsla(230, 20%, 0%, 20%)',
      gray: 'hsl(210, 50%, 60%)',
      heading: '#ffffff',
    },
    tosh: {
      panelOne: '#fbd7d7',
      text: '#000',
      background: '#fff',
      primary: '#000',
      secondary: '#3f3f3f',
      muted: '#e0e0e0',
      highlight: '#9f9f9f',
      gray: '#6c6c6c',
      accent: '#3f3f3f',
    },
    roboto: {
      panelOne: '#e6e1e1',
      text: '#202124',
      background: '#fff',
      primary: '#1a73e8',
      secondary: '#9c27b0',
      muted: '#f1f3f4',
    },
  },
}

export const modes = ['light', 'dark', 'tosh', 'roboto']
