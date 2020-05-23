/** @jsx jsx */
import React from 'react'
import styled from '@emotion/styled'
import { jsx } from 'theme-ui'
import { Fade, Margin, q, qq } from 'gatsby-theme-kuworking-methods'

export const BlockC = () => {
  const { innerWidth: width } = typeof window !== 'undefined' && window
  const config = { mass: 5, tension: 2000, friction: 200 }

  return (
    <PanelA2>
      <Margin margin={[100]} />

      <div>
        <Fade delay={width > 600 ? 500 : 100} config={config}>
          <Card>
            <div>
              <img src="/icons/pencil.svg" alt="pencil" />
            </div>
            <div>
              <Title>We need more</Title>
              <div>
                We exceed the clients' expectations there are more projects lined up charge extra the next time, nor we
                exceed the clients' expectations.
              </div>
            </div>
          </Card>
        </Fade>
        <Fade delay={width > 600 ? 600 : 100} config={config}>
          <Card>
            <div>
              <img src="/icons/network.svg" alt="pencil" />
            </div>
            <div>
              <Title>Brigadier</Title>
              <div>
                This is our north star design. It's not hard guys run it up the flag pole so pre launch we don't need to
                boil the ocean here vertical integration
              </div>
            </div>
          </Card>
        </Fade>
        <Fade delay={width > 600 ? 700 : 100} config={config}>
          <Card>
            <div>
              <img src="/icons/microphone.svg" alt="pencil" />
            </div>
            <div>
              <Title>Everything bigger</Title>
              <div>
                Change the color theme of the website. Can my website be in english? we try your eye, but can you change
                everything?
              </div>
            </div>
          </Card>
        </Fade>

        <Fade delay={width > 600 ? 700 : 100} config={config}>
          <Card>
            <div>
              <Title>Maximize Timely</Title>
              <div>European minnow priapumfish mosshead warbonnet shrimpfish bigscale. Cutlassfish</div>
            </div>
          </Card>
        </Fade>

        <Fade delay={width > 600 ? 700 : 100} config={config}>
          <Card>
            <div>
              <Title>Cutlassfish </Title>
              <div>Efficiently unleash cross-media information without cross-media value. Quickly maximize timely</div>
            </div>
          </Card>
        </Fade>

        <Fade delay={width > 600 ? 700 : 100} config={config}>
          <Card>
            <div>
              <Title>Godfather </Title>
              <div>
                Climb leg rub face on everything give attitude nap all day for under the bed. Chase mice attack feet but
              </div>
            </div>
          </Card>
        </Fade>
      </div>

      <Margin margin={[100]} />
    </PanelA2>
  )
}

const Title = styled.h1``

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
  color: ${props => props.theme.colors.text};
  background: ${props => props.theme.colors.cards__background};

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
