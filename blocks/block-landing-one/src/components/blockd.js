import React from 'react'
import styled from '@emotion/styled'
import { Move } from '@kuworking/methods'

export const BlockD = ({ attributes }) => {
  const { folder = '/', text4 = [], images4 = [] } = attributes

  const { innerWidth: width } = typeof window !== 'undefined' && window
  const direction = width > 600 ? 'top' : 'left'

  return (
    <PanelB1>
      <div>
        {text4.map((el, i) => (
          <Move key={`key4${i}`} type={direction} delay="200">
            <Card>
              <div>
                <img src={`${folder}/${images4[i]}`} alt="characteristic" />
              </div>
              <div>
                <Title>{text4[i][0]}</Title>
                <div>{text4[i][1]}</div>
              </div>
            </Card>
          </Move>
        ))}
      </div>
    </PanelB1>
  )
}

const Title = styled.h1`
  font-family: 'Text Me One', sans-serif;
  font-size: 3.2rem;
  line-height: 1;
  text-align: center;
  margin: 0px;
  margin-bottom: 5px;
`

const PanelB1 = styled.div`
  width: 100%;
  background: #585858;
  padding: 100px 0px;
  display: flex;
  justify-content: center;

  & > div {
    max-width: 800px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    justify-items: center;

    grid-gap: 10px;
  }
`

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
  padding: 15px;
  margin: 15px;

  transition: color 0.5s ease, background 0.5s ease;
  background: #fff;
  color: #3d2c29; /* otherwise transitions are very slow due to react-spring */

  & img {
    margin-bottom: 10px;
    width: 50px;
    height: 50px;
  }

  & div {
    line-height: 1.3;
  }
`
