import React, { useState } from 'react'
import { CtaMain, Items, useMasonry } from 'gatsby-theme-kuworking-affiliate'

export const Grid = ({ blogGrid: { core, posts }, shape }) => {
  const row_unit = 20
  const grid_gap = 15
  const [repaint, setRepaint] = useState(true) // to trigger repaint
  const [gridAutoRows, assignRef, adjustMasonry] = useMasonry(row_unit, grid_gap, [repaint, setRepaint])

  const data = {}
  core.forEach(({ node: { content } }) => {
    const ctn = JSON.parse(content)
    // eslint-disable-next-line
    const { category, description } = ctn[0]
    data[category] = ctn.splice(1)
  })

  return (
    <>
      <CtaMain />

      <Items pieces={{ grid_gap, gridAutoRows, data, assignRef, adjustMasonry, shape }} />
    </>
  )
}
