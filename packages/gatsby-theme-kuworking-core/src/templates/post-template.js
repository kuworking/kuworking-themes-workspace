import React from 'react'
import {
  get_image,
  get_and_remove_image,
  get_raw_image,
  get_folder_image,
  get_data,
  post_structure,
} from '../components/global-methods'
import StructureGlobal from '../components/structure-global'

export default ({ location, data }) => {
  const query = data.allPosts
  const post = data.current
  const images = data.post_images ? data.post_images.edges : '' // there is always 'none.jpg', these are processed images
  const type_images = data.post_types ? data.post_types.edges : '' // these are files, not processed images
  const wallpapers_pre = data.wallpapers ? data.wallpapers.edges : '' // these are files, not processed images

  const none_image = get_image(images, 'none')
  const [wallpapers, white_image] = get_and_remove_image(wallpapers_pre, 'white')

  const { pageName, type } = get_data(post)

  let image = get_image(images, pageName)
  if (!image) image = none_image

  let type_image = get_raw_image(type_images, type)
  let type_image_src =
    (type_image && type_image.node.publicURL) || (none_image && none_image.node.childImageSharp.fluid.src)

  const post_related_images = get_folder_image(images, pageName)

  /* build an array of posts of the same tags */
  let posts_with_the_same_tags = []
  post.tags.forEach(tag => {
    const these_posts = [...query.edges.filter(({ node }) => node.tags.includes(tag) && !node.tags.includes('curso'))]
    let this_is_the_own_post

    these_posts.forEach((this_post, i) => {
      this_post.node.name = this_post.node.slug.replace(/\//g, '')
      const this_image = get_image(images, this_post.node.name)
      this_post.node.src =
        (this_image && this_image.node.childImageSharp.fluid) || (none_image && none_image.node.childImageSharp.fluid)
      this_post.node.publicUrl =
        (this_image && this_image.node.childImageSharp.fluid.src) ||
        (none_image && none_image.node.childImageSharp.fluid.src)
      const this_type_image = get_raw_image(type_images, this_post.node.type)
      this_post.node.type_image = this_type_image && this_type_image.node.publicURL
      this_post.node.description = this_post.node.snippet
      if (this_post.node.title === post.title) this_is_the_own_post = i
    })

    these_posts.splice(this_is_the_own_post, 1) // remove the same post from the array
    posts_with_the_same_tags.push(...these_posts)
  })

  posts_with_the_same_tags = Array.from(new Set(posts_with_the_same_tags)) // duplicates are removed

  const post_str = {
    ...post_structure(post, image, type_image_src),
    key: 'nokeyneeded',
    tags_related_posts: posts_with_the_same_tags,
    post_related_images: post_related_images, // images of the folder of the same page name
  }

  const comments = get_folder_image(data.post_comments.edges, pageName)

  return (
    <StructureGlobal
      type="mdx"
      canonical={location.href}
      post={post_str}
      wallpapers={wallpapers}
      images={images}
      white_image={white_image.node.childImageSharp.fluid}
      comments={comments}
      location={location}
    />
  )
}
