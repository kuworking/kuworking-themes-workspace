import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

import { PageTemplate, text } from 'gatsby-theme-kuworking-one'

const NotFoundPage = ({ pageContext }) => (
  <PageTemplate
    page={{
      ...pageContext,
      title: text.notFound.title,
      description: text.notFound.description,
      keywords: text.notFound.keywords,
      robots: 'noindex, follow',
      share: false,
      cta: true,
      image: '',
      main_maxwidth: '800px',
    }}
  >
    <Separator />
    <h1>{text.notFound.title}</h1>
    <p>{text.notFound.description}</p>
    <Link to="/">{text.notFound.mainPage}</Link>
    <Separator />
  </PageTemplate>
)

export default NotFoundPage

const Separator = styled.div`
  margin-bottom: 100px;
`
