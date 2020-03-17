import React from 'react'
import styled from '@emotion/styled'

import { Page } from 'gatsby-theme-kuworking-core'

const Me = ({ pageContext: { basePath } }) => (
  <Page
    page={{
      basePath: basePath,
      title: 'Me',
      description: 'My Description',
      keywords: ['me', 'my blog'],
      robots: 'index, follow',
    }}
  >
    <Separator />
    <h1>Who I Am</h1>
    <p>This is my history ...</p>
    <Separator />
  </Page>
)

export default Me

const Separator = styled.div`
  margin-bottom: 100px;
`
