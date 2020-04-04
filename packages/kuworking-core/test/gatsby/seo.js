import React from 'react'
import { Helmet } from 'react-helmet'

export const SEO = ({
  config,
  seotext,
  type,
  schemaType = 'WebPage',
  itemList = [],
  mainEntityOfPage,
  fb_app_id = null,
  wholeSchema = null,
  blogGrid,
  blogPost,
  blogPage,
  extra = null,
}) => {
  const { thePath } = blogGrid || blogPost || blogPage

  const canonical = config.url + thePath

  const { page, image: imagePage } = blogPage || ''
  const { tags, image: imageGrid } = blogGrid || ''
  const { post, image: imagePost } = blogPost || ''

  const title = (
    (page && page.title) ||
    (post && seotext.post.before + post.title + seotext.post.after) ||
    (tags && tags.tags_grid && seotext.grid_tags.title + tags.tag) ||
    seotext.grid.title
  ).replace(/#/g, '')

  const description = (
    (page && page.description) ||
    (post && post.description) ||
    (tags && tags.tags_grid && seotext.grid_tags.description + tags.tag) ||
    seotext.grid.description
  ).replace(/#/g, '')

  const keywords = (page && page.keywords) ||
    (post && [...seotext.generic_keywords, ...post.tags.map(el => el.replace(/_/g, ' '))]) ||
    (tags && tags.tags_grid && [...seotext.generic_keywords, tags.tag]) || [...seotext.generic_keywords]

  // const image = (post && (config.url + post.full_image).replace(/(?<!:)\/\//, '/')) || '' // negative lookbehing is only Chrome-supported as today
  const image = (page && imagePage) || (post && imagePost) || (imageGrid && imageGrid) || '' // alternative

  const robots = (page && page.robots) || 'index, follow'

  const content_type_og = type === 'mdx' ? 'article' : type === 'page' ? 'website' : 'website'

  const schemaOrgJSONLD = wholeSchema || [
    {
      '@context': 'https://schema.org',
      '@type': schemaType,
      url: canonical,
      name: title,
      headline: title,
      description: description,
      image: image,
      sameAs: Object.values(config.social),
      author: {
        '@type': 'Person',
        name: config.user,
      },
      publisher: {
        '@type': 'Organization',
        name: config.user,
      },
      mainEntityOfPage: {
        ...mainEntityOfPage,
        '@id': canonical,
      },
      itemListElement: itemList,
    },
  ]

  const fb = fb_app_id ? <meta property="fb:app_id" content={fb_app_id} /> : ''

  return (
    <Helmet defer={false}>
      <html lang={config.site_lang} />
      <title>{title}</title>

      {/* Canonical */}
      <link rel="canonical" href={canonical} key={canonical} />

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
      <meta property="og:site_name " content={config.user} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={content_type_og} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={canonical} />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={config.social.twitter} />
      <meta name="twitter:site" content={config.social.twitter} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:domain" content={canonical} />
      <meta name="twitter:image" content={image} />

      {/* FB app id */}
      {fb}
    </Helmet>
  )
}
