import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { Sunny as Day } from 'emotion-icons/ion-md'
import { Moon as Night } from 'emotion-icons/fa-regular'
import { useColorMode } from 'theme-ui'
import { modes } from '../gatsby-plugin-theme-ui/index'
import { Switch, Fade } from 'gatsby-theme-kuworking-landing-one'

export const Header = ({ basePath, ShapeButton, typeOfGridButton }) => {
  return (
    <Div>
      <Fade delay="1500" view={false}>
        <Logo id="init" aria-label="inicio" to={basePath}>
          <img src="/icons/code.svg" alt="main" />
        </Logo>
      </Fade>

      <Space />

      {typeOfGridButton}
      {ShapeButton}

      <Fade delay="1500" view={false}>
        <Switch
          Day={Day}
          Night={Night}
          modes={modes}
          useColorMode={useColorMode}
          aria-label="Toggle color modes"
          styles={{
            width: '30px',
            height: '30px',
            borderRadius: '8px',
            dayColor: '#fffa6a',
            nightColor: '#5c40719c',
          }}
        />
      </Fade>
    </Div>
  )
}

const q = px => `@media (min-width: ${px}px)`
// const qq = px => `@media (max-width: ${px}px)`

const Div = styled.div`
  max-width: 800px;
  width: 100%;
  min-height: 40px;

  display: flex;
  justify-content: flex-start;
  flex-wrap: nowrap;
  align-items: center;
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
  align-self: center;

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
