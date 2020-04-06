import React from 'react'
import styled from '@emotion/styled'

export const Footer = ({ basePath }) => (
  <>
    <Expand />
    <Foot>
      <Legal>
        <a aria-label="kuworking" href="https://www.kuworking.com">
          by kuworking.com
        </a>
        <Separator />
        <span>[ 2018 - {new Date().getFullYear()} - kuworking ]</span>
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
  padding-top: 70px;
  padding-bottom: 20px;
  color: #f6f6f6;
  background: #3e3e3e;
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
