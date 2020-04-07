import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import {
  SEO,
  Header,
  BlockA,
  BlockB,
  BlockC,
  Footer,
  config,
  seoText,
  wait,
  q,
  qq,
} from 'gatsby-theme-kuworking-landing-one'

import './globalcss.css'

export const Structure = ({ blogGrid }) => {
  const { innerHeight: iheight } = window
  const [height, setHeight] = useState('0px')

  const basePath = blogGrid.basePath

  useEffect(() => {
    ;(async () => {
      setHeight(iheight + 30 + 'px')
      await wait(2000)
      setHeight('') // to undefine it
    })()
  }, [])

  return (
    <Main>
      <SEO blogGrid={blogGrid} config={config} seotext={seoText} />

      <PartHeader>
        <Header basePath={basePath} />
      </PartHeader>

      <PartA height={height}>
        <BlockA />
      </PartA>

      <PartB>
        <BlockB />
      </PartB>

      <PartC>
        <BlockC />
        <Footer basePath={basePath} />
      </PartC>
    </Main>
  )
}

const Main = styled.main`
  background: unset;
  display: flex;
  max-width: 100%;
  width: 100%;
  min-height: 100vh; /* needed for the sticky footer */
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  transition: all 2s ease;

  & > div,
  & > header {
    transition: all 5s cubic-bezier(0.09, 1.01, 0.12, 1);
  }
`

const PartHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: baseline;
  font-weight: 700;
  font-size: 1em;
  z-index: 100;
  position: fixed;
`

const Part = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  width: 100%;
  & h1,
  & h2 {
    transition: color 0.5s ease;
    color: ${props => props.theme.colors.title};
  }
`
const PartA = styled(Part)`
  ${props => props.height !== 'none' && `max-height: ${props.height};`};

  & > div {
    background-color: ${props => props.theme.colors.backgroundimg__color};
    background-blend-mode: ${props => props.theme.colors.backgroundimg__mode};
    transition: all 0.5s ease;

    padding: 0px 0px;
    ${() => qq(600)} {
      padding: 0px 5px;
    }
  }
`
const PartB = styled(Part)`
  z-index: 1;
  background: ${props => props.theme.colors.bloc2__background};

  padding: 100px 0px;
  ${() => qq(600)} {
    padding: 100px 5px;
  }
`
const PartC = styled(Part)`
  grid-gap: 10px;
  color: #f6f6f6;
  background: #3e3e3e;

  padding: 50px 0px;
  ${() => qq(600)} {
    padding: 50px 5px 0px 5px;
  }
`
