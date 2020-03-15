import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

import { Page, Text } from 'gatsby-theme-kuworking-core'

const NotFoundPage = ({ pageContext: { basePath } }) => (
  <Page
    page={{
      basePath: basePath,
      title: Text.notFound.title,
      description: Text.notFound.description,
      keywords: Text.notFound.keywords,
      robots: 'noindex, follow',
      share: false,
    }}
  >
    <Separator />
    <h1>{Text.notFound.title}</h1>
    <p>{Text.notFound.description}</p>
    <Link to="/">{Text.notFound.mainPage}</Link>
    <Separator />
  </Page>
)

export default NotFoundPage

const Separator = styled.div`
  margin-bottom: 100px;
`
