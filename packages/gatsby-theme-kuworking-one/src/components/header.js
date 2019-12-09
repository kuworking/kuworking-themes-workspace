import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { Sunny as Day } from 'emotion-icons/ion-md'
import { Moon as Night } from 'emotion-icons/fa-regular'

import { Text, Switch } from 'gatsby-theme-kuworking-core'

export const Header = ({ basePath }) => (
  <Parent>
    <header>
      <Logo id="init" aria-label="inicio" to={basePath}>
        <div>{Text.header.logo}</div>
        <div>{Text.header.site}</div>
      </Logo>

      <Space />

      <Switch
        Day={Day}
        Night={Night}
        aria-label="Toggle color modes"
        styles={{
          width: '30px',
          height: '30px',
          borderRadius: '8px',
          dayColor: '#fffa6a',
          nightColor: '#5c40719c',
        }}
      />
    </header>
  </Parent>
)

const q = px => `@media (min-width: ${px}px)`

const Parent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: baseline;
  margin-top: 10px;
  margin-bottom: 20px;
  font-weight: 700;
  font-size: 1em;
  z-index: 1;
  ${q(400)} {
    font-size: 0.9em;
  }

  & > header {
    width: 100%;
    min-height: 40px;

    display: flex;
    justify-content: flex-start;
    flex-wrap: nowrap;
    align-items: center;
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
    ${q(700)} {
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
