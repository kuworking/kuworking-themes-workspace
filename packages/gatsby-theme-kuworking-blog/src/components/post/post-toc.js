import React from 'react'
import styled from 'styled-components'

export const ToC = ({ content }) => {
  return (
    <Container>
      <ol>
        {content.map((el, i) => (
          <li key={'toc_' + i}>
            <a arial-label="indice de la entrada" href={`#${i}`}>
              {el.replace(/_/g, '')}
            </a>
          </li>
        ))}
      </ol>
    </Container>
  )
}

ToC.Anchor = ({ labels, index }) => (
  <span name={index}>
    {labels[index].split('_').map((el, i) => (i % 2 === 0 ? <span key={i}>{el}</span> : <em key={i}>{el}</em>))}
  </span>
)

const Container = styled.nav`
  font-family: 'Roboto Condensed';
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #000;
  border-radius: 8px;
  font-size: 1em;
  /*background: linear-gradient(to right, #b9b9b9 40%, #ff6744 40%);*/

  @media (max-width: 1100px) {
    margin: 0px 10px;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  @media (max-width: 600px) {
    font-size: 0.8em;
  }

  height: fit-content;
  padding: 10px 0px;
  margin: 20px 0px;

  & > div {
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
  }

  & ol {
    list-style-type: none;
    margin: 0;
    padding-left: 0px;
  }
  & li {
    width: 100%;
  }
  & a {
    text-decoration: none;
    cursor: pointer;
    font-size: 1.2em;
    color: #fff !important; /* post */
    background-color: #717171;
    padding: 0px 3px;
    transition: background-color 0.5s ease;
  }

  & a:hover {
    background-color: #000000 !important; /* post */
  }
`
