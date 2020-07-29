import React from 'react'
import { StructurePost } from '../components/structure-post'

export default ({ pageContext, data }) => {
  const { post } = pageContext
  post.content = data.current.parent.body
  post.exports = data.current.parent.exports

  return (
    <StructurePost
      type="mdx"
      blogPost={{
        post,
        ...pageContext,
      }}
    />
  )
}


  /*
  const image_versions = get_image_versions(post_images, pageName)
  const grid_image_versions = get_image_versions(grid_images, pageName)
  const images = {
    image: image_versions.standard,
    image_versions: image_versions,
    images: post_images || '',
    grid_image: grid_image_versions.standard,
    grid_image_versions: grid_image_versions,
    grid_images: grid_images,
    wallpapers: wallpapers || '',
  }

  fill_related_posts(post, raw_posts, images)
*/
