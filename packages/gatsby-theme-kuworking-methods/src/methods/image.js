// v2020.04.08

import React, { useState, useRef, useEffect, useCallback } from 'react'
import styled from '@emotion/styled'
import { useWindowResize } from '../hooks/usewindowresize'
import { useInView } from 'react-intersection-observer'

const wait = ms => new Promise((res, rej) => setTimeout(() => res('timed'), ms))

const Observer = (el, setBackImg, bestImage, adjustMasonry = null) => {
  if ('IntersectionObserver' in window && el) {
    const intersection = new IntersectionObserver((entries, observer) => {
      entries.forEach(async entry => {
        if (entry.isIntersecting) {
          let lazyImage = entry.target
          setBackImg(bestImage())
          if (adjustMasonry) {
            setTimeout(adjustMasonry, 100)
            // just in case, sometimes (cannot reproduce!) the function seems not to be executed
            setTimeout(adjustMasonry, 2000)
          }
          observer.unobserve(lazyImage)
        }
      })
    })
    intersection.observe(el)
  }
}

const useImg = (bestImage, adjustMasonry = null) => {
  const image_ref = useRef()
  const [src, setSrc] = useState('')
  const [, rerender] = useState()
  let stillMounted = { value: false } // in order to prevent the memory leak
  useEffect(() => {
    stillMounted.value = true
    return () => (stillMounted.value = false)
  }, [])

  let doit
  typeof window !== 'undefined' &&
    window.addEventListener('resize', () => {
      clearTimeout(doit)
      doit = setTimeout(() => stillMounted.value && rerender({}), 2000) // if it is not resizing for 2s, timeout won't be cleared (debounce)
    })

  // a useRef callback
  return [
    el => {
      Observer(el, setSrc, bestImage, adjustMasonry)
      return image_ref
    },
    src,
  ]
}

export const KwImg = ({
  image: [standard, set],
  component,
  alt = 'image',
  background = false,
  adjustMasonry = null,
  children,
}) => {
  const [ref, src] = useImg(bestImage, adjustMasonry)

  const bestImage = () => {
    const clientWidth = trueRef.current.clientWidth
    return set
      ? clientWidth < 400
        ? set['400px'] || standard
        : clientWidth < 600
        ? set['600px'] || standard
        : clientWidth < 800
        ? set['800px'] || standard
        : clientWidth < 1000
        ? set['1000px'] || standard
        : clientWidth < 1200
        ? set['1200px'] || standard
        : clientWidth < 1800
        ? set['1800px'] || standard
        : standard
      : standard
  }

  return background ? (
    <BackgroundImage style={{ opacity: '0' }} component={component} alt={alt} src={src} ref={ref}>
      {children}
    </BackgroundImage>
  ) : (
    <Image style={{ opacity: '0' }} component={component} alt={alt} src={src} ref={handleRef} />
  )
}

export const BImg = props => <Img {...props} background={true} />

export const Img = ({
  image: [standard, set],
  component,
  alt = 'image',
  background = false,
  lazy = true,
  adjustMasonry = null,
  children,
}) => {
  /**
   * 1. selects image based on clientWidth among the images provided
   * 2. Expects image:
   *                [
   *                url,
   *                // optional
   *                {
   *                  400px: url,
   *                  600px: url,
   *                  800px, 1000px, 1200px, 1800px
   *                }
   *                ]
   * 3. It doesn't take into account density of pixels
   * 4. loads lazy through useInView
   */

  const trueRef = useRef()
  const [ref, inView, entry] = useInView({
    triggerOnce: true,
    rootMargin: '200px 0px',
    threshold: 0,
  })
  useCallback
  const handleRef = useCallback(
    node => {
      // in order to have a real reference since the ref from useInView doesn't have a current value
      // https://github.com/thebuilder/react-intersection-observer/issues/186
      // https://github.com/thebuilder/react-intersection-observer/pull/256
      ref(node)
      trueRef.current = node
    },
    [ref]
  )

  const [src, setSrc] = useState('')
  const resize = useWindowResize()

  useEffect(() => {
    const clientWidth = trueRef.current.clientWidth
    const bestImage = set
      ? clientWidth < 400
        ? set['400px'] || standard
        : clientWidth < 600
        ? set['600px'] || standard
        : clientWidth < 800
        ? set['800px'] || standard
        : clientWidth < 1000
        ? set['1000px'] || standard
        : clientWidth < 1200
        ? set['1200px'] || standard
        : clientWidth < 1800
        ? set['1800px'] || standard
        : standard
      : standard
    setSrc(bestImage)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resize]) // changes when window is resized

  useEffect(() => {
    if (adjustMasonry) adjustMasonry()
    setTimeout(adjustMasonry, 2000) // just in case, sometimes (cannot reproduce!) the function seems not to be executed

    if (!lazy) return // if !lazy we'll never be here
    ;(async () => {
      if (inView) {
        await wait(200)
        entry.target.style.opacity = 1 // in sync with styled below
      }
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView])

  return background ? (
    <BackgroundImage
      style={{ opacity: '0' }}
      component={component}
      src={inView || !lazy ? src : null}
      ref={lazy ? handleRef : null}
      alt={alt}
    >
      {children}
    </BackgroundImage>
  ) : (
    <Image
      style={{ opacity: '0' }}
      component={component}
      src={inView || !lazy ? src : null}
      ref={lazy ? handleRef : null}
      alt={alt}
    />
  )
}

const Image = styled.img`
  ${props => props.component}
  transition: opacity 0.5s ease-in;
`

const BackgroundImage = styled.div`
  ${props => props.component}
  transition: opacity 0.5s ease-in;
  background-image: ${props => `url("${props.src}")`};
  background-repeat: no-repeat;
`
