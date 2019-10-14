import React from 'react'

import { get_image } from './methods-template'
import { useQuery } from '../queries/page-query'
import { Structure } from '../components/structure'

export const Page = ({ type = 'page', children, page, main_maxwidth }) => {
  const data = useQuery()
  const { core, post_images, wallpapers } = data
  const images = {
    none_image: get_image(core.edges, 'none'),
    white_image: get_image(core.edges, 'white'),
    images: post_images.edges || '',
    wallpapers: wallpapers.edges || '',
  }

  return (
    <Structure
      type={type}
      blogPage={{
        images: images,
        page: page,
        children: children,
        canonical: window.location && window.location.href,
        main_maxwidth: main_maxwidth,
      }}
    />
  )
}
