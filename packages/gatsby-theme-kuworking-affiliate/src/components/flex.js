import React from 'react'
import styled from '@emotion/styled'
import { CtaMain, useFlexMasonry } from 'gatsby-theme-kuworking-affiliate'

import { FlexCard } from 'gatsby-theme-kuworking-affiliate'

export const Flex = ({ blogGrid: { core, posts }, shape }) => {
  const data = {}
  core.forEach(({ node: { content } }) => {
    const ctn = JSON.parse(content)
    // eslint-disable-next-line
    const { category, description } = ctn[0]
    data[category] = ctn.splice(1)
  })

  const column_width = 287
  const [container_ref1, assignRef1, updateGrid1] = useFlexMasonry(column_width, data.bags.length)
  const [container_ref2, assignRef2, updateGrid2] = useFlexMasonry(column_width, data.tech.length)

  return (
    <>
      <CtaMain />
      <Title>BAGS</Title>
      <Container ref={container_ref1}>
        {data.bags.map((item, i) => (
          <FlexCard
            key={'bags' + i}
            item={item}
            category="bags"
            adjustMasonry={updateGrid1}
            ref={assignRef1}
            shape={shape}
          />
        ))}
      </Container>
      <Title>TECH</Title>
      <Container ref={container_ref2}>
        {data.tech.map((item, i) => (
          <FlexCard
            key={'tech' + i}
            item={item}
            category="tech"
            adjustMasonry={updateGrid2}
            ref={assignRef2}
            shape={shape}
          />
        ))}
      </Container>{' '}
    </>
  )
}

const q = px => `@media (min-width: ${px}px)`

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: space-around;
  ${q(600)} {
    align-content: space-between;
  }

  & > a {
    flex: 1;

    & > div {
      color: #fff;
      font-weight: 700;
      font-size: 32px;
      margin: 4px;
    }
  }
`

const Title = styled.h1``
