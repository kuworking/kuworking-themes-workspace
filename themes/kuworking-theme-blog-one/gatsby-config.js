const app = require(`./src/utils/app`)
const tagmanager = require(`./src/utils/tagmanager`)
const sitemap = require(`./src/utils/sitemap`)

module.exports = {
  siteMetadata: {
    // configured by user
    title: app.title,
    description: app.description,
    siteUrl: app.siteUrl,
    site: app.site,
  },
  plugins: [
    {
      resolve: `gatsby-theme-kuworking-blog`,
      options: {
        // configured by user
        postsPerPage: app.postsPerPage || 50,
        app,
        tagmanager,
        sitemap,

        // not really meant to be modified
        mdx: true,
        basePath: app.basePath || '/',
        postsPath: app.postsPath || 'content/posts',
        postImagesPath: app.postImagesPath || 'content/posts/images',
        iconsPath: app.iconsPath || 'content/icons',
        wallpapersPath: app.wallpapersPath || 'content/wallpapers',
        pagesPath: app.pagesPath || 'content/pages',
        tagsPath: app.tagsPath || 'tags',
      },
    },
  ],
}
