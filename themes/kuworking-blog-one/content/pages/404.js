import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { Page } from 'gatsby-theme-kuworking-core'

const NotFoundText = styled(Link)`
  color: #7b7b7b;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px 0px;
  font-size: 1.2em;
  line-height: 1.3;

  & > h1 {
    color: #7b7b7b;
  }
`

const notFound = {
  title: 'KUWorking.com: Página No Encontrada',
  description: 'No encuentro la página que buscas, quizá haya cambiado de nombre?',
  keywords: [`KUWorking.com`],
}

const NotFoundPage = () => (
  <Page title={notFound.title} description={notFound.description} keywords={notFound.keywords} robots="noindex, follow">
    <NotFoundText aria-label="No encontrado" to="/">
      <h1>{notFound.title}</h1>
      <p>{notFound.description}</p>
    </NotFoundText>
  </Page>
)

export default NotFoundPage
