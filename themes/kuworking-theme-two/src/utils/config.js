import React from 'react'

export const seoText = {
  generic_keywords: [`kuworking themes`],
  grid: {
    title: 'kuworking themes',
    description: 'kuworking themes',
  },
  grid_tags: {
    title: 'kuworking themes | ',
    description: 'kuworking themes | ',
  },
  post: {
    before: '',
    after: '',
  },
}

export const config = {
  site_lang: `es`,
  url: 'https://www.kuworking.com',
  user: 'kuworking',
  social: {
    twitter: '@kuworking',
    facebook: 'https://www.facebook.com/kuworkingJS/',
  },
}

export const text = {
  post: {
    words: 'palabras',
    minutes: 'minutos',
    date_language: 'es',
    related_posts: 'Quizá te interese',
  },
  header: {
    site: 'kuworking',
    logo: 'KW',
  },
  footer: {
    me: 'Quién soy',
    credits: 'by kuworking.com',
    credits_url: 'https://www.kuworking.com',
    // prettier-ignore
    date: () => <>[ {new Date().getFullYear()} >> kuworking ]</>,
    cookies: () => <>Te informo que utilizo cookies para mejorar la usabilidad del website</>,
    cookies_agree: 'Ok',
  },
  notFound: {
    title: 'Página no encontrada',
    description: 'No encuentro lo que buscas!',
    keywords: [`kuworking.com`],
    mainPage: 'Mira a ver en la página principal',
  },
}
