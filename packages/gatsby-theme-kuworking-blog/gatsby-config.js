module.exports = options => {
  return {
    plugins: [
      {
        resolve: `gatsby-theme-kuworking-core`,
        options: {
          postsPerPage: 50,
          mdx: true,
          disqusShortname: '',

          basePath: '/',
          postsPath: 'content/posts',
          postImagesPath: 'content/posts/images',
          iconsPath: 'content/icons',
          wallpapersPath: 'content/wallpapers',
          pagesPath: 'content/pages',
          tagsPath: 'tags',

          title: 'Gatsby Theme Kuworking Blog',
          description: 'Gatsby Theme Kuworking Blog',
          siteUrl: 'https://www.kuworking.com',
        },
      },
    ],
  }
}
