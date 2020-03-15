import React from 'react'
import { Helmet } from 'react-helmet'

import { Config, SeoText } from '../../utils/config'

export const SEO = ({ blogGrid, schemaType = 'WebPage', itemList = [], wholeSchema = null, extra = null }) => {
  const { canonical } = blogGrid

  const title = SeoText.grid.title.replace(/#/g, '')
  const description = SeoText.grid.description.replace(/#/g, '')
  const keywords = [...SeoText.generic_keywords]
  const canonical_url = canonical || Config.url
  const robots = 'index, follow'
  const content_type_og = 'website'

  const schemaOrgJSONLD = wholeSchema || [
    {
      '@context': 'http://schema.org',
      '@type': schemaType,
      url: canonical_url,
      name: title,
      headline: title,
      description: description,
      //      image: image,
      sameAs: Object.values(Config.social),
      author: {
        '@type': 'Person',
        name: Config.user,
      },
      publisher: {
        '@type': 'Organization',
        name: Config.user,
      },
      mainEntityOfPage: {
        '@type': 'WebSite',
        '@id': canonical_url,
      },
      itemListElement: itemList,
    },
  ]

  return (
    <Helmet defer={false}>
      <html lang={Config.site_lang} />
      <title>{title}</title>

      {/* Canonical */}
      <link rel="canonical" href={canonical_url} key={canonical_url} />

      {/* General tags */}
      <meta name="viewport" content={'width=device-width, initial-scale=1'} />
      <meta charset="utf-8" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.length > 0 ? keywords.join(`, `) : ''} />
      <meta name="robots" content={robots} />

      {/* Extra tags */}
      {extra && <meta {...extra} />}

      {/* Schema.org tags */}
      <script type="application/ld+json">{JSON.stringify(schemaOrgJSONLD)}</script>

      {/* OpenGraph tags */}
      <meta name="og:site_name " content={Config.user} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta name="og:type" content={content_type_og} />
      {/* <meta name="og:image" content={image} /> */}
      <meta name="og:url" content={canonical_url} />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={Config.social.twitter} />
      <meta name="twitter:site" content={Config.social.twitter} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:domain" content={canonical_url} />
      {/* <meta name="twitter:image" content={image} /> */}
    </Helmet>
  )
}
