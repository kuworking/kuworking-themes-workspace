import { graphql } from 'gatsby'
import PostPage from '../templates/post-template'

export default PostPage

export const query = graphql`
  query PostPageQuery($id: String!) {
    current: mdxBlogPost(id: { eq: $id }) {
      id
      slug
      ... on MdxBlogPost {
        parent {
          ... on Mdx {
            body
          }
        }
      }
    }
  }
`
