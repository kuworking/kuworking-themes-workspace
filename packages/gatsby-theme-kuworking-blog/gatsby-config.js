const withDefaults = require(`./utils/default-options`)

module.exports = themeOptions => {
  const options = withDefaults(themeOptions)

  return {
    plugins: [
      {
        resolve: `gatsby-theme-kuworking-core`,
        options: {
          ...options,
        },
      },
    ],
  }
}
