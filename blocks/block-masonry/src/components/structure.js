import React from 'react'
import styled from '@emotion/styled'

import { Header } from './header'
import { Footer } from './footer'
import { Grid } from './grid'

import './globalcss.css'

export const Structure = ({ basePath = '/', folder = '/', items = [] }) => {
  return (
    <Main>
      <Container>
        <Header basePath={basePath} folder={folder} />

        <Grid folder={folder} items={items} />

        <Footer basePath={basePath} folder={folder} />
      </Container>
    </Main>
  )
}

const Main = styled.main`
  display: flex;
  min-height: 100vh; /* needed for the sticky footer */
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  transition: font-size 0.5s ease;
`

const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  padding: 0px 10px;

  min-height: 100vh;
  display: flex;
  flex-direction: column;
`
