const general = {
  color: 'text',
  lineHeight: 1.125,
  fontStyle: 'normal',
}

const code = {
  display: 'inline-block',
  color: 'code_color',
  backgroundColor: 'code_background',
  fontWeight: '700',
}

const headers = {
  ...general,
  fontFamily: 'standard',
  fontWeight: '700',
  margin: 0,
  code: { ...code },
}

export const components = {
  buttonBlue: {
    cursor: 'pointer',
    outline: 0,
    textDecoration: 'none',
    borderRadius: '8px',
    padding: '5px',
    color: '#fff !important',
    fontWeight: '700',

    transition: 'background 0.2s ease-in, box-shadow 0.2s ease-in',
    background: '#4ba7de',
    boxShadow: '0px 0px 0px #000',
    '&:hover': {
      background: '#ff6a00',
      boxShadow: '0px 4px 0px #000',
    },
  },
}

export const elements = {
  em: {
    color: 'em_color',
    backgroundColor: 'em_background',
    fontStyle: 'normal',
    padding: '1px 4px',
    borderRadius: '2px',
  },

  em2: {
    color: 'em2_color',
    background: 'unset',
    fontStyle: 'normal',
    padding: '1px 4px',
    borderRadius: '2px',
  },

  b: {
    fontWeight: '700',
  },

  code: {
    fontFamily: 'monospace',
    fontWeight: '400',
    fontSize: 'inherit',
    borderRadius: '3px',
    padding: '2px 5px',
    wordBreak: 'break-all',
  },

  pre: {
    code: {
      borderRadius: '8px',
      padding: '1em',
      fontSize: [0, 1, 2],
    },
  },

  p: {
    color: 'text',
    fontSize: [2, 2, 3],
    lineHeight: '1.3',
    code: { ...code },
  },

  a: {
    cursor: 'pointer',
    color: 'link',
    fontWeight: '700',
    textDecoration: 'none',
    transition: 'all 0.2s ease',
    '&:hover': {
      color: 'linkOver',
    },
  },

  a2: {
    cursor: 'pointer',
    color: 'link2',
    fontWeight: '700',
    textDecoration: 'none',
    transition: 'all 0.2s ease',
    '&:hover': {
      color: 'linkOver2',
    },
  },

  h1: {
    ...headers,
    fontSize: [4, 5, 6],
  },
  h2: {
    ...headers,
    fontSize: [2, 4, 5],
  },
  h3: {
    ...headers,
    fontSize: [2, 3, 4],
  },
  h4: {
    ...headers,
    fontSize: [1, 2, 3],
  },

  blockquote: {
    margin: '10px 0px',
    backgroundColor: 'blockquote_background',
    fontSize: '1.2em',
    padding: '10px 20px',
    borderRadius: '8px',
    //    code: { ...code },
    em: {
      color: '#ff6a00',
      backgroundColor: '#ffffff',
      fontWeight: '700',
      fontStyle: 'normal',
      padding: '1px 4px',
      borderRadius: '2px',
    },
    code: { ...code },
    //    a: { ...a },
  },
  ol: {
    fontSize: [2, 2, 3],
    code: { ...code },
  },
  ul: {
    fontSize: [2, 2, 3],
    code: { ...code },
  },
  input: {
    fontFamily: 'inherit',
  },
  img: {
    maxWidth: '100%',
  },
}
