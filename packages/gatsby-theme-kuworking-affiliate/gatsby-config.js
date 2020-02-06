const withDefaults = require(`./utils/default-options`)

module.exports = themeOptions => {
  const options = withDefaults(themeOptions)

  const ifStandAlone = (options.standalone && [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-robots-txt`,
    options.siteMapExclude && {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: options.siteMapExclude,
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
  ]) || [{ website: { basePath: options.basePath } }]

  return {
    siteMetadata: themeOptions ? themeOptions.metaData : info.metaData,
    plugins: [
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: options.jsonPath || `content/json`,
          name: options.jsonPath || `content/json`,
        },
      },
      `gatsby-plugin-emotion`,
      `gatsby-plugin-theme-ui`,
      `gatsby-transformer-sharp`, // without it, site breaks
      `gatsby-plugin-sharp`, // without it, site breaks
      ...ifStandAlone,
    ].filter(Boolean),
  }
}
