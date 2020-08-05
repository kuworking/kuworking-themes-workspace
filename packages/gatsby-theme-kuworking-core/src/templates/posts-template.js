import React from 'react'
import { StructureGrid } from '../components/structure-grid'

export default ({ pageContext, data = null }) => {
  const { tag, global_tags, this_is_a_tag_search } = pageContext

  return (
    <StructureGrid
      type="grid"
      blogGrid={{
        query: data, // if there is a query in the queries, not the default case
        tags: {
          tags_grid: this_is_a_tag_search ? true : false,
          tag: tag,
          global_tags: global_tags,
        },
        ...pageContext,
      }}
    />
  )
}
