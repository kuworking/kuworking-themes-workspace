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
    lineHeight: '1.3',
  },

  a: {
    color: 'link',
    fontWeight: '700',
    textDecoration: 'none',
    transition: 'all 0.2s ease',
    '&:hover': {
      color: 'linkOver',
    },
  },

  h1: {
    ...headers,
    fontSize: [4, 5, 6],
    lineHeight: '1',
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
  input: {
    fontFamily: 'inherit',
  },
}
