// implements color themes to be switched

export default {
  header__div__background: 'linear-gradient(to right, #e76b6b, #ff2525)',

  cta__div__background: '#e4e4e4',
  cta__div__border: '#dadada',
  cta__title__color: '#ff6a00',
  cta__em__background: '#eaeaea',
  cta__em__color: '#ff6a00',
  cta__button__background: '#ff6a00',
  cta__button__color: '#fff',
  cta__button_hover__background: '#ffffff30',
  cta__button_hover__color: '#000',
  cta__button__border: '#000',

  cards__border: '#e6e6e6',
  cards__background: '#fff',
  cards__em__background: '#ff6a00',
  cards__em__color: '#fff',

  post__title__color: '#ff5c3a',
  post__title_em__color: '#ffffff',
  post__title_em__background: '#dedede',

  global__text_with_background__background: '#f55e47',
  global__text_with_background__color: '#fff',
  global__panel__background: '#ececec',
  global__panel__color: '#3d2c29',
  global__panel_hover__background: '#989898',
  global__panel_hover__color: '#fff',

  text: '#3d2c29',
  heading: '#907d79',
  primary: '#907d79',

  modes: {
    dark: {
      header__div__background: 'linear-gradient(to right,#7984b7,#111e31)',

      cta__div__background: '#000',
      cta__title__color: '#c969dc',
      cta__em__background: '#ffed70',
      cta__em__color: '#000000',
      cta__button__background: '#ffffff30',
      cta__button__color: '#fff',
      cta__button_hover__background: '#ff9191',
      cta__button_hover__color: '#fff',
      cta__button__border: '#ffffff30',

      cards__border: '#fff',
      cards__background: '#000',
      cards__em__background: '#c969dc',
      cards__em__color: '#fff',

      post__title__color: '#c1a2ff',
      post__title_em__color: '#000000',
      post__title_em__background: '#8776b1',

      global__text_with_background__background: '#7e5786',
      global__text_with_background__color: '#fff',
      global__panel__background: '#191919',
      global__panel__color: '#989898',
      global__panel_hover__background: '#616161',
      global__panel_hover__color: '#989898',

      text: '#F0F5FA',
      heading: '#d9d7dc',
      background: '#222639',
      primary: '#c1bdca',
      secondary: '#EE99FF',
      muted: '#00000033',
      highlight: '#5F527A',
      gray: '#6699CC',
      purple: '#EE99FF',
    },
    tosh: {
      header__div__background: 'linear-gradient(to right,#d0d7e0,#bcc5d0)',

      cta__div__background: '#c8cfd8',
      cta__title__color: '#737373',
      cta__em__background: '#c7d0dc',
      cta__em__color: '#000000',
      cta__button__background: '#ffffff30',
      cta__button__color: '#666',
      cta__button_hover__background: '#ffdf00',
      cta__button_hover__color: '#fff',

      cards__border: '#dcdcdc',
      cards__background: '#ececec',
      cards__em__background: '#c7d0dc',
      cards__em__color: '#000',

      post__title__color: '#a0a0a0',
      post__title_em__color: '#ffffff',
      post__title_em__background: '#b5b5b5',

      global__text_with_background__background: '#9f9f9f',
      global__text_with_background__color: '#fff',
      global__panel__background: '#ececec',
      global__panel__color: '#3d2c29',
      global__panel_hover__background: '#989898',
      global__panel_hover__color: '#fff',

      text: '#000',
      heading: '#7b7b7b',
      background: '#fff',
      primary: '#909090',
      secondary: '#3f3f3f',
      muted: '#e0e0e0',
      highlight: '#9f9f9f',
      gray: '#6c6c6c',
      accent: '#3f3f3f',
    },
    roboto: {
      header__div__background: 'linear-gradient(to right,#ffffff9e,#e8e8e8)',

      cta__div__background: '#f1f1f1',
      cta__title__color: '#8fc7e6',
      cta__em__background: '#ffed6b',
      cta__em__color: '#000000',
      cta__button__background: '#ffffff30',
      cta__button__color: '#666',
      cta__button_hover__background: '#ffed6b',
      cta__button_hover__color: '#666',
      cta__button__border: '#eaeaea',

      cards__border: '#ececec',
      cards__background: '#fff',
      cards__em__background: '#f1f1f1',
      cards__em__color: '#000',

      post__title__color: '#1056b3',
      post__title_em__color: '#a8dbff',
      post__title_em__background: '#fff',

      global__text_with_background__background: '#1a73e8',
      global__text_with_background__color: '#fff',
      global__panel__background: '#eff5f7',
      global__panel__color: '#3d2c29',
      global__panel_hover__background: '#609ae6',
      global__panel_hover__color: '#fff',

      text: '#202124',
      heading: '#56616f',
      background: '#fff',
      primary: '#6292bb',
      secondary: '#547a9a',
      muted: '#f1f3f4',
    },
  },
}

export const modes = ['light', 'dark', 'tosh', 'roboto']
