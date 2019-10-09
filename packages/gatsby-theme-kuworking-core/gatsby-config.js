const withDefaults = require(`./utils/default-options`)

module.exports = themeOptions => {
  const options = withDefaults(themeOptions)
  const { mdx } = options
  return {
    plugins: [
      mdx && {
        resolve: `gatsby-plugin-mdx`,
        options: {
          extensions: [`.mdx`, `.md`],
          gatsbyRemarkPlugins: [
            //            {
            //              resolve: `gatsby-remark-images`,
            //              options: {
            // should this be configurable by the end-user?
            //                maxWidth: 1380,
            //                linkImagesToOriginal: false,
            //              },
            //            },
            { resolve: `gatsby-remark-copy-linked-files` },
            //            { resolve: `gatsby-remark-smartypants` },
          ],
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
          path: options.contentImagesPath || `content/posts/types`,
          name: options.contentImagesPath || `content/posts/types`,
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: options.contentCommentsPath || `content/posts/comments`,
          name: options.contentCommentsPath || `content/posts/comments`,
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
          path: options.recipesImagesPath || `content/recipes/images`,
          name: options.recipesImagesPath || `content/recipes/images`,
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: options.recipesCommentsPath || `content/recipes/comments`,
          name: options.recipesCommentsPath || `content/recipes/comments`,
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: options.recipesPath || `content/recipes`,
          name: options.recipesPath || `content/recipes`,
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

      `gatsby-plugin-styled-components`,
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
    ].filter(Boolean),
  }
}
