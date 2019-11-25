// v kw 2019.09.06
import React, { useState, useRef } from 'react'
import styled from '@emotion/styled'

const Observer = (el, setBackImg) => {
  if ('IntersectionObserver' in window && el) {
    const intersection = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          let lazyImage = entry.target
          setBackImg(lazyImage.dataset.image)
          observer.unobserve(lazyImage)
        }
      })
    })
    intersection.observe(el)
  }
}

export const LazyBackgroundImg = ({ data_image, component, title = 'image' }) => {
  const image_ref = useRef()
  const [backImg, setBackImg] = useState('')

  return (
    <BackgroundImage
      component={component}
      data-image={data_image}
      src={backImg}
      ref={el => {
        Observer(el, setBackImg)
        return image_ref
      }}
      alt={title}
    />
  )
}

export const LazyImg = ({ data_image, component, title = 'image' }) => {
  const image_ref = useRef()
  const [backImg, setBackImg] = useState('')

  return (
    <Image
      component={component}
      data-image={data_image}
      src={backImg}
      ref={el => {
        Observer(el, setBackImg)
        return image_ref
      }}
      alt={title}
    />
  )
}

const BackgroundImage = styled.div`
  background-image: ${props => `url(${props.src})`};
  ${props => props.component}
`

const Image = styled.img`
  ${props => props.component}
`
