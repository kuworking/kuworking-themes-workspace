import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { Styled, useThemeUI } from 'theme-ui'
import CookieConsent from 'react-cookie-consent'
import { Text } from 'gatsby-theme-kuworking-core'

export const Footer = ({ basePath }) => {
  const { theme } = useThemeUI()

  return (
    <>
      <Expand />
      <Foot theme={theme}>
        <Legal>
          <Styled.a as={Link} aria-label="Mi Historia" to={`${basePath}me`}>
            {Text.footer.me}
          </Styled.a>
          <Separator />
          <Styled.a as="a" aria-label="kuworking" href={Text.footer.credits_url}>
            {Text.footer.credits}
          </Styled.a>
          <Separator />
          <span>
            <Text.footer.date />
          </span>
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
    </>
  )
}

const Expand = styled.div`
  flex: 1;
`

const Foot = styled.footer`
  width: 100%;
  z-index: 1;
  padding-top: 20px;
  padding-bottom: 20px;
  margin-top: 50px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  letter-spacing: -0.5px;

  border: 1px solid ${props => props.theme.colors.cards__border};
  padding: 3px 3px 10px 3px;
  background: ${props => props.theme.colors.cards__background};
  border-radius: 3px;
`

const Legal = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const q = px => `@media (min-width: ${px}px)`

const Separator = styled.div`
  margin: 0px 20px;
  border-right: 2px solid #c1c1c1a3;
  align-self: center;
  ${q(600)} {
    height: 75%;
  }
`
