import React from 'react'
import { Helmet } from 'react-helmet'

import { Config } from '../config'

export const SEO = ({ robots, canonical, title, description, keywords, type }) => {
  const canonical_url = canonical ? canonical : Config.url
  const content_type_og = type === 'mdx' ? 'article' : type === 'page' ? 'website' : 'website'
  const content_type_schema = type === 'mdx' ? 'BlogPosting' : type === 'page' ? 'WebSite' : 'WebSite'

  // to remove # characters used in some blogs to format title
  title = title.replace(/#/g, '')
  description = description.replace(/#/g, '')

  const schemaOrgJSONLD = [
    {
      '@context': 'http://schema.org',
      '@type': content_type_schema,
      url: Config.url,
      name: title,
      headline: title,
      description: description,
      image: '/DATA_MARKUP_IMAGE.jpg',
      author: {
        '@type': 'Person',
        name: Config.user,
      },
      publisher: {
        '@type': 'Organization',
        url: Config.url,
        name: Config.user,
        sameAs: Config.social,
      },
      mainEntityOfPage: {
        '@type': 'WebSite',
        '@id': Config.url,
      },
    },
  ]

  return (
    <Helmet>
      <html lang={Config.seo.site_lang} />
      <title>{title}</title>

      {/* Canonical */}
      <link rel="canonical" href={canonical_url} key={canonical_url} />

      {/* General tags */}
      <meta name="viewport" content={'width=device-width, initial-scale=1'} />
      <meta charset="utf-8" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.length > 0 ? keywords.join(`, `) : ''} />
      <meta name="robots" content={robots} />

      {/* Schema.org tags */}
      <script type="application/ld+json">{JSON.stringify(schemaOrgJSONLD)}</script>

      {/* OpenGraph tags */}
      <meta name="og:site_name " content={Config.user} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta name="og:type" content={content_type_og} />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={Config.seo.site_author} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  )
}
