import React from 'react'
import styled from '@emotion/styled'

export const Header = ({ content: [header_h1, header_h2_0, header_h2_1] }) => (
  <Container>
    <Div onClick={() => (window.location = '/')}>
      <h1>{header_h1}</h1>
      <h2>{header_h2_0}</h2>
      <h2>{header_h2_1}</h2>
    </Div>
  </Container>
)

const Container = styled.div`
  min-height: 100vh;
  min-height: calc(var(--vh, 1vh) * 100);
  display: flex;
  flex-direction: column;
  align-self: center;
  flex-grow: 1;
  justify-content: center;

  background-color: #f36451;
  font-family: 'Handlee', handwriting;
  font-size: 14px;
`

const Div = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  color: #fff;

  && h1,
  && h2,
  && h3,
  && h4,
  && h5 {
    line-height: 1;
    margin-top: 0;
    margin-bottom: 0;
  }

  && > h1 {
    text-align: center;
    font-size: 80px;
    font-weight: 900;
    width: auto;
    margin: 40px 0px 0px 0px;
  }

  && > h2:first-of-type {
    margin-top: 10px;
  }
`