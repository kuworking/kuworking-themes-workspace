import React from 'react'
import styled from '@emotion/styled'
import { TextZoom } from '@kuworking/methods'

export const BlockB = () => {
  return (
    <Panel>
      <Title>
        <TextZoom delay="200">Kuworking</TextZoom>
      </Title>
    </Panel>
  )
}

const Title = styled.h1`
  font-family: dokdo, sans-serif;
  font-size: 5rem;
`

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
