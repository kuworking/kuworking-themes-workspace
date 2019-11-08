import React from 'react'
import {
  get_image,
  get_folder_image,
  get_posts_with_the_same_tags,
  post_structure,
  get_last_slug,
} from './methods-template'
import { Structure } from '../components/structure'

export default ({ location: { href }, pageContext, data }) => {
  const { allPosts, current: post, core, post_images, wallpapers } = data
  const pageName = get_last_slug(post.slug)

  const images = {
    none_image: get_image(core.edges, 'none'),
    white_image: get_image(core.edges, 'white'),
    image: get_image(post_images.edges, pageName),
    images: post_images.edges || '',
    wallpapers: wallpapers.edges || '',
  }

  const { pre_path, basePath } = pageContext

  return (
    <Structure
      type="mdx"
      blogPost={{
        canonical: href,
        basePath,
        pre_path,
        images: images,
        post: post_structure(post, images.image),
        structure: {
          post_related_images: get_folder_image(images.images, pageName),
          tags_related_posts: get_posts_with_the_same_tags(post, allPosts, images),
        },
      }}
    />
  )
}
