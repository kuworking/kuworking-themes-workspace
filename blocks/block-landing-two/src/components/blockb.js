import React from 'react'
import styled from '@emotion/styled'

export const BlockB = ({ attributes }) => {
  const { folder = '/', images = [], text = [] } = attributes

  return (
    <PanelB1>
      <div>
        <div>
          {text.map((t, i) => (
            <Card key={`card${i}`}>
              <div>
                <img src={`${folder}/${images[i]}`} alt="characteristic" />
              </div>
              <div>
                <Title>t[i][0]</Title>
                <div>t[i][1]</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </PanelB1>
  )
}

const Title = styled.h1`
  font-family: 'Text Me One', sans-serif;
  font-size: 2rem;
  line-height: 1;
  text-align: center;
  margin: 0px;
  margin-bottom: 5px;
`

const PanelB1 = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  width: 100%;
  background: #f5f5f5;
  padding: 100px 10px;

  & > div {
    max-width: 800px;
    width: 100%;

    & > div {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
      grid-gap: 5px;
    }
  }
`

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
  padding: 15px;

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
