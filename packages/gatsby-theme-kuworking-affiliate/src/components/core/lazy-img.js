// v kw 2019.09.06
import React, { useState, useRef, useEffect } from 'react'
import styled from '@emotion/styled'

const Observer = (el, setBackImg, setImageLoaded) => {
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
          setImageLoaded(1)
          observer.unobserve(lazyImage)
        }
      })
    })
    intersection.observe(el)
  }
}

const useImg = (observer = true, setImageLoaded) => {
  const image_ref = useRef()
  const [backImg, setBackImg] = useState('')
  const [resize, setResize] = useState(0)

  let stillMounted = { value: false } // in order to prevent the memory leak
  useEffect(() => {
    stillMounted.value = true
    return () => (stillMounted.value = false)
  }, [])

  const repaint = () => {
    if (!stillMounted.value) return
    setResize(resize + 1) // cause a repaint
  }

  let doit
  typeof window !== 'undefined' &&
    window.addEventListener('resize', () => {
      clearTimeout(doit)
      doit = setTimeout(repaint, 2000) // if it is not resizing for 2s, timeout won't be cleared
    })

  return observer
    ? [
        el => {
          Observer(el, setBackImg, setImageLoaded)
          return image_ref
        },
        backImg,
      ]
    : [image_ref, backImg, setBackImg, resize]
}

export const LazyBackgroundImg = ({ data_image, component, title = 'image' }) => {
  const [ref, src] = useImg()
  const dataset = Object.assign({}, ...Object.entries(data_image).map(([key, val]) => ({ ['data-' + key]: val })))
  return <BackgroundImage component={component} {...dataset} src={src} ref={ref} alt={title} />
}

export const LazyImg = ({ data_image, component, title = 'image', setImageLoaded }) => {
  const [ref, src] = useImg(true, setImageLoaded)
  const dataset = Object.assign({}, ...Object.entries(data_image).map(([key, val]) => ({ ['data-' + key]: val })))
  return <Image component={component} {...dataset} src={src} ref={ref} alt={title} />
}

export const Img = ({ data_image, component, title = 'image' }) => {
  const [ref, src, setSrc, resize] = useImg(false)

  useEffect(() => {
    const width = ref.current.clientWidth
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
    setSrc(image)
  }, [resize])

  return <Image component={component} src={src} ref={ref} alt={title} />
}

const BackgroundImage = styled.div`
  background-image: ${props => `url(${props.src})`};
  ${props => props.component}
`

const Image = styled.img`
  ${props => props.component}
`
