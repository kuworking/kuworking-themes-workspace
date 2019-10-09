const path = require('path')

module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-kuworking-blog`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: path.resolve(__dirname, `content/pages`),
      },
    },
  ],
}
