import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

import { Text, Switch } from 'gatsby-theme-kuworking-core'

export const Header = ({ basePath, maxWidth }) => (
  <>
    <Graphic>
      {Text.header.mainLogo.split('').map((el, i) => (
        <Letter i={i} key={`text_logo_${i}`}>
          {el}
        </Letter>
      ))}
    </Graphic>
    <Parent maxWidth={maxWidth}>
      <header>
        <Logo id="init" aria-label="inicio" to={basePath}>
          <div>{Text.header.logo}</div>
          <div>{Text.header.site}</div>
        </Logo>

        <Space />

        <Switch aria-label="Toggle color modes" />
      </header>
    </Parent>
  </>
)

const q = px => `@media (min-width: ${px}px) {`

const Graphic = styled.div`
  background: linear-gradient(to right, #e76b6b, #ff2525);
  padding: 50px 0px;
  width: 100%;
  justify-content: center;
  display: flex;
  color: #fff;
  font-size: 25vw;
  ${q(500)} {
    font-size: 10em;
  }
`

const shadow = (l, r1, r2) =>
  Array.from({ length: l }).map((_, i) => `${r1 * i}px ${r2 * i}px 2px #000` + ((i < l - 1 && ',') || ''))
const random = () => Math.floor(Math.pow(10 * Math.random(), 1.6))
const randomOne = () => parseInt(10 * Math.random() * (Math.round(Math.random()) * 2 - 1)) / 10

const Letter = styled.div`
    animation: ${props => 'enlarge' + props.i} 0.2s steps(50) 1s 1 normal both;

    // prettier-ignore
    @keyframes enlarge${props => props.i} {
      0% {text-shadow: ${props => shadow(0)}}
      100% {text-shadow: ${props => {
        const r1 = randomOne()
        const r2 = randomOne()
        const l = 1 + random()
        return shadow(l, r1, r2)
      }}}
    }
`

const Parent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: baseline;
  font-weight: 700;
  font-size: 1em;
  z-index: 1;

  background: #000;

  & > header {
    width: ${props => props.maxWidth};
    min-height: 40px;

    display: flex;
    justify-content: flex-start;
    flex-wrap: nowrap;
    align-items: center;
    padding: 0px 10px;
  }
`

const Space = styled.div`
  flex-grow: 1;
`

const Logo = styled(Link)`
  cursor: pointer;
  color: #c5c5c5;
  font-weight: 400;
  padding: 10px;
  padding-left: 0px;
  border-radius: 2px;
  display: flex;
  align-self: stretch;

  text-decoration: none;
  font-style: normal;

  & > div {
    display: flex;
    align-items: center;
    height: 20px;
    padding: 0px 2px;
  }

  & > div:first-of-type {
    margin-right: 5px;
    background: #e0e0e0;
    border-radius: 2px;
    transition: background 0.5s ease-in, color 0.5s ease-in;
  }
  & > div:last-of-type {
    border-radius: 2px;
    transition: background 0.5s ease-in 0.1s, color 0.5s ease-in 0.1s;
    display: none;
    ${q(400)} {
      display: unset;
    }
  }

  &:hover {
    & > div:first-of-type {
      color: #dadada;
      background: #585858;
    }
    & > div:last-of-type {
      color: #f9f9f9;
      background: #ff5900;
    }
  }
`
