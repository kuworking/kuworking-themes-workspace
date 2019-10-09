//const path = require('path')

module.exports = options => {
  return {
    siteMetadata: {
      title: 'KUWorking.com',
      description: 'Cursos online para emprender digitalmente',
      siteUrl: 'https://www.kuworking.com',
    },
    plugins: [
      {
        resolve: `gatsby-theme-kuworking-core`,
        options: {
          postsPerPage: 20,
          mdx: true,
          tagsPath: 'tags',
        },
      },
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-robots-txt`,
      {
        resolve: `gatsby-plugin-feed`,
        options: {
          query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
          feeds: [
            {
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
            },
          ],
        },
      },
      {
        resolve: `gatsby-plugin-sitemap`,
        options: {
          exclude: ['/tags/*', '/proteccion_de_datos', '/dummy'],
        },
      },
      {
        resolve: `gatsby-plugin-google-tagmanager`,
        options: {
          id: 'GTM-WD3ZK2J',
          includeInDevelopment: false,
        },
      },
      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: `www.kuworking.com`,
          short_name: `KUWorking`,
          start_url: `/`,
          background_color: '#ffffff',
          theme_color: '#000000',
          display: `minimal-ui`,
          icon: `content/assets/favicon.png`,
          include_favicon: true, // Include favicon
        },
      },
      `gatsby-plugin-offline`,
    ],
  }
}
