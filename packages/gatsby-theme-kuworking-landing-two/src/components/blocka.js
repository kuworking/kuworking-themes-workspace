/** @jsx jsx */
import React from 'react'
import styled from '@emotion/styled'
import { jsx } from 'theme-ui'
import { Fade, TextLetterFade, CtaMain, BImg, Margin, q, qq } from 'gatsby-theme-kuworking-landing-two'

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
    <BImg
      image={[
        'backgrounds/landing-two.jpg',
        {
          '400px': 'backgrounds/landing-two---400px.jpg',
          '800px': 'backgrounds/landing-two---800px.jpg',
          '1200px': 'backgrounds/landing-two---1200px.jpg',
        },
      ]}
      component={backgroundImage}
    >
      <PanelA1 sx={{ variant: 'title' }}>
        <Claim>
          <TextLetterFade delay="500">Kuworking</TextLetterFade>
        </Claim>
        <Margin margin={[0, 0, 20]} />

        <Fade margin="-100px" toFrom="0" delay="1500" config={{ mass: 10, tension: 80, friction: 20 }}>
          <Claim2>Aprender JavaScript, React, Gatsby y WordPress y no necesariamente en este orden</Claim2>
        </Fade>
        <Margin margin={[0, 0, 20]} />

        <CtaMain text="Únete" />
        <Margin margin={[0, 0, 20]} />
      </PanelA1>
    </BImg>
  )
}

const PanelA1 = styled.div`
  max-width: 800px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
  justify-items: center;
  align-self: end;

  padding: 10px 0px 20px 0px;
  ${() => q(600)} {
    padding: 10px 100px 20px 100px;
  }
`

const Claim = styled.h1`
  border-radius: 8px;
  text-align: center;
  width: fit-content;
  padding: 2px 5px 5px 5px;

  transition: background 0.5s ease;
`
const Claim2 = styled.h2`
  border-radius: 8px;
  text-align: center;
  max-width: 600px;
  padding: 15px;

  transition: background 0.5s ease;
`
