import React, { useState, useRef, useEffect } from 'react'
import styled from '@emotion/styled'

import {
  Box,
  Fade,
  Toggle,
  Move,
  LetterFade,
  LetterFade2,
  Zoom,
  ZoomPanic,
  Show,
  Peek,
  Shadow,
  CtaMain,
  GridCard,
} from 'gatsby-theme-kuworking-landing-one'

export const Grid = ({ blogGrid: { core, posts } }) => {
  return (
    <Main>
      <PanelA>
        <Claim>Diseño para Landings</Claim>
        <Fade>
          <GridCard>
            Have faith, Brigadier. Have I ever led you astray? Logic, my dear Zoe, merely enables one to be wrong with
            authority. I don't like it. Oh, my giddy aunt! Renewed? Have I? That's it, I've been renewed. It's part of
            the TARDIS. Without it I couldn't survive. Do try and keep out of my way in future and in past, there's a
            good fellow. The time continuum should be big enough for the both of us. People spend all their time making
            nice things and then other people come along and break them! This stuff, or whoever sent it, is cleverer
            than we are. Unfortunate, isn't it?
          </GridCard>
        </Fade>
      </PanelA>

      <PanelB>
        <Claim>Diseño para Landings</Claim>
        <Toggle margin="-45%">
          <div style={{ fontSize: '8em', width: 'fit-content' }}>🤯</div>
        </Toggle>
        <Box
          component={`
          height: 100px;
          overflow: hidden;
          `}
          subcomponent={`
          border: 1px solid #ccc;
          border-radius: 8px;
          padding: 10px;
          height: 100%;
          background: linear-gradient(45deg, white, transparent);
          overflow: hidden;
        `}
        >
          <div>JS</div>
        </Box>
      </PanelB>

      <PanelC>
        <Claim>Diseño para Landings</Claim>
        <Move>
          Have faith, Brigadier. Have I ever led you astray? Logic, my dear Zoe, merely enables one to be wrong with
          authority. I don't like it. Oh, my giddy aunt! Renewed? Have I? That's it, I've been renewed. It's part of the
          TARDIS. Without it I couldn't survive. Do try and keep out of my way in future and in past, there's a good
          fellow. The time continuum should be big enough for the both of us. People spend all their time making nice
          things and then other people come along and break them! This stuff, or whoever sent it, is cleverer than we
          are. Unfortunate, isn't it?
        </Move>
      </PanelC>

      <Title>LetterFade</Title>
      <LetterFade>
        <Message>Have faith, Brigadier.</Message>
      </LetterFade>

      <Title>LetterFade2</Title>
      <LetterFade2>
        <Message>Have faith, Brigadier.</Message>
      </LetterFade2>

      <Title>Zoom</Title>
      <Zoom>
        <Message>Have faith, Brigadier.</Message>
      </Zoom>

      <Title>Show</Title>
      <Show>
        <Message>Have faith, Brigadier.</Message>
      </Show>

      <Title>ZoomPanic</Title>
      <ZoomPanic>
        <Message>Have faith, Brigadier.</Message>
      </ZoomPanic>

      <Title>Peek</Title>
      <Peek>
        <Message>Have faith, Brigadier.</Message>
      </Peek>

      <Title>Shadow</Title>
      <Shadow>
        <Message>Have faith, Brigadier.</Message>
      </Shadow>

      <Title>Shadow persistent</Title>
      <Shadow persistent={true}>
        <Message>Have faith, Brigadier.</Message>
      </Shadow>
    </Main>
  )
}

const Main = styled.div`
  & > div {
    transition: all 2s ease;
  }
`

const Message = styled.div`
  width: 800px;
`

const Title = styled.h1`
  margin-top: 100px;
`

const PanelA = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  padding: 0px 100px 300px 0px;
  height: 100vh;
`
const PanelB = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  background: #fae8e8;
  padding: 80px 100px;
`
const PanelC = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: start;
  background: #4e4b4b;
  color: #fff;
  padding: 80px 100px;
  height: 100vh;
`

const Claim = styled.h1`
  font-size: 4em;
  text-align: center;
`

const Divider = styled.div`
  height: 2px;
  width: 100%;
  box-shadow: 0px 1px 0px #e6e6e6, 0px 2px 0px #bfbfbf;
  margin: 50px 0px;
`
