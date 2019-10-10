const withDefaults = require(`./utils/default-options`)

module.exports = themeOptions => {
  const options = withDefaults(themeOptions)
  return {
    siteMetadata: {
      title: 'KUWorking.com',
      description: 'Cursos online para emprender digitalmente',
      siteUrl: 'https://www.kuworking.com',
    },
    plugins: [
      {
        resolve: `gatsby-theme-kuworking-core`,
        options: {
          postsPerPage: 20,
          mdx: true,
          tagsPath: 'tags',
        },
      },
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-robots-txt`,
      options.feed && {
        resolve: `gatsby-plugin-feed`,
        options: options.feed_options,
      },
      {
        resolve: `gatsby-plugin-sitemap`,
        options: {
          exclude: ['/tags/*', '/proteccion_de_datos', '/dummy'],
        },
      },
      {
        resolve: `gatsby-plugin-google-tagmanager`,
        options: {
          id: 'GTM-WD3ZK2J',
          includeInDevelopment: false,
        },
      },
      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: `www.kuworking.com`,
          short_name: `KUWorking`,
          start_url: `/`,
          background_color: '#ffffff',
          theme_color: '#000000',
          display: `minimal-ui`,
          icon: `content/assets/favicon.png`,
          include_favicon: true, // Include favicon
        },
      },
      `gatsby-plugin-offline`,
    ],
  }
}
