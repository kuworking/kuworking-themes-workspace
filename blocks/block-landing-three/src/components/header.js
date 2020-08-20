import React from 'react'
import styled from '@emotion/styled'
import facepaint from 'facepaint'

export const Header = ({ gutenberg, content: [header_h1, header_h2_0, header_h2_1] }) => (
  <Container gutenberg={gutenberg}>
    <Div>
      <h1>{header_h1}</h1>
      <h2>{header_h2_0}</h2>
      <h2>{header_h2_1}</h2>
    </Div>
  </Container>
)

const mq = facepaint([
  '@media(min-width: 25em)', // 400px
  '@media(min-width: 37.5em)', //  600px
])

const Container = styled.div`
  ${props =>
    props.gutenberg ||
    `
  min-height: 100vh;
  min-height: calc(var(--vh, 1vh) * 100);`}

  display: flex;
  flex-direction: column;
  align-self: center;
  flex-grow: 1;
  justify-content: center;

  background-color: #f36451;
  font-family: 'Handlee', cursive;
  font-size: 1.4rem;
`

const Div = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: #fff;

  && h1,
  && h2 {
    font-family: 'Handlee', cursive;
    line-height: 1;
    margin: 0px;
  }

  && > h1 {
    text-align: center;
    font-size: 8rem;
    ${mq({
      fontSize: ['5rem', '8rem'],
    })}
    font-weight: 900;
    width: auto;
    margin: 40px 0px 0px 0px;
  }

  && > h2:first-of-type {
    margin-top: 10px;
  }
`
