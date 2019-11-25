import React from 'react'

import { useQuery } from '../queries/page-query'
import { Structure } from '../components/structure'

export const Page = ({ type = 'page', page, ...props }) => {
  const data = useQuery()
  const { post_images, wallpapers } = data
  const images = {
    images: post_images.edges || '',
    wallpapers: wallpapers.edges || '',
  }

  return (
    <Structure
      type={type}
      blogPage={{
        canonical: typeof window !== 'undefined' && window.location.href,
        images: images,
        page,
        ...props,
      }}
    />
  )
}
