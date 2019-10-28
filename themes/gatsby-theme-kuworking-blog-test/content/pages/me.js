import React from 'react'
import styled from '@emotion/styled'
import { Styled } from 'theme-ui'

import { Page } from 'gatsby-theme-kuworking-core'

const Me = () => (
  <Page
    page={{
      title: 'Me',
      description: 'My Description',
      keywords: ['me', 'my blog'],
      robots: 'index, follow',
    }}
  >
    <Separator />
    <Styled.h1>Who I Am</Styled.h1>
    <Styled.p>This is my history ...</Styled.p>
    <Separator />
  </Page>
)

export default Me

const Separator = styled.div`
  margin-bottom: 100px;
`
