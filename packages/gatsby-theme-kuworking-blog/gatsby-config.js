module.exports = options => {
  return {
    plugins: [
      {
        resolve: `gatsby-theme-kuworking-core`,
        options: {
          postsPerPage: 20,
          mdx: true,
          tagsPath: 'tags',
          title: 'KUWorking.com',
          description: 'Cursos online para emprender digitalmente',
          siteUrl: 'https://www.kuworking.com',
        },
      },
    ],
  }
}
