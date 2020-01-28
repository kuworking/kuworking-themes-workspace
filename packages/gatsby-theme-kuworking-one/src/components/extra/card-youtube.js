import React from 'react'
import styled from '@emotion/styled'
import { Youtube } from 'gatsby-theme-kuworking-one'

export const CardYoutube = ({ src, text = '' }) => {
  const component = `
    width: 100%;
    height: 300px;
    border: none;
    ${q(500)} {
      height: 100%;
    }
  `

  return (
    <Container>
      <Youtube component={component} src={src} />
    </Container>
  )
}

const q = px => `@media (min-width: ${px}px)`

const Container = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  grid-template-rows: 300px;
  ${q(500)} {
    grid-template-rows: 400px;
  }
  align-content: flex-start;
  margin: ${props => (props.grid === 'yes' ? '0' : '50px 0px')};

  border: 1px solid ${props => props.theme.colors.cards__border};
  background: ${props => props.theme.colors.cards__background};
  padding: 3px;
  border-radius: 3px;
`
