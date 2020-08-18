import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

const footer = {
  me: 'Quién soy',
  credits: 'by kuworking.com',
  credits_url: 'https://www.kuworking.com',
  // prettier-ignore
  date: () => <>[ {new Date().getFullYear()} {`>>`} kuworking ]</>,
  cookies: () => <>Te informo que utilizo cookies para mejorar la usabilidad del website</>,
  cookies_agree: 'Ok',
}

export const Footer = ({ basePath }) => (
  <>
    <Expand />
    <Foot>
      <Legal>
        <Link aria-label="Mi Historia" to={`${basePath}me`}>
          {footer.me}
        </Link>
        <Separator />
        <a aria-label="kuworking" href={footer.credits_url}>
          {footer.credits}
        </a>
        <Separator />
        <span>
          <footer.date />
        </span>
      </Legal>
    </Foot>
  </>
)

const Expand = styled.div`
  flex: 1;
`

const Foot = styled.footer`
  width: 100%;
  z-index: 1;
  padding-top: 20px;
  padding-bottom: 20px;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  letter-spacing: -0.5px;
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
