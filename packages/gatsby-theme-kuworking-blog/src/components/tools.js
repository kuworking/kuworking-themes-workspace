import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

export const KWTools = ({ main_maxwidth }) => (
  <Grid main_maxwidth={main_maxwidth}>
    <Container as="a" aria-label="Tool" href={'https://www.nomadlaptop.com'} color="#8e8e8e">
      <Title>NomadLAPTOP</Title>
      <Screenshot background='url("/tools/main-nomad-laptop.jpg")' />
    </Container>

    <Container aria-label="Tool" to={'/pomodoro'} color="#8e8e8e">
      <Title>POMODORO</Title>
      <Screenshot background='url("/tools/main-pomodoro.jpg")' />
    </Container>

    <Container aria-label="Tool" to={'/wallpapers'} color="#8e8e8e">
      <Title>WALLPAPERS</Title>
      <Screenshot background='url("/tools/main-wallpapers.jpg")' />
    </Container>

    <Container aria-label="Tool" to={'/grid-examples'} color="#8e8e8e">
      <Title>GRID-EXAMPLES</Title>
      <Screenshot background='url("/tools/main-grid-examples.jpg")' />
    </Container>

    <Container aria-label="Tool" to={'/font-inspiration'} color="#8e8e8e">
      <Title>FONT-INSPIRATION</Title>
      <Screenshot background='url("/tools/main-font-inspiration.jpg")' />
    </Container>

    <Container aria-label="Tool" to={'/css-gradients'} color="#8e8e8e">
      <Title>CSS-GRADIENTS</Title>
      <Screenshot background='url("/tools/main-css-gradients.jpg")' />
    </Container>

    <Container aria-label="Tool" to={'/css-transitions'} color="#8e8e8e">
      <Title>CSS-TRANSITIONS</Title>
      <Screenshot background='url("/tools/main-css-transitions.jpg")' />
    </Container>
  </Grid>
)

const device = {
  laptop: `(max-width: 1100px)`,
  mobile: `(max-width: 600px)`,
  mobileS: `(max-width: 400px)`,
}

const Grid = styled.div`
  font-size: 1em; /* redundant, except for related cards */
  margin-top: 50px;
  margin-bottom: 20px;
  max-width: ${props => props.main_maxwidth};
  width: 100%;
  z-index: 1;
  transition: padding 0.5s ease;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 100px));
  grid-column-gap: 10px; /* acts as the minimum */
  @media (max-width: 600px) {
    grid-template-columns: repeat(auto-fit, minmax(80px, 80px));
  }

  grid-row-gap: 25px;
  justify-content: space-between;

  @supports not (display: grid) {
    display: flex;
    flex-wrap: wrap;
  }
`

const Container = styled(Link)`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 80px;
  @media (max-width: 600px) {
    grid-template-rows: auto 60px;
  }

  align-content: flex-start;
  justify-items: center;
  color: unset;

  transition: box-shadow 0.2s ease, color 0.2s ease;

  box-shadow: 0px 2px 1px ${props => props.color};
  border: 2px solid ${props => props.color};
  border-radius: 8px;
  overflow: hidden;

  &:hover {
    box-shadow: 0px 4px 1px ${props => props.color};
  }

  @supports not (display: grid) {
    max-width: 100px;
    width: 100%;
    margin: 5px 2px;
  }
`

const Title = styled.h1`
  color: #000;

  margin-block-start: unset;
  margin-block-end: unset;
  margin-inline-start: unset;
  margin-inline-end: unset;

  font-family: 'Roboto Condensed';
  font-weight: 700;
  line-height: 1.1em;
  font-size: 0.8em;
  letter-spacing: -0.5px;
  @media (max-width: 600px) {
    font-size: 0.7em;
    letter-spacing: -1px;
  }

  transition: font-size 0.2s ease 0s, color 0.2s ease 0s, background-color 0.2s ease 0s;
`

const Screenshot = styled.div`
  background-image: ${props => props.background};
  background-repeat: no-repeat;
  background-size: cover;
  background-size: contain;
  background-position-x: center;

  min-width: 50px; /* to prevent giant images when display:grid is not supported */
  min-height: 50px; /* to prevent giant images when display:grid is not supported */
  width: 100%;
  height: 99%;
`
