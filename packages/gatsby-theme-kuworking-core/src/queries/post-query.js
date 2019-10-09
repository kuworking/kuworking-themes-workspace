import { graphql } from 'gatsby'
import PostPage from '../templates/post-template'

export default PostPage

export const query = graphql`
  query PostPageQuery($id: String!, $previousId: String, $nextId: String) {
    current: blogPost(id: { eq: $id }) {
      id
      excerpt
      body
      slug
      title
      body
      keywords
      date(formatString: "MMMM DD, YYYY")
      tags
      type
      snippet
      abstract
      ... on MdxBlogPost {
        parent {
          ... on Mdx {
            timeToRead
            wordCount {
              words
            }
          }
        }
      }
    }
    previous: blogPost(id: { eq: $previousId }) {
      id
      excerpt
      slug
      title
      date(formatString: "MMMM DD, YYYY")
    }
    next: blogPost(id: { eq: $nextId }) {
      id
      excerpt
      slug
      title
      date(formatString: "MMMM DD, YYYY")
    }
    allPosts: allBlogPost {
      edges {
        node {
          id
          excerpt
          body
          slug
          title
          keywords
          date(formatString: "MMMM DD, YYYY")
          tags
          type
          snippet
          abstract
        }
      }
    }
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
    post_comments: allFile(filter: { sourceInstanceName: { regex: "/content/.*/comments/" } }) {
      edges {
        node {
          relativeDirectory
          publicURL
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
    post_types: allFile(filter: { sourceInstanceName: { regex: "/content/.*/types/" } }) {
      edges {
        node {
          publicURL
          name
        }
      }
    }
  }
`
