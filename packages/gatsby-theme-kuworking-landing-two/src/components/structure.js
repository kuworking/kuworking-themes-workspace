import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import { Helmet } from 'react-helmet'
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
  useReplace100vh,
} from 'gatsby-theme-kuworking-landing-two'

import './globalcss.css'

export const Structure = ({ blogGrid }) => {
  const { innerHeight: iheight } = typeof window !== 'undefined' && window
  const [opacity, setOpacity] = useState('0')
  useReplace100vh()

  const basePath = blogGrid.basePath

  useEffect(() => {
    ;(async () => {
      await wait(500)
      setOpacity('1')
    })()
  }, [])

  return (
    <Main>
      <Helmet defer={false}>
        <SEO blogGrid={blogGrid} config={config} seotext={seoText} />
      </Helmet>

      <PartHeader>
        <Header basePath={basePath} />
      </PartHeader>

      <PartA opacity={opacity}>
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
  min-height: calc(var(--vh, 1vh) * 100);
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
  }
`
const PartA = styled(Part)`
  opacity: ${props => props.opacity};
  min-height: 100vh;
  min-height: calc(var(--vh, 1vh) * 100);

  & > div {
    background-color: ${props => props.theme.colors.backgroundimg__color};
    background-blend-mode: ${props => props.theme.colors.backgroundimg__mode};

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
