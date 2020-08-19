import React from 'react'
import styled from '@emotion/styled'
import { TextLetterFade, BImageSet, SPACE } from '@kuworking/methods'

export const BlockA = ({ attributes }) => {
  const { folder = '/', header_h1 = 'test', header_h2 = 'test' } = attributes

  return (
    <Part>
      <BImageSet
        image={{
          small: `${folder}/backgrounds/landing-two---400px.jpg`,
          '400px': `${folder}/backgrounds/landing-two---400px.jpg`,
          '800px': `${folder}/backgrounds/landing-two---800px.jpg`,
          '1200px': `${folder}/backgrounds/landing-two---1200px.jpg`,
          big: `${folder}/backgrounds/landing-two.jpg`,
        }}
      >
        <PanelA1>
          <Claim>
            <TextLetterFade delay="500">{header_h1}</TextLetterFade>
          </Claim>
          <SPACE blk space="20px" />

          <Claim2>{header_h2}</Claim2>
          <SPACE blk space="20px" />
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
    background-color: #fff;
    background-blend-mode: unset;
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
  font-size: 2.4rem;
  border-radius: 8px;
  text-align: center;
  width: fit-content;
  padding: 2px 5px 5px 5px;
`
const Claim2 = styled.h1`
  font-family: 'Text Me One', sans-serif;
  font-size: 2.4rem;
  line-height: 1;
  color: #fff;
  border-radius: 8px;
  text-align: center;
  max-width: 600px;
  padding: 15px;
`
