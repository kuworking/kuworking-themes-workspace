import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { Styled } from 'theme-ui'

import { Page, Text } from 'gatsby-theme-kuworking-core'

const NotFoundPage = () => (
  <Page
    page={{
      title: Text.notFound.title,
      description: Text.notFound.description,
      keywords: Text.notFound.keywords,
      robots: 'noindex, follow',
      share: false,
    }}
  >
    <Separator />
    <Styled.h1>{Text.notFound.title}</Styled.h1>
    <Styled.p>{Text.notFound.description}</Styled.p>
    <Styled.a as={Link} to="/">
      {Text.notFound.mainPage}
    </Styled.a>
    <Separator />
  </Page>
)

export default NotFoundPage

const Separator = styled.div`
  margin-bottom: 100px;
`
