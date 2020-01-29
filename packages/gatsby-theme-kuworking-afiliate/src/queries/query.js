import { graphql } from 'gatsby'
import Grid from '../templates/template'

export default Grid

export const query = graphql`
  query PostsQuery {
    core: allJsonContent {
      edges {
        node {
          name
          content
        }
      }
    }
  }
`
