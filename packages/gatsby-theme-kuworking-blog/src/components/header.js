import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

export const Top = ({ tags_grid, main_maxwidth }) => (
  <Parent main_maxwidth={main_maxwidth}>
    <header>
      <MenuKW id="init" aria-label="inicio" to="/">
        <div>kuworking.com</div>
      </MenuKW>

      <Space />

      <MenuProfile>
        <Link to="/contactar">Contactar</Link>
      </MenuProfile>
    </header>
  </Parent>
)

const device = {
  laptop: `(max-width: 1100px)`,
  mobile: `(max-width: 600px)`,
  mobileS: `(max-width: 400px)`,
}

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
  @media ${device.mobileS} {
    font-size: 0.9em;
  }

  & > header {
    max-width: ${props => props.main_maxwidth};
    width: 100%;
    min-height: 40px;
    padding: 0px 10px;

    display: flex;
    justify-content: flex-start;
    flex-wrap: nowrap;
    align-items: center;
  }
`

const Space = styled.div`
  flex-grow: 1;
`

const Menu = styled.div`
  cursor: pointer;
  color: #999;
  font-family: 'Open Sans';
  font-weight: 700;
  padding: 10px;
  @media ${device.mobile} {
    padding: 0px;
  }

  & > a {
    transition: color 0.5s ease-in;
    text-decoration: none;
    font-style: normal;
    color: unset;
  }
`

const textShadow = (num, color) => {
  let shadow = []
  Array.from(Array(num)).forEach((el, i) => shadow.push(`-${i}px ${i}px ${color}`))
  return shadow.join(',')
}

const MenuKW = styled(Link)`
  cursor: pointer;
  color: #ff5900;
  font-family: 'Open Sans';
  font-weight: 700;
  padding: 10px;

  padding: 5px;
  border-radius: 2px;
  display: flex;
  align-self: stretch;

  text-decoration: none;
  font-style: normal;

  transition: background-color 0.5s ease-in, color 0.5s ease-in;
  &:hover {
    color: #666;
    background-color: #ececec;
  }

  & > div {
    display: flex;
    font-weight: 700;
    align-items: center;
  }
`

const MenuProfile = styled(Menu)`
  & > a {
    padding: 5px;
    border-radius: 8px;
    color: #fff;
    background-color: #45bcff;
    transition: background-color 0.5s ease 0s;

    &:hover {
      background-color: #666;
    }
  }
`
const MenuLogOut = styled(MenuProfile)`
  & > a {
    background-color: #ababab;
  }
`

const MenuCTA = styled(Menu)`
  & > a {
    padding: 5px;
    background-color: #4ba7de;
    color: #fff;
    border-radius: 8px;
    transition: box-shadow 0.1s ease-in 0s;
    box-shadow: 0px 4px 0px #000;

    &:hover {
      box-shadow: 0px 8px 0px #000;
    }
  }
`
