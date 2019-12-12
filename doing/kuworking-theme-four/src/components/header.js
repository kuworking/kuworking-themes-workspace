import React from 'react'
import { Link } from 'gatsby'
import { useThemeUI } from 'theme-ui'
import styled from '@emotion/styled'

import { Text, Switch } from 'gatsby-theme-kuworking-core'

export const Header = ({ basePath, maxWidth, post }) => {
  const { theme } = useThemeUI()

  return (
    <>
      <Graphic id="particles-js" post={post} theme={theme}>
        <div>{Text.header.mainLogo}</div>
      </Graphic>

      <Parent maxWidth={maxWidth}>
        <header>
          <Logo id="init" aria-label="inicio" to={basePath}>
            <div>{Text.header.logo}</div>
            <div>{Text.header.site}</div>
          </Logo>

          <Space />

          <SwitchDiv>
            <Switch aria-label="Toggle color modes" />
          </SwitchDiv>
        </header>
      </Parent>
    </>
  )
}

const q = px => `@media (min-width: ${px}px)`

const Graphic = styled.div`
  background: ${props => props.theme.colors.header__div__background};
  width: 100%;
  justify-content: center;
  display: flex;
  color: #000;
  font-weight: 700;
  transition: background 0.5s ease, height 0.5s ease;
  display: flex;
  align-items: center;

  height: ${props => (props.post ? '200px' : '200px')};
  ${q(700)} {
    height: ${props => (props.post ? '200px' : '600px')};
  }

  font-size: ${props => (props.post ? '30vw' : '30vw')};
  ${q(400)} {
    font-size: ${props => (props.post ? '9em' : '30vw')};
  }
  ${q(700)} {
    font-size: ${props => (props.post ? '9em' : '15em')};
  }

  & > div {
    position: absolute;
  }
`

const Space = styled.div`
  width: 50px;
`

const SwitchDiv = styled.div``
const Logo = styled(Link)`
  cursor: pointer;
  color: #000;
  font-weight: 700;
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

const Parent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: baseline;
  font-weight: 700;
  font-size: 1em;
  z-index: 1;

  background: linear-gradient(to right, #e76b6b, #ff2525);

  ${q(400)} {
    font-size: 0.9em;
  }

  & > header {
    position: absolute;
    height: 40px;
    margin-top: -40px;
    max-width: ${props => props.maxWidth};
    width: 100%;

    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    padding: 0px 10px;

    ${SwitchDiv},
    ${Logo} {
      height: 40px;
      background: #ffffff57;
      padding: 10px 20px;
    }
  }
`
