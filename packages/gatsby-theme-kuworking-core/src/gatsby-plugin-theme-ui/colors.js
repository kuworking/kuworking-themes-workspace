// implements color themes to be switched

export default {
  panelOne: '#ef874a',
  border: '#ececec',
  borderHover: '#666',
  textBackground: '#f55e47',
  textWithBackground: '#fff',
  bgemphasis: '#5a4242',
  emphasis: '#fff',

  modes: {
    dark: {
      panelOne: '#b14b4b',
      textBackground: '#7e5786',
      textWithBackground: '#fff',
      bgemphasis: '#c969dc',
      emphasis: '#fff',

      text: '#F0F5FA',
      background: '#222639',
      primary: '#BB99FF',
      secondary: '#EE99FF',
      highlight: '#5F527A',
      purple: '#EE99FF',
      muted: '#00000033',
      gray: '#6699CC',
      heading: '#ffffff',
    },
    tosh: {
      panelOne: '#e0e0e0',
      textBackground: '#9f9f9f',
      textWithBackground: '#fff',
      bgemphasis: '#c7d0dc',
      emphasis: '#000',

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
      textBackground: '#1a73e8',
      textWithBackground: '#fff',
      bgemphasis: '#c7d0dc',
      emphasis: '#000',

      text: '#202124',
      background: '#fff',
      primary: '#1a73e8',
      secondary: '#9c27b0',
      muted: '#f1f3f4',
    },
  },
}

export const modes = ['light', 'dark', 'tosh', 'roboto']
