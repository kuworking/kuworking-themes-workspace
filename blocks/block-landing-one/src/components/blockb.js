import React from 'react'
import styled from '@emotion/styled'
import facepaint from 'facepaint'
import { TextZoom } from '@kuworking/methods'

export const BlockB = ({ attributes }) => {
  const { folder = '/', text2 = [] } = attributes

  return (
    <Panel>
      <Title>
        <TextZoom delay="200">{text2[0]}</TextZoom>
      </Title>
    </Panel>
  )
}

const mq = facepaint([
  '@media(min-width: 25em)', // 400px
  '@media(min-width: 37.5em)', //  600px
  '@media(min-width: 56.25em)', //  900px
])

const Title = styled.h1`
  font-family: dokdo, sans-serif;
  ${mq({
    fontSize: ['5rem', '10rem', '10rem'],
  })}
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
