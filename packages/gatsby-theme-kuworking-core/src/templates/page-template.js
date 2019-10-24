import React from 'react'

import { get_image } from './methods-template'
import { useQuery } from '../queries/page-query'
import { Structure } from '../components/structure'

export const Page = ({ type = 'page', ...props }) => {
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
        canonical: window.location && window.location.href,
        images: images,
        ...props,
      }}
    />
  )
}
