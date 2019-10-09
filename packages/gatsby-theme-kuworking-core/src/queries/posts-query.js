import { graphql } from 'gatsby'
import PostsPage from '../templates/posts-template'

export default PostsPage

// here I need to use allMdx if I want to be able to filter by tag,
// since this info is only available here when the mdx plugin is doing that,
// the rest of the nodes (allFile, allSitePage) have this info but right here
// it is not usable (it doesn't exist yet)
export const query = graphql`
  query PostsQuery($this_is_a_tag_search: Boolean!, $tag: String, $skip: Int!, $limit: Int!) {
    allTagPosts: allBlogPost(
      skip: $skip
      filter: { tags: { in: [$tag] }, type: { ne: "course" } }
      sort: { fields: [date, title], order: DESC }
      limit: $limit
    ) @include(if: $this_is_a_tag_search) {
      edges {
        node {
          id
          excerpt
          slug
          title
          date(formatString: "MMMM DD, YYYY")
          type
          snippet
          abstract
          tags
        }
      }
    }
    allBlogPost: allBlogPost(
      skip: $skip
      sort: { fields: [date, title], order: DESC }
      limit: $limit
      filter: { type: { ne: "course" } }
    ) @skip(if: $this_is_a_tag_search) {
      edges {
        node {
          id
          excerpt
          slug
          title
          date(formatString: "MMMM DD, YYYY")
          type
          snippet
          abstract
          tags
        }
      }
    }
    post_images: allFile(filter: { sourceInstanceName: { regex: "/content/.*/images/" } }) {
      edges {
        node {
          publicURL
          name
          relativeDirectory
          childImageSharp {
            fluid(maxWidth: 1000) {
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
