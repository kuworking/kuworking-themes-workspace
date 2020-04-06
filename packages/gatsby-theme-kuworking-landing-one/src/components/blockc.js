import React from 'react'
import styled from '@emotion/styled'

export const BlockC = () => (
  <>
    <PanelC1>
      <div>
        <img src="/icons/charac7.png" alt="characteristic" />
      </div>
      <div>
        <Title>New ways to evolve</Title>
        <div>Pre launch horsehead offer. High turnaround rate exposing</div>
      </div>
    </PanelC1>

    <PanelC2>
      <div>
        Your bones don't break, mine do. That's clear. Your cells react to bacteria and viruses differently than mine.
        You don't get sick, I do. That's also clear. But for some reason, you and I react the exact same way to water.
        We swallow it too fast, we choke. We get some in our lungs, we drown. However unreal it may seem, we are
        connected, you and I. We're on the same curve, just on opposite ends.
      </div>
      <div>
        Circle back staff engagement, or products need full resourcing and support from a cross-functional team in order
        to be built, maintained, and evolved red flag, or hire the best but all hands on deck and timeframe. What do you
        feel you would bring to the table if you were hired for this position gain traction or streamline, so t-shaped
        individual, back-end of third quarter
      </div>
    </PanelC2>
  </>
)

const Title = styled.h1``

const PanelC1 = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  align-items: center;
  max-width: 800px;
  width: 100%;

  & img {
    margin-bottom: 10px;
    width: 50px;
    height: 50px;
  }

  ${Title} {
    text-align: center;
    color: #f6f6f6;
    margin-bottom: 5px;
  }

  & div {
    line-height: 1.3;
    color: #f6f6f6;
  }
`
const PanelC2 = styled.div`
  margin-top: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  max-width: 800px;
  width: 100%;
`
