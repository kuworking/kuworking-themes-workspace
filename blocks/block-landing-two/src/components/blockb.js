import React from 'react'
import styled from '@emotion/styled'

export const BlockB = ({ folder }) => (
  <PanelB1>
    <div>
      <div>
        <Card>
          <div>
            <img src={`${folder}/icons/charac1.svg`} alt="characteristic" />
          </div>
          <div>
            <Title>Teletubbies in here?</Title>
            <div>Have I ever led you astray?</div>
          </div>
        </Card>
        <Card>
          <div>
            <img src={`${folder}/icons/charac2.svg`} alt="characteristic" />
          </div>
          <div>
            <Title>No? Well</Title>
            <div>Turn the crank first-order optimal strategies</div>
          </div>
        </Card>
        <Card>
          <div>
            <img src={`${folder}/icons/charac3.png`} alt="characteristic" />
          </div>
          <div>
            <Title>Have faith</Title>
            <div>So a better understanding of usage can aid in</div>
          </div>
        </Card>
        <Card>
          <div>
            <img src={`${folder}/icons/charac4.svg`} alt="characteristic" />
          </div>
          <div>
            <Title>Drawing-board</Title>
            <div>Post launch window-licker net net or please advise soonest</div>
          </div>
        </Card>
        <Card>
          <div>
            <img src={`${folder}/icons/charac5.svg`} alt="characteristic" />
          </div>
          <div>
            <Title>Pull in ten</Title>
            <div>For collaboration through advanced technlogy</div>
          </div>
        </Card>
        <Card>
          <div>
            <img src={`${folder}/icons/charac6.svg`} alt="characteristic" />
          </div>
          <div>
            <Title>To be inspired</Title>
            <div>extra bodies to help roll the tortoise this is our north star</div>
          </div>
        </Card>
        <Card>
          <div>
            <img src={`${folder}/icons/charac7.png`} alt="characteristic" />
          </div>
          <div>
            <Title>Meeting with Phil</Title>
            <div>Have I ever led you astray?</div>
          </div>
        </Card>
      </div>
    </div>
  </PanelB1>
)

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
