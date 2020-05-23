import React from 'react'
import styled from '@emotion/styled'
import { Move } from 'gatsby-theme-kuworking-methods'

export const BlockD = () => {
  const { innerWidth: width } = typeof window !== 'undefined' && window
  const direction = width > 600 ? 'top' : 'left'

  return (
    <PanelB1>
      <div>
        <Move type={direction} delay="200">
          <Card>
            <div>
              <img src="/icons/charac1.svg" alt="characteristic" />
            </div>
            <div>
              <Title>Teletubbies in here?</Title>
              <div>Have I ever led you astray?</div>
            </div>
          </Card>
        </Move>

        <Move type={direction} delay="200">
          <Card>
            <div>
              <img src="/icons/charac2.svg" alt="characteristic" />
            </div>
            <div>
              <Title>No? Well</Title>
              <div>Turn the crank first-order optimal strategies</div>
            </div>
          </Card>
        </Move>

        <Move type={direction} delay="200">
          <Card>
            <div>
              <img src="/icons/charac3.png" alt="characteristic" />
            </div>
            <div>
              <Title>Have faith</Title>
              <div>So a better understanding of usage can aid in</div>
            </div>
          </Card>
        </Move>

        <Move type={direction} delay="200">
          <Card>
            <div>
              <img src="/icons/charac4.svg" alt="characteristic" />
            </div>
            <div>
              <Title>Drawing-board</Title>
              <div>Post launch window-licker net net or please advise soonest</div>
            </div>
          </Card>
        </Move>

        <Move type={direction} delay="200">
          <Card>
            <div>
              <img src="/icons/charac5.svg" alt="characteristic" />
            </div>
            <div>
              <Title>Pull in ten</Title>
              <div>For collaboration through advanced technlogy</div>
            </div>
          </Card>
        </Move>

        <Move type={direction} delay="200">
          <Card>
            <div>
              <img src="/icons/charac6.svg" alt="characteristic" />
            </div>
            <div>
              <Title>To be inspired</Title>
              <div>extra bodies to help roll the tortoise this is our north star</div>
            </div>
          </Card>
        </Move>

        <Move type={direction} delay="200">
          <Card>
            <div>
              <img src="/icons/charac7.png" alt="characteristic" />
            </div>
            <div>
              <Title>Meeting with Phil</Title>
              <div>Have I ever led you astray?</div>
            </div>
          </Card>
        </Move>
      </div>
    </PanelB1>
  )
}

const Title = styled.h1``

const PanelB1 = styled.div`
  width: 100%;
  background: ${props => props.theme.colors.bloc2__background};
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
  background: ${props => props.theme.colors.cards__background};
  color: ${props => props.theme.colors.text}; /* otherwise transitions are very slow due to react-spring */

  & img {
    margin-bottom: 10px;
    width: 50px;
    height: 50px;
  }

  ${Title} {
    text-align: center;
    margin-bottom: 5px;
  }

  & div {
    line-height: 1.3;
  }
`
