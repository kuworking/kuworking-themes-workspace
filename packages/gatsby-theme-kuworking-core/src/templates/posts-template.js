import React from 'react'
import { get_image, get_fixed_image, post_structure, get_last_slug } from './methods-template'
import { Structure } from '../components/structure'

export default ({ location, pageContext, data }) => {
  const { core, post_images, wallpapers } = data
  const images = {
    none_image: get_image(core.edges, 'none'),
    white_image: get_image(core.edges, 'white'),
    images: post_images.edges || '',
    wallpapers: wallpapers.edges || '',
  }

  const allPosts = data.allTagPosts ? data.allTagPosts.edges : data.allBlogPost.edges
  const posts = []

  allPosts.forEach(({ node: post }, index) =>
    posts.push({
      ...post_structure(post, get_fixed_image(images.images, get_last_slug(post.slug)), true), // true to use fixed and not fluid
      key: 'post_' + index,
    })
  )

  const { tag, global_tags, pre_path, num_of_pages, current_page } = pageContext

  return (
    <Structure
      type="grid"
      blogGrid={{
        images: images,
        posts: posts,
        pagination: {
          pre_path,
          num_of_pages,
          current_page,
          isFirst: current_page === 1,
          isLast: current_page === num_of_pages,
          prev_page: current_page - 1 === 1 ? `${pre_path}/` : `${pre_path}/` + (current_page - 1).toString(),
          next_page: `${pre_path}/` + (current_page + 1).toString(),
        },
        tags: {
          tags_grid: data.allTagPosts ? true : false,
          tag: tag,
          global_tags: global_tags,
        },
      }}
    />
  )
}
