const withDefaults = require(`./utils/default-options`)

module.exports = themeOptions => {
  const options = withDefaults(themeOptions)
  return {
    siteMetadata: {
      title: options.title,
      description: options.description,
      siteUrl: options.siteUrl,
    },
    plugins: [
      options.mdx && {
        resolve: `gatsby-plugin-mdx`,
        options: {
          extensions: [`.mdx`, `.md`],
          gatsbyRemarkPlugins: [{ resolve: `gatsby-remark-copy-linked-files` }],
          remarkPlugins: [require(`remark-slug`)],
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: `content/core`,
          name: `content/core`,
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: options.postImagesPath || `content/posts/images`,
          name: options.postImagesPath || `content/posts/images`,
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: options.postsPath || `content/posts`,
          name: options.postsPath || `content/posts`,
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: options.wallpapersPath || `content/wallpapers`,
          name: options.wallpapersPath || `content/wallpapers`,
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: options.iconsPath || `content/icons`,
          name: options.iconsPath || `content/icons`,
        },
      },
      {
        resolve: `gatsby-plugin-page-creator`,
        options: {
          path: options.pagesPath || `content/pages`,
        },
      },
      {
        resolve: `gatsby-plugin-disqus`,
        options: {
          shortname: options.disqusShortname || '',
        },
      },
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-robots-txt`,
      options.feed && {
        resolve: `gatsby-plugin-feed`,
        options: options.feed,
      },
      options.sitemap && {
        resolve: `gatsby-plugin-sitemap`,
        options: {
          exclude: options.sitemap,
        },
      },
      options.tagmanager && {
        resolve: `gatsby-plugin-google-tagmanager`,
        options: {
          id: options.tagmanager,
          includeInDevelopment: false,
        },
      },
      options.manifest && {
        resolve: `gatsby-plugin-manifest`,
        options: options.manifest,
      },
      `gatsby-plugin-offline`,
      `gatsby-plugin-theme-ui`,
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
    ].filter(Boolean),
  }
}
