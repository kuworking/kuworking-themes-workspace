import React from 'react'
import { Structure } from '../components/structure'

export default ({ pageContext }) => {
  const {
    tag,
    global_tags,
    pre_path,
    basePath,
    thePath,
    types,
    num_of_pages,
    current_page,
    posts,
    wallpapers, // eslint-disable-line no-unused-vars
    post_images,
    this_is_a_tag_search,
  } = pageContext

  return (
    <Structure
      type="grid"
      blogGrid={{
        posts,
        types,
        thePath,
        pagination: {
          basePath,
          pre_path,
          num_of_pages,
          current_page,
          isFirst: current_page === 1,
          isLast: current_page === num_of_pages,
          prev_page: current_page - 1 === 1 ? `${pre_path}/` : `${pre_path}/` + (current_page - 1).toString(),
          next_page: `${pre_path}/` + (current_page + 1).toString(),
        },
        tags: {
          tags_grid: this_is_a_tag_search ? true : false,
          tag: tag,
          global_tags: global_tags,
        },
      }}
    />
  )
}
