import React from 'react'

import { get_image } from './methods-template'
import { useQuery } from '../queries/page-query'
import { Structure } from '../components/structure'

export const Page = ({ location, type, children, page, main_maxwidth }) => {
  const data = useQuery()
  const { core, post_images, wallpapers } = data
  const images = {
    none_image: get_image(core.edges, 'none'),
    white_image: get_image(core.edges, 'white'),
    images: post_images.edges || '',
    wallpapers: wallpapers.edges || '',
  }

  console.log('to check if there are trailing slashes here: ' + window.location.href)
  console.log(location)
  return (
    <Structure
      type={type ? type : 'page'}
      blogPage={{
        images: images,
        page: page,
        children: children,
        canonical: typeof window !== `undefined` ? window.location.href : '',
        location: location,
        main_maxwidth: main_maxwidth,
      }}
    />
  )
}
