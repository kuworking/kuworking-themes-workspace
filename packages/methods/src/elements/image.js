// v2020.04.08

import React, { useState, useRef, useEffect, useLayoutEffect, useCallback } from 'react'
import { useWindowResize } from '../hooks/usewindowresize'
import { useInView } from 'react-intersection-observer'

/**
 * Implements an image with lazy loading
 */

const wait = ms => new Promise((res, rej) => setTimeout(() => res('timed'), ms))

const Observer = (el, setBackImg, bestImage) => {
  if ('IntersectionObserver' in window && el) {
    const intersection = new IntersectionObserver((entries, observer) => {
      entries.forEach(async entry => {
        if (entry.isIntersecting) {
          let lazyImage = entry.target
          setBackImg(bestImage())
          observer.unobserve(lazyImage)
        }
      })
    })
    intersection.observe(el)
  }
}

const useImg = bestImage => {
  const image_ref = useRef()
  const [src, setSrc] = useState('')
  const [notused, rerender] = useState()
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
      Observer(el, setSrc, bestImage)
      return image_ref
    },
    src,
  ]
}

export const SimpleImg = ({ image: [standard, set], alt = 'image', children }) => {
  const [ref, src] = useImg(bestImage)

  const bestImage = () => {
    const clientWidth = ref.current.clientWidth
    return set
      ? clientWidth < 400
        ? set['400px'] || set['600px'] || set['800px'] || set['1000px'] || set['1200px'] || set['1800px'] || standard
        : clientWidth < 600
        ? set['600px'] || set['800px'] || set['1000px'] || set['1200px'] || set['1800px'] || standard
        : clientWidth < 800
        ? set['800px'] || set['1000px'] || set['1200px'] || set['1800px'] || standard
        : clientWidth < 1000
        ? set['1000px'] || set['1200px'] || set['1800px'] || standard
        : clientWidth < 1200
        ? set['1200px'] || set['1800px'] || standard
        : clientWidth < 1800
        ? set['1800px'] || standard
        : standard
      : standard
  }

  return <img alt={alt} src={src} ref={ref} />
}

export const Img = props => {
  const {
    delay = 0,
    blank = '/blank.gif',
    image: [standard, set],
    alt = 'image',
    background = false,
    lazy = true,
    children,
    ...rest
  } = props

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

  const supportsLazyLoad =
    typeof window !== 'undefined' ? (background ? false : 'loading' in document.createElement('img')) : false

  const trueRef = useRef() // needed to read the width of the container
  const [ref, inView, entry] = useInView({
    triggerOnce: true,
    rootMargin: '200px 0px',
    threshold: 0,
  })

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

  const [best, setBest] = useState('')
  const [src, setSrc] = useState(blank)
  const resize = useWindowResize()

  useLayoutEffect(() => {
    const clientWidth = trueRef && trueRef.current && trueRef.current.clientWidth
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

    setBest(bestImage)
    if (!lazy || supportsLazyLoad) setSrc(bestImage)
  }, [resize, standard, set]) // changes when window is resized

  useEffect(() => {
    if (!lazy || supportsLazyLoad) return // if !lazy we'll never be here
    ;(async () => {
      if (inView) {
        await wait(delay)
        setSrc(best)
        await 50
        entry.target.style.opacity = 1 // in sync with styled below
      }
    })()
  }, [inView])

  const opac = lazy && !supportsLazyLoad ? 0 : 1

  return <img loading="lazy" src={src} ref={handleRef} alt={alt} className="kw_img" {...rest} />
}
