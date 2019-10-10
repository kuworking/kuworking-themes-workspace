// v kw 2019.09.06
import React from 'react'
import styled from 'styled-components'

export const Img = ({ data_src, src, title }) => {
  // to prevent error due to window not available during build
  //  if ('IntersectionObserver' in window) {

  /* to lazy load wallpapers with React Refs */
  const LazyImages = []

  const lazyImageObserver = () => {
    // I need to use a function because window is not available in build
    if ('IntersectionObserver' in window && LazyImages[0] !== null)
      return new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            let lazyImage = entry.target
            lazyImage.src = lazyImage.dataset.src
            //lazyImage.srcset = lazyImage.dataset.srcset;
            observer.unobserve(lazyImage)
          }
        })
      })
  }

  // I use a function to set a ref to make sure the component gets mounted, so that LazyImages[0] has an actual "element" inside (the DOM has mounted)
  const setRef = element => {
    LazyImages.unshift(React.createRef())
    LazyImages[0] = element // this is setting the ref, as if it was returning the value
    if ('IntersectionObserver' in window && LazyImages[0] !== null) lazyImageObserver().observe(LazyImages[0])
    // I need to check the "null" because when going to another page, it gets re-painted I suppose and gets an error because LazyImages[0] is not an element
  }

  return (
    <DivImg href={data_src} target="_blank">
      <img ref={setRef} src={src} data-src={data_src} alt={title} />
    </DivImg>
  )
}

const DivImg = styled.div`
  text-decoration: none;
  &:hover {
    text-decoration: none;
    background-color: unset !important;
    color: unset !important;
    & > img {
      border: 2px solid #000;
    }
  }
`
