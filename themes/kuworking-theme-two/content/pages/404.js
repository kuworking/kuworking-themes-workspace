import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { Page } from 'gatsby-theme-kuworking-core'

const text = {
  title: 'Página no encontrada',
  description: 'No encuentro lo que buscas!',
  keywords: [`kuworking.com`],
  mainPage: 'Mira a ver en la página principal',
}

const NotFoundPage = ({ pageContext }) => (
  <Page
    page={{
      ...pageContext,
      title: text.title,
      description: text.description,
      keywords: text.keywords,
      robots: 'noindex, follow',
      share: false,
      cta: true,
      image: '',
      main_maxwidth: '800px',
    }}
  >
    <Separator />
    <h1>{text.title}</h1>
    <p>{text.description}</p>
    <Link to="/">{text.mainPage}</Link>
    <Separator />
  </Page>
)

export default NotFoundPage

const Separator = styled.div`
  margin-bottom: 100px;
`
