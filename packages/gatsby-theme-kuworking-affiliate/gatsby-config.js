const withDefaults = require(`./utils/default-options`)

module.exports = themeOptions => {
  const options = withDefaults(themeOptions)

  const ifStandAlone =
    (options.standalone && [
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-robots-txt`,
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
      `gatsby-plugin-emotion`,
      `gatsby-plugin-theme-ui`,
      `gatsby-transformer-sharp`, // without it, site breaks
      `gatsby-plugin-sharp`, // without it, site breaks
    ]) ||
    []

  return {
    plugins: [
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: options.jsonPath || `content/json`,
          name: options.jsonPath || `content/json`,
        },
      },
      ...ifStandAlone,
    ].filter(Boolean),
  }
}
