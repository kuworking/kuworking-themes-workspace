import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

export const Categories = ({ main_maxwidth, type_images, tag }) => {
  let inactive = ['electron', 'react', 'wordpress']
  const [showing, setShowing] = useState(0)

  useEffect(() => {
    let stillMounted = true
    stillMounted && setShowing(1)
    return function cancelFetch() {
      stillMounted = false
    }
  }, []) // only run once

  const cursos_type_url = type_images.filter(({ node }) => node.name === 'cursos')[0].node.publicURL

  return (
    <Grid main_maxwidth={main_maxwidth}>
      <CourseContainer
        showing={showing}
        main_category={tag === 'cursos' ? 1 : 0}
        inactive={0}
        key="cat_courses"
        aria-label="kuworking courses"
        to="/tags/cursos"
        background="linear-gradient(to right, rgb(255, 95, 109), rgb(255, 195, 113));"
      >
        <Title>CURSOS</Title>
        <Image alt="icono cursos" src={cursos_type_url} />
      </CourseContainer>

      {type_images
        .filter(({ node }) => node.name !== 'cursos')
        .map(({ node }, i) => (
          <Container
            showing={showing}
            main_category={node.name === tag ? 1 : 0}
            inactive={inactive.includes(node.name) ? 1 : 0}
            key={'cat ' + i}
            aria-label={node.name}
            to={'/tags/' + node.name}
            background="linear-gradient(to right, rgb(255, 95, 109), rgb(255, 195, 113));"
          >
            <Title>{node.name}</Title>
            <Image alt={'icono ' + node.name} src={node.publicURL} />
          </Container>
        ))}
    </Grid>
  )
}

const device = {
  laptop: `(max-width: 1100px)`,
  mobile: `(max-width: 600px)`,
  mobileS: `(max-width: 400px)`,
}

const Grid = styled.div`
  font-size: 1em;
  max-width: ${props => props.main_maxwidth};
  width: 100%;
  z-index: 1;
  transition: width 0.5s ease;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(60px, 60px));
  justify-content: space-between;
  margin-bottom: 20px;

  grid-column-gap: 5px; /* acts as the minimum */
  grid-row-gap: 5px;
  @media ${device.mobile} {
    grid-template-columns: repeat(auto-fit, minmax(40px, 40px));
  }
  @media ${device.mobileS} {
    grid-template-columns: repeat(auto-fit, minmax(35px, 35px));
  }

  @supports not (display: grid) {
    display: flex;
    flex-wrap: wrap;
  }
`

const Container = styled(Link)`
  pointer-events: ${props => (props.inactive ? 'none' : 'unset')};
  ${props =>
    props.main_category
      ? `border: 2px solid #8e8e8e;
  box-shadow: 0px 4px 1px #8e8e8e !important;`
      : ''}

  align-self: flex-start;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  align-content: flex-start;
  justify-items: center;
  color: #fff;

  transition: opacity 0.5s ease, color 0.5s ease, box-shadow 0.2s ease;

  background: #ccc;
  border-radius: 8px;
  box-shadow: 0px 0px 0px #ffffff00;
  opacity: ${props => (props.showing ? (props.inactive ? '0.2' : '1') : '0')};

  &:hover {
    color: #000;
    box-shadow: 0px 4px 1px #8e8e8e;
  }

  @supports not (display: grid) {
    max-width: 60px;
    width: 100%;
    margin: 5px 2px;
  }
`
const CourseContainer = styled(Container)`
  background: #423d24;
  box-shadow: 4px 4px 1px #8e8e8e;
  &:hover {
    box-shadow: 4px 4px 1px #8e8e8e, 4px 8px 1px #8e8e8e;
  }
  & > div {
    font-weight: 700 !important;
  }
`

const Title = styled.div`
  font-family: 'Roboto Condensed';
  text-transform: capitalize;
  font-weight: 400;
  font-size: 0.8em;
  margin: 5px 0px;
  letter-spacing: -0.5px;
  overflow: hidden;

  @media ${device.mobileS} {
    font-size: calc(0.6em);
  }
`
const Image = styled.img`
  max-width: 75px; /* to prevent giant images when display:grid is not supported */
  width: 100%;
  border-radius: 0px 0px 8px 8px;
`
