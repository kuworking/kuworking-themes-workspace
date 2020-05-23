const headers = {
  fontFamily: 'standard',
  fontWeight: '700',
  margin: 0,
  lineHeight: '1.125',
}

export const elements = {
  em: {
    color: 'em_color',
    backgroundColor: 'em_background',
    fontStyle: 'normal',
    padding: '1px 4px',
    borderRadius: '2px',
  },

  p: {
    color: 'text',
    lineHeight: '1.125',
  },

  a: {
    color: 'link',
    fontWeight: '400',
    textDecoration: 'none',
    transition: 'all 0.2s ease',
    '&:hover': {
      color: 'linkOver',
    },
  },

  h1: {
    ...headers,
    fontSize: [5, 6, 7],
    lineHeight: '1',
  },
  h2: {
    ...headers,
    fontSize: [4, 5, 6],
  },
  h3: {
    ...headers,
    fontSize: [4, 5, 6],
  },
  h4: {
    ...headers,
    fontSize: [4, 5, 6],
  },

  input: {
    fontFamily: 'inherit',
  },
}
