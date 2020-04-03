import React from 'react'
import styled from '@emotion/styled'

import { PageTemplate } from 'gatsby-theme-kuworking-two'

const Me = ({ pageContext }) => (
  <PageTemplate
    page={{
      ...pageContext,
      title: 'Me',
      description: 'My Description',
      keywords: ['me', 'my blog'],
      robots: 'index, follow',
      wallpaper: false,
      share: true,
      cta: true,
      image: '',
      main_maxwidth: '800px',
    }}
  >
    <Separator />
    <h1>Who I Am</h1>
    <p>This is my history ...</p>
    <Separator />
  </PageTemplate>
)

export default Me

const Separator = styled.div`
  margin-bottom: 100px;
`
