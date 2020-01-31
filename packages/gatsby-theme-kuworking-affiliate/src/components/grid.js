import React, { useRef, useLayoutEffect, useState } from 'react'
import styled from '@emotion/styled'

import { CtaMain, Card } from 'gatsby-theme-kuworking-affiliate'

const wait = ms => new Promise((res, rej) => setTimeout(() => res('timed'), ms))

const useMasonry = (row_unit, grid_gap) => {
  const refs = useRef([])
  const [imageLoaded, setImageLoaded] = useState(1)

  useLayoutEffect(() => {
    const update_grid = async () => {
      await wait(500)
      if (!imageLoaded) return // prevent repetitive events

      refs.current.forEach(el => {
        el.style.gridRowEnd =
          'span ' + Math.ceil((el.children[0].getBoundingClientRect().height + grid_gap) / (row_unit + grid_gap))
      })
      setImageLoaded(0)
    }
    imageLoaded && update_grid()
    window.addEventListener('resize', update_grid)
    return () => window.removeEventListener('resize', update_grid)
  }, [imageLoaded])

  const assignRef = r => {
    if (!r) return
    return refs.current.includes(r) || refs.current.push(r)
  }

  return [refs, assignRef, setImageLoaded]
}

export const Grid = ({ blogGrid: { core, posts } }) => {
  const row_unit = 20
  const grid_gap = 15

  //  let total_items = 0
  const data = {}
  core.forEach(({ node: { content } }) => {
    const ctn = JSON.parse(content)
    const { category, description } = ctn[0]
    data[category] = ctn.splice(1)
  })

  const [refs, assignRef, setImageLoaded] = useMasonry(row_unit, grid_gap)

  return (
    <>
      <CtaMain />

      <Container row_unit={row_unit} grid_gap={grid_gap}>
        {data.tech.map((item, i) => (
          <Card key={'tech' + i} item={item} category="tech" setImageLoaded={setImageLoaded} ref={assignRef} />
        ))}
      </Container>
      <div css={{ marginTop: '500px' }}></div>
      <Container row_unit={row_unit} grid_gap={grid_gap}>
        {data.bags.map((item, i) => (
          <Card key={'bags' + i} item={item} category="bags" setImageLoaded={setImageLoaded} ref={assignRef} />
        ))}
      </Container>
    </>
  )
}

const q = px => `@media (min-width: ${px}px)`

const Container = styled.div`
  width: 100%;
  transition: padding 0.5s ease;

  display: grid;
  grid-column-gap: 10px;
  grid-row-gap: ${props => props.grid_gap}px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: ${props => props.row_unit}px;

  ${q(1100)} {
  }
`
