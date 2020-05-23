/** @jsx jsx */
import React from 'react'
import styled from '@emotion/styled'
import { jsx } from 'theme-ui'
import { TextZoom } from 'gatsby-theme-kuworking-methods'

export const BlockB = () => {
  return (
    <Panel
      sx={{
        '& h1': { fontSize: ['5.0rem', '5.0rem', '5.0rem'], fontFamily: 'special' },
        '&&': { color: 'bigTitle' },
      }}
    >
      <Title>
        <TextZoom delay="200">Kuworking</TextZoom>
      </Title>
    </Panel>
  )
}

const Title = styled.h1``

const Panel = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  width: 100%;
  padding: 150px 0px;
  text-align: center;

  background: #ff0707;

  & > h1 {
    transition: color 0.5s ease;
    color: #fff;
  }
`
