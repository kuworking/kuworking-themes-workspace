/** @jsx jsx */
import React from 'react'
import styled from '@emotion/styled'
import { jsx } from 'theme-ui'
import { BImageSet, Margin } from 'gatsby-theme-kuworking-methods'

export const BlockA = () => {
  const { innerWidth: width } = typeof window !== 'undefined' && window

  return (
    <PartA>
      <BImageSet
        image={{
          small: 'backgrounds/landing-one---800px.jpg',
          '800px': 'backgrounds/landing-one---800px.jpg',
          big: 'backgrounds/landing-one.jpg',
        }}
      >
        <Margin margin={[100]} />

        <Claim
          sx={{
            fontSize: ['6.0rem', '7.5rem', '15.0rem'],
            fontFamily: 'special',
            '&&': { color: 'bigTitle' },
          }}
        >
          Kuworking
        </Claim>

        <Margin margin={[100]} />

        <PanelA2>
          <Emoji src="/icons/arrow.svg" alt="arrow" width={width > 600 ? 70 : 40} />
          <Emoji src="/icons/arrow.svg" alt="arrow" width={width > 600 ? 70 : 40} />
          <Emoji src="/icons/arrow.svg" alt="arrow" width={width > 600 ? 70 : 40} />
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
    color: ${props => props.theme.colors.title};
  }

  ${props => props.height !== 'none' && `max-height: ${props.height};`};
  min-height: 100vh;
  min-height: calc(var(--vh, 1vh) * 100);

  & > div {
    background-color: ${props => props.theme.colors.backgroundimg__color};
    background-blend-mode: ${props => props.theme.colors.backgroundimg__mode};

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
