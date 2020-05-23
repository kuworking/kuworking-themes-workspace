/** @jsx jsx */
import React from 'react'
import styled from '@emotion/styled'
import { jsx } from 'theme-ui'
import { TextLetterFade, BImageSet, Margin } from 'gatsby-theme-kuworking-methods'

export const BlockA = () => {
  return (
    <Part>
      <BImageSet
        image={{
          small: 'backgrounds/landing-two---400px.jpg',
          '400px': 'backgrounds/landing-two---400px.jpg',
          '800px': 'backgrounds/landing-two---800px.jpg',
          '1200px': 'backgrounds/landing-two---1200px.jpg',
          big: 'backgrounds/landing-two.jpg',
        }}
      >
        <PanelA1>
          <Claim
            sx={{
              fontSize: ['1.6rem', '2.0rem', '2.4rem'],
              '&&': { color: 'bigTitle' },
            }}
          >
            <TextLetterFade delay="500">Kuworking</TextLetterFade>
          </Claim>
          <Margin margin={[0, 0, 20]} />

          <Claim2
            sx={{
              fontSize: ['1.6rem', '2.0rem', '2.4rem'],
              '&&': { color: 'bigTitle' },
            }}
          >
            Aprender JavaScript, React, Gatsby y WordPress y no necesariamente en este orden
          </Claim2>
          <Margin margin={[0, 0, 20]} />
        </PanelA1>
      </BImageSet>
    </Part>
  )
}

const Part = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  width: 100%;
  & h1,
  & h2 {
    transition: color 0.5s ease;
  }

  min-height: 100vh;
  min-height: calc(var(--vh, 1vh) * 100);

  & .kw_bimg_simple {
    background-repeat: no-repeat;
    background-color: ${props => props.theme.colors.backgroundimg__color};
    background-blend-mode: ${props => props.theme.colors.backgroundimg__mode};
    background-size: cover;
    background-position: center;
    display: grid;
    align-items: center;
    justify-items: center;
    height: 100%;
    width: 100%;
  }
`

const PanelA1 = styled.div`
  max-width: 800px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
  justify-items: center;
  align-self: end;

  padding: 10px 0px 20px 0px;
`

const Claim = styled.div`
  border-radius: 8px;
  text-align: center;
  width: fit-content;
  padding: 2px 5px 5px 5px;
`
const Claim2 = styled.h1`
  border-radius: 8px;
  text-align: center;
  max-width: 600px;
  padding: 15px;
`
