// implements color themes to be switched

export const colors = {
  bigTitle: '#fff',
  text: '#3d2c29',
  title: '#3d2c29',
  link: '#9fcdff',
  cards__background: '#fff',
  bloc2__background: '#585858',
  backgroundimg__color: '',
  backgroundimg__mode: 'unset',
  background: '#fff', // required

  modes: {
    dark: {
      bigTitle: '#ccc',
      text: '#fff',
      title: '#fff',
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
