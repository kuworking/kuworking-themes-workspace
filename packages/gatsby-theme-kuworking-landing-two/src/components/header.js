import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { Sunny as Day } from 'emotion-icons/ion-md'
import { Moon as Night } from 'emotion-icons/fa-regular'
import { useColorMode } from 'theme-ui'
import { modes } from '../gatsby-plugin-theme-ui/index'
import { Switch } from 'gatsby-theme-kuworking-methods'

export const Header = ({ basePath, ShapeButton, typeOfGridButton }) => {
  return (
    <PartHeader>
      <Div>
        <Logo id="gtm_home_button" aria-label="inicio" to={basePath}>
          <img src="/icons/code.svg" alt="main" />
        </Logo>

        <Space />

        {typeOfGridButton}
        {ShapeButton}

        <Switch
          Day={Day}
          Night={Night}
          modes={modes}
          useColorMode={useColorMode}
          aria-label="Toggle color modes"
          dayColor="#fffa6a"
          nightColor="#5c40719c"
          style={{
            width: '30px',
            height: '30px',
            borderRadius: '8px',
          }}
        />
      </Div>
    </PartHeader>
  )
}

const q = px => `@media (min-width: ${px}px)`
// const qq = px => `@media (max-width: ${px}px)`

const PartHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: baseline;
  font-weight: 700;
  font-size: 1em;
  z-index: 100;
  position: fixed;
`

const Div = styled.div`
  width: 100%;
  min-height: 40px;

  display: flex;
  flex-direction: column;
  align-items: baseline;
  justify-content: flex-start;
  flex-wrap: nowrap;
  padding: 5px 5px 0px 5px;
  ${q(600)} {
    padding: 5px 0px 0px 0px;
  }
`

const Space = styled.div`
  flex-grow: 1;
`

const Logo = styled(Link)`
  cursor: pointer;
  display: flex;

  & > img {
    width: 40px;
    height: 40px;
    transition: filter 0.2s ease-in;
  }

  &:hover {
    & > img {
      filter: invert(1);
    }
  }
`
