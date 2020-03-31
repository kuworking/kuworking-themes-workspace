module.exports = site => {
  return {
    serialize: ({ query: { posts, post_images } }) => {
      const get_image = (images, name) => images.filter(el => el.node.name === name)[0]
      const get_last_slug = str =>
        str &&
        str
          .replace(/\/.*\//g, '')
          .replace(/^\//, '')
          .replace(/\/$/, '')

      return posts.edges.map(edge => {
        const image = get_image(post_images.edges, get_last_slug(edge.node.slug))
        const url = image ? image.node.publicURL : '/global/image.jpg'
        return Object.assign({}, edge.node, {
          title: edge.node.title.replace(/#/g, ''),
          description: edge.node.snippet,
          date: new Date(edge.node.date).toString(),
          url: site.siteUrl + edge.node.slug,
          enclosure: {
            type: 'image/jpeg',
            url: site.siteUrl + url,
          },
          // custom_elements: [{ 'content:encoded': edge.node.html }],
        })
      })
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
        post_images: allFile(filter: { sourceInstanceName: { regex: "/content/.*/images/" } }) {
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
