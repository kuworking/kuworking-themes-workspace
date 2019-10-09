import { useStaticQuery, graphql } from 'gatsby'

export const useQuery = () =>
  useStaticQuery(graphql`
    query PageQuery {
      post_images: allFile(filter: { sourceInstanceName: { regex: "/content/.*/images/" } }) {
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
      wallpapers: allFile(filter: { sourceInstanceName: { eq: "content/assets/wallpapers" } }) {
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
    }
  `)
