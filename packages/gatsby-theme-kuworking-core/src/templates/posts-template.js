import React from 'react'
import { get_image, get_and_remove_image, get_raw_image, get_data, post_structure } from '../components/global-methods'
import StructureGlobal from '../components/structure-global'

export default ({ location, pageContext, data }) => {
  const query = data.allTagPosts ? data.allTagPosts : data.allBlogPost
  const images = data.post_images ? data.post_images.edges : '' // there is always 'none.jpg', these are processed images
  const type_images = data.post_types ? data.post_types.edges : '' // these are files, not processed images
  const wallpapers_pre = data.wallpapers ? data.wallpapers.edges : '' // these are files, not processed images

  const none_image = get_image(images, 'none')
  const [wallpapers, white_image] = get_and_remove_image(wallpapers_pre, 'white')

  const posts = []
  query.edges.forEach(({ node }, index) => {
    const { pageName, type } = get_data(node)

    let image = get_image(images, pageName)
    if (!image) image = none_image

    let type_image = get_raw_image(type_images, type)
    let type_image_src =
      (type_image && type_image.node.publicURL) || (none_image && none_image.node.childImageSharp.fluid.src)

    let post_image = get_raw_image(images, pageName)
    let post_image_src =
      (post_image && post_image.node.publicURL) || (none_image && none_image.node.childImageSharp.fluid.src)

    posts.push({
      ...post_structure(node, image, type_image_src, post_image_src),
      key: 'post_' + index,
    })
  })

  const { tag, global_tags, pre_path, num_of_pages, current_page } = pageContext

  return (
    <StructureGlobal
      type="grid"
      posts={posts}
      tags_grid={data.allTagPosts ? true : false}
      wallpapers={wallpapers}
      tag={tag}
      global_tags={global_tags}
      type_images={type_images}
      white_image={white_image.node.childImageSharp.fluid}
      pre_path={pre_path}
      num_of_pages={num_of_pages}
      current_page={current_page}
      isFirst={current_page === 1}
      isLast={current_page === num_of_pages}
      prev_page={current_page - 1 === 1 ? `${pre_path}/` : `${pre_path}/` + (current_page - 1).toString()}
      next_page={`${pre_path}/` + (current_page + 1).toString()}
      location={location}
    />
  )
}
