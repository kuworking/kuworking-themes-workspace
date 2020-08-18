import React from 'react'
import styled from '@emotion/styled'
import { BImageSet, SPACE } from '@kuworking/methods'

export const BlockA = ({ folder }) => {
  const { innerWidth: width } = typeof window !== 'undefined' && window

  return (
    <PartA>
      <BImageSet
        image={{
          small: `${folder}/backgrounds/landing-one---800px.jpg`,
          '800px': `${folder}/backgrounds/landing-one---800px.jpg`,
          big: `${folder}/backgrounds/landing-one.jpg`,
        }}
      >
      <SPACE blk space="100px" />

        <Claim>Kuworking</Claim>

        <SPACE blk space="100px" />

        <PanelA2>
          <Emoji src={`${folder}/icons/arrow.svg`} alt="arrow" width={width > 600 ? 70 : 40} />
          <Emoji src={`${folder}/icons/arrow.svg`} alt="arrow" width={width > 600 ? 70 : 40} />
          <Emoji src={`${folder}/icons/arrow.svg`} alt="arrow" width={width > 600 ? 70 : 40} />
        </PanelA2>
      </BImageSet>
    </PartA>
  )
}

const Emoji = styled.img`
  width: ${props => props.width}px;
  height: ${props => props.width}px;
  margin-top: calc(${props => props.width}px - 100px);
`

const Claim = styled.h1`
  display: flex;
  justify-content: center;
  width: 100%;
  border-radius: 8px;
  text-align: center;
  width: fit-content;
  padding: 2px 5px 5px 5px;

  transition: background 0.5s ease;
`

const PanelA2 = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: 40px;

  & > img:nth-of-type(2) {
    opacity: 0.7;
  }
  & > img:nth-of-type(1) {
    opacity: 0.5;
  }
`

const PartA = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  width: 100%;
  & h1,
  & h2 {
    transition: color 0.5s ease;
    color: #ccc;
  }

  ${props => props.height !== 'none' && `max-height: ${props.height};`};
  min-height: 100vh;
  min-height: calc(var(--vh, 1vh) * 100);

  & > div {
    background-color: #ccc;
    background-blend-mode: unset;

    padding: 0px 5px;
  }

  & > .kw_bimg_simple {
    background-size: cover;
    background-position: center;
    display: grid;
    align-items: center;
    justify-items: center;
    height: 100%;
    width: 100%;
  }
`
