// implements color themes to be switched

export const colors = {
  text: '#3d2c29',
  title: '#000000ba',
  link: '#9fcdff',
  cards__background: '#fff',
  bloc2__background: '#f5f5f5',
  backgroundimg__color: '',
  backgroundimg__mode: 'unset',
  background: '#fff', // required

  modes: {
    dark: {
      text: '#ffffff',
      title: '#ffffffd6',
      link: '#9fcdff',
      cards__background: '#3d3c3c',
      bloc2__background: '#8e8a8a',
      backgroundimg__color: '#534e4e',
      backgroundimg__mode: 'color-burn',
      background: '#000',
    },
  },
}

export const modes = ['light', 'dark']
