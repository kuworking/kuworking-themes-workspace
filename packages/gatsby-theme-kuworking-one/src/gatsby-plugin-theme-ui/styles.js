const em = {
  fontStyle: 'normal',
  color: 'em__text',
  backgroundColor: 'em__background',
  padding: '1px 4px',
  borderRadius: '2px',
  transition: 'all 0.5s ease-in',
}

const code = {
  fontFamily: 'monospace',
  fontWeight: '700',
  fontSize: 'inherit',
  color: 'code',
  backgroundColor: 'code__background',
  borderRadius: '3px',
  display: 'inline-block',
  padding: '2px 5px',
  transition: 'all 0.5s ease-in',
}

const a = {
  fontWeight: '700',
  color: 'link',
  textDecoration: 'none',
  transition: 'all 0.4s ease',
  '&:hover': {
    color: 'linkOver',
  },
}

const general = {
  lineHeight: 1.125,
  fontWeight: '700',
  color: 'text',
  letterSpacing: '-0.5px',
  transition: 'all 0.5s ease-in',
  em: { ...em },
  a: { ...a },
  input: { fontFamily: 'inherit' },
}

const heading = {
  ...general,
  color: 'heading',
}

// root as a way to access afterwards, but has no effect
const h = prp => ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'a', 'p', 'root'].reduce((obj, el) => ({ ...obj, [el]: prp }), {})

export const styles = {
  breakpoints: ['400px', '600px'],
  fontSizes: [12, 14, 15, 17, 20, 24, 32, 40, 48, 64, 72],
  fonts: {
    title: 'Open Sans, sans-serif',
    post: 'Open Sans, sans-serif',
    body: 'Open Sans, sans-serif',
    monospace: 'monospace',
  },
  cta: {
    h1: {
      ...heading,
      fontFamily: 'title',
      lineHeight: '1',
      margin: '10px 0px 10px 0px',
      fontSize: [7, 8, 8],
      transition: 'all 0.5s ease-in',
    },
    p: {
      fontFamily: 'post',
      fontSize: [2, 3, 4],
      transition: 'all 0.5s ease-in',
    },
    input: {
      fontSize: [2, 3, 4],
    },
    button: {
      fontSize: [2, 3, 4],
    },
  },
  post: {
    h1: {
      ...heading,
      fontFamily: 'title',
      lineHeight: '1',
      margin: '10px 0px 10px 0px',
      fontSize: [7, 8, 8],
      transition: 'all 0.5s ease-in',
    },
    p: {
      fontFamily: 'post',
      fontSize: [2, 3, 4],
      transition: 'all 0.5s ease-in',
    },
  },
  styles: {
    ...h({
      ...general,
    }),
    root: {
      fontFamily: 'body',
      lineHeight: 1.3,
      fontWeight: '400',
      fontSize: [1, 2, 3],
    },
    h1: {
      ...heading,
      fontSize: [5, 6, 7],
      em: { ...em },
    },
    h2: {
      ...heading,
      fontSize: [2, 4, 5],
    },
    h3: {
      ...heading,
      fontSize: [2, 3, 4],
    },
    h4: {
      ...heading,
      fontSize: [2, 2, 3],
    },
    em: { ...em },
    code: { ...code },
    a: { ...a },
    p: {
      color: 'text',
      fontSize: [2, 2, 3],
      em: { ...em },
      code: {
        ...code,
        fontFamily: 'post',
      },
      div: {
        em: { ...em },
      },
      transition: 'all 0.5s ease-in',
    },
    blockquote: {
      margin: '10px 0px',
      backgroundColor: 'blockquote__background',
      fontSize: '1.2em',
      padding: '10px 20px',
      borderRadius: '8px',
      code: { ...code },
      em: {
        ...em,
        color: '#ff6a00',
        backgroundColor: '#ffffff',
        fontWeight: '700',
      },
      a: { ...a },
    },
    ol: {
      a: { ...a },
      code: { ...code },
    },
    ul: {
      a: { ...a },
      code: { ...code },
    },
    pre: {
      code: {
        borderRadius: '8px',
        padding: '1em',
        fontSize: [1, 1, 2],
      },
    },
    img: {
      maxWidth: '100%',
    },
  },
}
