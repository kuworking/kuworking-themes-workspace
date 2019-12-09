const em = {
  fontStyle: 'normal',
  color: 'em_color',
  backgroundColor: 'em_background',
  padding: '1px 4px',
  borderRadius: '2px',
  transition: 'all 0.5s ease-in',
}

const code = {
  fontFamily: 'monospace',
  fontWeight: '700',
  fontSize: 'inherit',
  color: 'code_color',
  backgroundColor: 'code_background',
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

const cta = {
  ...general,
  fontFamily: 'cta',
  margin: '0',
}

// root as a way to access afterwards, but has no effect
const h = prp => ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'a', 'p', 'root'].reduce((obj, el) => ({ ...obj, [el]: prp }), {})

export const styles = {
  breakpoints: ['400px', '600px'],
  fontSizes: [12, 14, 15, 17, 20, 24, 32, 48, 64, 72],
  fonts: {
    title: 'Kulim Park, sans-serif',
    post: 'Kulim Park, sans-serif',
    body: 'Kulim Park, sans-serif',
    cta: 'Kulim Park, sans-serif',
    headers: 'Kulim Park, sans-serif',
    monospace: 'monospace',
  },
  post: {
    h1: {
      ...general,
      fontFamily: 'title',
      lineHeight: '1',
      margin: '150px 0px 10px 0px',
      fontSize: [6, 6, 7],
    },
    p: {
      fontSize: [2, 3, 4],
    },
  },
  cta: {
    ...h({
      ...cta,
    }),
    h1: {
      ...cta,
      fontSize: [4, 4, 5],
      margin: 0,
      fontFamily: 'title',
    },
    h2: {
      ...cta,
      fontSize: [2, 3, 4],
      margin: 0,
    },
    h3: {
      ...cta,
      fontSize: [1, 1, 2],
      margin: 0,
    },
  },
  main: {
    h1: {
      ...general,
      fontSize: [5, 6, 7],
      fontFamily: 'title',
      em: { ...em },
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
      ...general,
      fontSize: [4, 5, 6],
      em: { ...em },
    },
    h2: {
      ...general,
      fontSize: [2, 4, 5],
    },
    h3: {
      ...general,
      fontSize: [2, 3, 4],
    },
    h4: {
      ...general,
      fontSize: [1, 2, 3],
    },
    em: { ...em },
    code: { ...code },
    a: { ...a },
    p: {
      color: 'text',
      fontSize: [3, 3, 4],
      code: {
        ...code,
        fontFamily: 'post',
      }, // inherit doesn't work
    },
    blockquote: {
      margin: '10px 0px',
      backgroundColor: 'blockquote_background',
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
