import { graphql } from 'gatsby'
import PostPage from '../templates/post-template'

export default PostPage

export const query = graphql`
  query PostPageQuery($id: String!, $previousId: String, $nextId: String) {
    current: mdxBlogPost(id: { eq: $id }) {
      id
      slug
      title
      date(formatString: "MMMM DD, YYYY")
      tags
      snippet
      abstract
      type
      ... on MdxBlogPost {
        parent {
          ... on Mdx {
            body
            timeToRead
            wordCount {
              words
            }
          }
        }
      }
    }
    previous: mdxBlogPost(id: { eq: $previousId }) {
      id
      slug
      title
      type
      date(formatString: "MMMM DD, YYYY")
    }
    next: mdxBlogPost(id: { eq: $nextId }) {
      id
      slug
      title
      type
      date(formatString: "MMMM DD, YYYY")
    }
    allPosts: allMdxBlogPost {
      edges {
        node {
          id
          slug
          title
          date(formatString: "MMMM DD, YYYY")
          tags
          snippet
          abstract
          type
          ... on MdxBlogPost {
            parent {
              ... on Mdx {
                body
                timeToRead
                wordCount {
                  words
                }
              }
            }
          }
        }
      }
    }
    post_images: allFile(filter: { sourceInstanceName: { eq: "content/posts/images" } }) {
      edges {
        node {
          publicURL
          name
          relativeDirectory
          childImageSharp {
            fluid(maxWidth: 1000, quality: 92) {
              originalName
              src
              ...GatsbyImageSharpFluid_noBase64
            }
            fixed(width: 400, quality: 50) {
              originalName
              src
              ...GatsbyImageSharpFixed_noBase64
            }
          }
        }
      }
    }
    wallpapers: allFile(filter: { sourceInstanceName: { eq: "content/wallpapers" } }) {
      edges {
        node {
          publicURL
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
          publicURL
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
`
