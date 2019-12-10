// v kw 2019.09.06
import React, { useState, useRef, useEffect } from 'react'
import styled from '@emotion/styled'

const Observer = (el, setBackImg) => {
  if ('IntersectionObserver' in window && el) {
    const intersection = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          let lazyImage = entry.target
          setBackImg(
            entry.target.clientWidth < 400
              ? lazyImage.dataset['400px'] || lazyImage.dataset.standard
              : entry.target.clientWidth < 600
              ? lazyImage.dataset['600px'] || lazyImage.dataset.standard
              : entry.target.clientWidth < 800
              ? lazyImage.dataset['800px'] || lazyImage.dataset.standard
              : entry.target.clientWidth < 1000
              ? lazyImage.dataset['1000px'] || lazyImage.dataset.standard
              : entry.target.clientWidth < 1200
              ? lazyImage.dataset['1200px'] || lazyImage.dataset.standard
              : entry.target.clientWidth < 1800
              ? lazyImage.dataset['1800px'] || lazyImage.dataset.standard
              : lazyImage.dataset.standard
          )
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
  const dataset = Object.assign({}, ...Object.entries(data_image).map(([key, val]) => ({ ['data-' + key]: val })))
  const [resize, setResize] = useState(0)

  const repaint = () => {
    setResize(resize + 1) // cause a repaint
  }

  let doit
  window.addEventListener('resize', () => {
    clearTimeout(doit)
    doit = setTimeout(repaint, 2000) // if it is not resizing for 2s, timeout won't be cleared
  })

  return (
    <BackgroundImage
      component={component}
      {...dataset}
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
  const dataset = Object.assign({}, ...Object.entries(data_image).map(([key, val]) => ({ ['data-' + key]: val })))
  const [resize, setResize] = useState(0)

  const repaint = () => {
    setResize(resize + 1) // cause a repaint
  }

  let doit
  window.addEventListener('resize', () => {
    clearTimeout(doit)
    doit = setTimeout(repaint, 2000) // if it is not resizing for 2s, timeout won't be cleared
  })

  return (
    <Image
      component={component}
      {...dataset}
      src={backImg}
      ref={el => {
        Observer(el, setBackImg)
        return image_ref
      }}
      alt={title}
    />
  )
}

export const NonLazyImg = ({ data_image, component, title = 'image' }) => {
  const image_ref = useRef()
  const [backImg, setBackImg] = useState('')
  const [resize, setResize] = useState(0)

  const repaint = () => {
    setResize(resize + 1) // cause a repaint
  }

  let doit
  window.addEventListener('resize', () => {
    clearTimeout(doit)
    doit = setTimeout(repaint, 2000) // if it is not resizing for 2s, timeout won't be cleared
  })

  useEffect(() => {
    const width = image_ref.current.clientWidth
    const image =
      width < 400
        ? data_image['400px'] || data_image.standard
        : width < 600
        ? data_image['600px'] || data_image.standard
        : width < 800
        ? data_image['800px'] || data_image.standard
        : width < 1000
        ? data_image['1000px'] || data_image.standard
        : width < 1200
        ? data_image['1200px'] || data_image.standard
        : width < 1800
        ? data_image['1800px'] || data_image.standard
        : data_image.standard
    setBackImg(image)
  }, [resize])

  return <Image component={component} src={backImg} ref={image_ref} alt={title} />
}

const BackgroundImage = styled.div`
  background-image: ${props => `url(${props.src})`};
  ${props => props.component}
`

const Image = styled.img`
  ${props => props.component}
`
