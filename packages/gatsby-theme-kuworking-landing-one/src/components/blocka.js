/** @jsx jsx */
import React from 'react'
import styled from '@emotion/styled'
import { jsx } from 'theme-ui'
import { Fade, TextZoom, BImg, Margin, q, qq } from 'gatsby-theme-kuworking-landing-one'

export const BlockA = () => {
  const backgroundImage = `
  background-size: cover;
  background-position: center;
  display: grid;
  align-items: center;
  justify-items: center;
  height: 100%;
  width: 100%;
  `
  const { innerWidth: width } = typeof window !== 'undefined' && window

  return (
    <>
      <BImg
        image={[
          'backgrounds/landing-one.jpg',
          {
            '800px': 'backgrounds/landing-one---800px.jpg',
            '1200px': 'backgrounds/landing-one---1200px.jpg',
          },
        ]}
        component={backgroundImage}
      >
        <Margin margin={[100]} />

        <PanelA1 sx={{ variant: 'title' }}>
          <Claim>
            <TextZoom view={false} delay="2000">
              Kuworking
            </TextZoom>
          </Claim>
        </PanelA1>

        <Margin margin={[100]} />

        <PanelA2>
          <div>
            <Fade view={false} delay={width > 600 ? 1000 : 200}>
              <Card>
                <div>
                  <img src="/icons/pencil.svg" alt="pencil" />
                </div>
                <div>
                  <Title>We need more</Title>
                  <div>
                    We exceed the clients' expectations there are more projects lined up charge extra the next time, nor
                    we exceed the clients' expectations.
                  </div>
                </div>
              </Card>
            </Fade>
            <Fade view={false} delay={width > 600 ? 1300 : 200}>
              <Card>
                <div>
                  <img src="/icons/network.svg" alt="pencil" />
                </div>
                <div>
                  <Title>Brigadier</Title>
                  <div>
                    This is our north star design. It's not hard guys run it up the flag pole so pre launch we don't
                    need to boil the ocean here vertical integration
                  </div>
                </div>
              </Card>
            </Fade>
            <Fade view={false} delay={width > 600 ? 1600 : 200}>
              <Card>
                <div>
                  <img src="/icons/microphone.svg" alt="pencil" />
                </div>
                <div>
                  <Title>Everything bigger</Title>
                  <div>
                    Change the color theme of the website. Can my website be in english? we try your eye, but can you
                    change everything?
                  </div>
                </div>
              </Card>
            </Fade>
          </div>
        </PanelA2>
      </BImg>
    </>
  )
}

const Title = styled.h1``

const PanelA1 = styled.div`
  max-width: 800px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
  justify-items: center;
`
const PanelA2 = styled.div`
  max-width: 800px;
  width: 100%;

  & > div {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    grid-gap: 8px;
    ${() => q(600)} {
      grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
      grid-gap: 20px;
    }

    align-items: start;
  }
`

const Claim = styled.h1`
  border-radius: 8px;
  text-align: center;
  width: fit-content;
  padding: 2px 5px 5px 5px;

  transition: background 0.5s ease;
`

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
  padding: 15px;

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
