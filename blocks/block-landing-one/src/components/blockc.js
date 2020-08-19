import React from 'react'
import styled from '@emotion/styled'
import { Fade, SPACE, q, qq } from '@kuworking/methods'

export const BlockC = ({ attributes }) => {
  const { folder = '/', text3 = [], images3 = [] } = attributes

  const { innerWidth: width } = typeof window !== 'undefined' && window
  const config = { mass: 5, tension: 2000, friction: 200 }

  return (
    <PanelA2>
      <SPACE blk space="50px" />

      <div>
        {text3.map((t, i) => (
          <Fade key={`key3${i}`} delay={width > 600 ? 500 + i * 100 : 100} config={config}>
            <Card>
              {images3[i] && (
                <div>
                  <img src={`${folder}/${images3[i]}`} alt="icon" />
                </div>
              )}
              <div>
                <Title>{text3[i][0]}</Title>
                <div>{text3[i][1]}</div>
              </div>
            </Card>
          </Fade>
        ))}
      </div>

      <SPACE blk space="50px" />
    </PanelA2>
  )
}

const Title = styled.h1`
  font-family: 'Text Me One', sans-serif;
  font-size: 3.2rem;
  text-align: center;
  margin: 0px;
  margin-bottom: 5px;
  font-weight: 700;
  line-height: 1;
`

const PanelA2 = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  max-width: 800px;
  width: 100%;

  & > div {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 8px;
    ${() => q(600)} {
      grid-gap: 20px;
    }

    align-items: start;
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
  color: #3d2c29;
  background: #fff;

  & img {
    margin-bottom: 10px;
    width: 50px;
    height: 50px;
  }

  & div {
    line-height: 1.3;
  }
`
