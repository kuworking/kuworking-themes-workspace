import { graphql } from 'gatsby'
import PostsPage from '../templates/posts-template'

export default PostsPage

export const query = graphql`
  query PostsQuery($this_is_a_tag_search: Boolean!, $tag: String, $skip: Int!, $limit: Int!) {
    allTagPosts: allMdxBlogPost(
      skip: $skip
      filter: { tags: { in: [$tag] } }
      sort: { fields: [date, title], order: DESC }
      limit: $limit
    ) @include(if: $this_is_a_tag_search) {
      edges {
        node {
          id
          slug
          title
          date(formatString: "MMMM DD, YYYY")
          snippet
          abstract
          tags
        }
      }
    }
    allBlogPost: allMdxBlogPost(skip: $skip, sort: { fields: [date, title], order: DESC }, limit: $limit)
      @skip(if: $this_is_a_tag_search) {
      edges {
        node {
          id
          slug
          title
          date(formatString: "MMMM DD, YYYY")
          snippet
          abstract
          tags
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
