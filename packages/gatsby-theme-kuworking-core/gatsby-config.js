const withDefaults = require(`./utils/default-options`)

module.exports = themeOptions => {
  const options = withDefaults(themeOptions)
  return {
    plugins: [
      options.mdx && {
        resolve: `gatsby-plugin-mdx`,
        options: {
          extensions: [`.mdx`, `.md`],
          gatsbyRemarkPlugins: [{ resolve: `gatsby-remark-copy-linked-files` }],
          remarkPlugins: [require(`remark-slug`)],
        },
      },
      // order of gatsby-source-filesystem is important!
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: options.contentImagesPath || `content/posts/images`,
          name: options.contentImagesPath || `content/posts/images`,
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: options.contentPath || `content/posts`,
          name: options.contentPath || `content/posts`,
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: options.wallpaperPath || `content/assets/wallpapers`,
          name: options.wallpaperPath || `content/assets/wallpapers`,
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: options.assetPath || `content/assets`,
          name: options.assetPath || `content/assets`,
        },
      },
      {
        resolve: `gatsby-plugin-disqus`,
        options: {
          shortname: options.disqusShortname || '',
        },
      },
      `gatsby-plugin-theme-ui`,
      `gatsby-plugin-styled-components`,
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
    ].filter(Boolean),
  }
}
