import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import CookieConsent from 'react-cookie-consent'

import { Text } from 'gatsby-theme-kuworking-core'

const Foot = styled.footer`
  max-width: ${props => props.main_maxwidth};
  width: 100%;
  z-index: 1;
  font-family: 'Open Sans';
  font-size: 1em;
  padding-top: 20px;
  margin-top: 50px;
  padding-bottom: 20px;
  min-height: 80px;
  display: flex;
  justify-content: center;

  letter-spacing: -0.5px;
`

const Legal = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Elem = styled(Link)`
  padding: 0 10px;
  color: #8f8f8f;
  &:hover {
    color: #555;
  }
`

const Elem2 = styled.span`
  padding: 0 10px;
  color: #b9b9b9;
`

export const Footer = ({ main_maxwidth }) => (
  <Foot main_maxwidth={main_maxwidth}>
    <Legal>
      <Elem aria-label="Mi Historia" to="/mi-historia">
        mi historia
      </Elem>
      <Elem aria-label="Contactar" to="/contactar">
        contactar
      </Elem>
      <Elem aria-label="Protección de datos" to="/proteccion_de_datos">
        protección de datos
      </Elem>
      <Elem2>
        <Text.footer.date />
      </Elem2>
    </Legal>
    <CookieConsent
      onAccept={() => {}}
      debug={false}
      cookieName="cookies_user_agrees"
      hideOnAccept={true}
      acceptOnScroll={true}
      acceptOnScrollPercentage={10}
      buttonText={Text.footer.cookies_agree}
      disableStyles={true}
      style={{
        backgroundColor: '#443f3feb',
        bottom: '0px',
        position: 'fixed',
        width: '100%',
        display: 'flex',
        padding: '5px',
        justifyContent: 'space-around',
        color: '#fff',
        fontSize: '0.8em',
      }}
      buttonStyle={{
        backgroundColor: '#f7f7f7',
        padding: '4px',
        color: '#999',
        cursor: 'pointer',
        fontSize: '0.8em',
        borderRadius: '4px',
      }}
      contentStyle={{}}
    >
      <Text.footer.cookies />
    </CookieConsent>
  </Foot>
)
