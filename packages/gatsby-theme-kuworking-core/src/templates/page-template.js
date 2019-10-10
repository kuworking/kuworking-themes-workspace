import React from 'react'

import { get_image, get_and_remove_image } from '../components/methods/global-methods'
import { useQuery } from '../queries/page-query'
import StructureGlobal from '../components/structure-global'

export const Page = ({
  location,
  type,
  children,
  title,
  description,
  keywords,
  robots,
  nowallpaper,
  need_info,
  main_maxwidth,
}) => {
  const data = useQuery()
  const images = data.post_images ? data.post_images.edges : ''
  const wallpapers_pre = data.wallpapers ? data.wallpapers.edges : ''
  const none_image = get_image(images, 'none')
  const [wallpapers, white_image] = get_and_remove_image(wallpapers_pre, 'white')

  return (
    <StructureGlobal
      type={type ? type : 'page'}
      canonical={(typeof window !== `undefined`) ? window.location.href : ''}
      children={children}
      wallpapers={wallpapers}
      title={title}
      description={description}
      keywords={keywords}
      robots={robots}
      image={none_image.node.childImageSharp.fluid}
      white_image={white_image.node.childImageSharp.fluid}
      nowallpaper={nowallpaper}
      need_info={need_info}
      main_maxwidth={main_maxwidth}
      location={location}
    />
  )
}
