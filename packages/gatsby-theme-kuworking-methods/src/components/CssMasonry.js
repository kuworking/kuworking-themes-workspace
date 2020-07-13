import React, { useState, useEffect } from 'react'
import { useMedia } from '../hooks/usemedia'
import { useMeasure } from '../hooks/usemeasure'

/**
 * Returns a number of columns (defined in values) based on the provided media queries
 */
export const CssMasonry = ({ columns: query, elements: initialElements, categories, children }) => {
  // get columns based on client width
  //  const columns = useMedia(['(min-width: 1000px)', '(min-width: 800px)', '(min-width: 600px)'], [5, 4, 3], 2)
  const columns = useMedia(...query)

  // get the ref (bind) to monitor the contentRect (here only interested in width) (this is the global container)
  const [bind, { width }] = useMeasure()

  // to show only specific categories

  const [elements, setElements] = useState(
    initialElements.map((post, i) => ({
      post: post,
      key: i,
      height: 0, // initial height
      currentWidth: 0,
      currentHeight: 0,
      currentRatio: 1,
      showCat: 1,
    }))
  )

  // define `showCat` depending of contents of `el.post.categories`
  const reSetElementsCat = cat => {
    console.log(cat)
    console.log(elements.map(el => el.showCat))
    setElements(
      elements.map((el, i) => {
        return {
          ...el,
          showCat: cat ? el.post.categories.includes(cat) : 1,
        }
      })
    )
  }

  // resets elements with
  const reSetElements = (image, h, w) => {
    const el = elements.find(el => el.key === image.key)
    el.currentHeight = parseInt(h)
    el.currentWidth = parseInt(w)
    el.currentRatio = w / h
    setElements([...elements])
  }

  // heights of the columns, change when a div is inserted in one of them
  const columnHeights = Array(columns).fill(0) // Each column gets a height starting with zero

  // Calculate x-y positions
  const transitions = elements.map(el => {
    if (!el.showCat) return { ...el, x: 0, y: 0, width: 0, height: 0 }
    const column = columnHeights.indexOf(Math.min(...columnHeights)) // Basic masonry-grid placing, puts tile into the smallest column using Math.min
    const elWidth = parseInt((width / columns) * column) // el ancho del elemento basado en la columna
    const elHeight = parseInt(width / columns / el.currentRatio) // la altura del elemento considerando su ratio de serie
    const x = elWidth // X = container width / number of columns * column index, Y = it's just the height of the current column
    const y = (columnHeights[column] += elHeight) - elHeight // X = container width / number of columns * column index, Y = it's just the height of the current column
    return { ...el, x, y, width: width / columns, height: el.height }
  })

  return (
    <div className="cssmasonry_grid">
      <div className="cssmasonry_categories">
        <span onClick={() => reSetElementsCat(null)}>inicio</span>
        {categories.map((el, i) => (
          <span key={`cat${i}`} onClick={() => reSetElementsCat(el)}>
            {el}
          </span>
        ))}
      </div>
      <div className="cssmasonry_masonry" {...bind} style={{ height: Math.max(...columnHeights) }}>
        {transitions.map(t => {
          const { item, key, post, x, y, ...rest } = t

          /**
           * If the transform is sent to Element and there it is loacted with {...bind},
           * ..then somehow I never get the height of the container
           */
          return (
            <div key={`item${key}`} style={{ transform: `translate3d(${x}px,${y}px,0)`, ...rest }}>
              <Element image={t} reSetElements={reSetElements} children={children} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

/**
 * Component for each element
 */
const Element = ({ image, reSetElements, style, children }) => {
  const { post } = image

  const [bind, { width, height }] = useMeasure()

  useEffect(() => {
    if (height !== 0 && width !== 0) reSetElements(image, height, width)
  }, [height, width])

  /**
   * I need this middle div because padding is influencing the "gap" and I need to isolate it
   */
  return (
    <div className="cssmasonry_masonry_element" style={{ display: image.showCat ? 'block' : 'none' }} {...bind}>
      <div>{children(post)}</div>
    </div>
  )
}
