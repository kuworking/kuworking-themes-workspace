// implements color themes to be switched

export const colors = {
  bigTitle: '#ffffff',
  text: '#3d2c29',
  link: '#9fcdff',
  title: '#000000ba',
  cards__background: '#fff',
  bloc2__background: '#f5f5f5',
  backgroundimg__color: '',
  backgroundimg__mode: 'unset',
  background: '#fff', // required

  modes: {
    dark: {
      bigTitle: '#cdbbe7',
      text: '#ffffff',
      link: '#9fcdff',
      title: '#ffffffd6',
      cards__background: '#3d3c3c',
      bloc2__background: '#8e8a8a',
      backgroundimg__color: '#9fadab',
      backgroundimg__mode: 'color-burn',
      background: '#000',
    },
  },
}

export const modes = ['light', 'dark']
