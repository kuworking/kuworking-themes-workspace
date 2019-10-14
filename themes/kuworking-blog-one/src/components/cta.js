import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

// use span and not h1 to prevent in posts to change styling
export const CtaMain = ({ main_maxwidth }) => (
  <CtaMainSuscribe main_maxwidth={main_maxwidth}>
    <div>
      <span>
        <em>CURSOS ONLINE</em> para que emprendas siendo tu el <em>desarrollador</em>
      </span>
      <span>
        - Te enseño a <em>implementar y desarrollar webs</em> con JavaScript, Gatsby y WordPress
      </span>
      <span>- Esto te servirá para que puedas validar ideas rápido y decidir si escalar o no</span>
      <span>- Y siendo desarrollador, todo es mucho más fácil </span>
      <CtaMainSuscribeButton to="/suscribirse">
        Suscribirse [ <em>8 EUR / mes</em> ]
      </CtaMainSuscribeButton>
    </div>
  </CtaMainSuscribe>
)

export const CtaPosts = ({ main_maxwidth }) => <CtaMain main_maxwidth={main_maxwidth} />

const device = {
  laptop: `(max-width: 1100px)`,
  mobile: `(max-width: 600px)`,
  mobileS: `(max-width: 400px)`,
}

const CtaMainSuscribe = styled.div`
  font-size: 1rem !important; /* posts */
  max-width: ${props => props.main_maxwidth};
  width: 100%;
  margin-bottom: 30px;

  display: flex;
  justify-content: center;
  line-height: 1 !important; /* posts */

  & > div {
    /* I need the div to add margins in responsive designs */
    font-size: 1rem; /* to prevent posts to alter font-size of cta */

    max-width: ${props => props.main_maxwidth};
    width: 100%;
    transition: padding 0.5s ease;
    transition: margin-top 0.5s ease;

    display: flex !important; /* posts */
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    border-radius: 8px;
    background-color: #e4e4e4;
    color: #000;

    margin-top: 30px;
    padding: 10px 20px 30px 20px;
    @media ${device.laptop} {
      margin-top: 10px;
      padding-left: 10px;
      padding-right: 10px;
    }

    & > span:first-child {
      font-family: 'Roboto Condensed';
      font-weight: 700;
      letter-spacing: -1.5px;
      font-size: 2em;
      @media ${device.mobile} {
        font-size: 1.8em;
      }
      @media ${device.mobileS} {
        font-size: 1.6em;
      }

      cursor: pointer;
      text-decoration: none;

      border-radius: 2px;
      color: #000;

      margin-top: 15px;

      transition: padding 1s ease, background-color 0.2s ease;

      & > em {
        font-size: 1.2em;
        color: #ff6c00 !important; /* posts */
        background: unset !important; /* posts */
        padding: unset !important; /* posts */
        border-radius: unset !important; /* posts */
        font-style: normal;
      }
    }

    & > span:not(:first-child) {
      font-family: 'Open Sans';
      font-size: 1em;
      @media ${device.mobile} {
        font-size: 0.8em;
      }

      line-height: 1.4;

      & > em {
        font-size: 1.1em;
        font-weight: 700;
        color: #fff;
        background-color: #b7b7b7;
        font-style: normal;
        padding: 0px 5px;
        border-radius: 5px;
      }
    }
  }
`

const CtaMainSuscribeButton = styled(Link)`
  font-family: 'Open Sans';
  font-weight: 700;
  font-size: 1.5em;
  line-height: 1 !important; /* posts */
  @media ${device.mobile} {
    font-size: 1.2em;
  }
  @media ${device.mobileS} {
    font-size: 1em;
  }

  border-radius: 8px;
  background-color: #4a98d6 !important; /* posts */
  color: #fff !important; /* for posts */

  display: flex !important; /* posts */
  align-items: center;
  cursor: pointer;
  text-decoration: none;

  margin-top: 15px;
  padding: 4px 10px;

  transition: padding 1s ease, background-color 0.2s ease;

  & > em {
    padding: 0px 10px !important; /* posts */
    font-size: 1.2em !important; /* posts */
    color: #fff !important; /* posts */
    background: unset !important; /* posts */
    font-style: normal;
  }

  &:hover {
    background-color: #3e789a !important; /* for posts */
    padding: 4px 20px;
  }
`
