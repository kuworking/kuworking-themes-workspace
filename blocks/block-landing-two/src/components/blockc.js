import React from 'react'
import styled from '@emotion/styled'

export const BlockC = ({ attributes }) => {
  const { folder = '/', images2 = [], text2 = [] } = attributes

  return (
    <Part>
      <PanelC1>
        <div>
          <img src={`${folder}/${images2[0]}`} alt="characteristic" />
        </div>
        <div>
          <Title>{text2[0][0]}</Title>
          <div>{text2[0][1]}</div>
        </div>
      </PanelC1>

      <PanelC2>
        <div>{text2[1][0]}</div>
        <div>{text2[1][1]}</div>
      </PanelC2>
    </Part>
  )
}

const Part = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  width: 100%;

  grid-gap: 10px;
  color: #f6f6f6;
  background: #3e3e3e;

  padding: 100px 10px 200px 10px;
`

const Title = styled.h1`
  font-family: 'Text Me One', sans-serif;
  font-size: 3.2rem;
  line-height: 1;
  text-align: center;
  margin: 0px;
  margin: 0px;
  margin-bottom: 5px;
  color: #f6f6f6;
`

const PanelC1 = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  align-items: center;
  max-width: 800px;
  width: 100%;

  & img {
    margin-bottom: 10px;
    width: 50px;
    height: 50px;
  }

  & div {
    line-height: 1.3;
    color: #f6f6f6;
  }
`
const PanelC2 = styled.div`
  margin-top: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  max-width: 800px;
  width: 100%;
`
