export const feeds = {
  serialize: ({ query: { site, allMdxBlogPost } }) => {
    return allMdxBlogPost.edges
      .filter(edge => (!/^\/curso-.*\//.test(edge.node.slug) ? true : false))
      .map(edge => {
        return Object.assign({}, edge.node, {
          title: edge.node.title.replace(/#/g, ''),
          description: edge.node.snippet,
          date: new Date(edge.node.date).toString(),
          url: site.siteMetadata.siteUrl + edge.node.slug,
          guid: site.siteMetadata.siteUrl + edge.node.slug,
          //                  custom_elements: [{ 'content:encoded': edge.node.html }],
        })
      })
  },
  query: `
      {
        allMdxBlogPost(
          sort: { order: DESC, fields: [date] },
        ) {
          edges {
            node {
              snippet
              date
              slug
              title
            }
          }
        }
      }
    `,
  output: '/rss.xml',
  title: 'KUWorking RSS Feed',
}
