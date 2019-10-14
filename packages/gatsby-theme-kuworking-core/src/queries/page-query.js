import { useStaticQuery, graphql } from 'gatsby'

export const useQuery = () =>
  useStaticQuery(graphql`
    query PageQuery {
      post_images: allFile(filter: { sourceInstanceName: { eq: "/content/posts/images/" } }) {
        edges {
          node {
            relativeDirectory
            childImageSharp {
              fluid(maxWidth: 1000, quality: 92) {
                originalName
                src
                ...GatsbyImageSharpFluid_noBase64
              }
            }
          }
        }
      }
      wallpapers: allFile(filter: { sourceInstanceName: { eq: "content/wallpapers" } }) {
        edges {
          node {
            relativeDirectory
            childImageSharp {
              fluid(maxWidth: 5000) {
                originalName
                src
                ...GatsbyImageSharpFluid_noBase64
              }
            }
          }
        }
      }
      core: allFile(filter: { sourceInstanceName: { eq: "content/core" } }) {
        edges {
          node {
            relativeDirectory
            childImageSharp {
              fluid(maxWidth: 1000, quality: 92) {
                originalName
                src
                ...GatsbyImageSharpFluid_noBase64
              }
            }
          }
        }
      }
    }
  `)
