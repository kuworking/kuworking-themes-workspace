const info = require(`./src/utils/info`)

module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-kuworking-two`,
      options: {
        info,
      },
    },
  ],
}
