import React from 'react'

export const SeoText = {
  generic_keywords: ['kuworking', 'gatsby', 'javascript'],
  grid: {
    title: 'kuworking.com | ',
    description: 'learn frontend development',
  },
  grid_tags: {
    title: 'kuworking.com | tag | ',
    description: 'List of posts with this tag | ',
  },
  post: {
    before: '',
    after: ' | kuworking.com',
  },
}

export const Config = {
  site_lang: `en`,
  url: 'https://www.kuworking.com',
  user: 'kuworking',
  social: {
    twitter: '@kuworking',
  },
  disqus: 'kuworking',
  disqus_url: 'https://www.kuworking.com',
  mail_chimp_action: '',
}

export const Text = {
  post: {
    words: 'words',
    minutes: 'minutes',
    date_language: 'us',
    related_posts: 'You might be interested',
    comments: 'Click and drop a comment',
  },
  header: {
    site: 'kuworking THEME TWO',
    logo: 'KW',
  },
  cta: {
    title: 'Call To Action!',
    // prettier-ignore
    message: () => <>Suscribe to my mailing list with your <em>email</em></>,
    suscribe: 'Join',
    error: 'mail address is wrong',
  },
  footer: {
    me: 'Who Am I',
    credits: 'by kuworking.com',
    credits_url: 'https://www.kuworking.com',
    // prettier-ignore
    date: () => <>[ 2018 - {new Date().getFullYear()} - kuworking ]</>,
    cookies: () => <>Notice that we use cookies to improve the usability of this site</>,
    cookies_agree: 'Ok',
  },
  pagination: {
    next: 'Next',
    previous: 'Previous',
  },
  notFound: {
    title: 'Page not found',
    description: 'I cannot find the page you are looking for!',
    keywords: [`kuworking.com`],
    mainPage: 'Go to main page',
  },
}
