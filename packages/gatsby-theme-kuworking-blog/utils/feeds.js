module.exports = site => {
  return {
    serialize: ({ query: { posts, post_images } }) => {
      const get_image = (images, name) => images.filter(el => el.node.name === name)[0]

      return posts.edges.map(edge =>
        Object.assign({}, edge.node, {
          title: edge.node.title.replace(/#/g, ''),
          description: edge.node.snippet,
          date: new Date(edge.node.date).toString(),
          url: site.siteUrl + edge.node.slug,
          enclosure: {
            type: 'image/jpeg',
            url:
              site.siteUrl +
              get_image(post_images.edges, edge.node.slug.replace(/\/$/, '').replace(/\/.*\//g, '')).node.publicURL,
          },
          // custom_elements: [{ 'content:encoded': edge.node.html }],
        })
      )
    },
    query: `
      {
        posts: allMdxBlogPost(
          sort: { order: DESC, fields: [date] },
        ) {
          edges {
            node {
              slug
              title
              date(formatString: "MMMM DD, YYYY")
              snippet
            }
          }
        }
        post_images: allFile(filter: { sourceInstanceName: { eq: "content/posts/images" } }) {
          edges {
            node {
              publicURL
              name
            }
          }
        }
      }
    `,
    output: '/rss.xml',
    title: site.site + ' RSS Feed',
  }
}
