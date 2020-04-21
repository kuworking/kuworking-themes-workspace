import React from 'react'
import styled from '@emotion/styled'
import { config, seoText } from 'gatsby-theme-kuworking-core'

export const getSchemaProps = type => {
  const schema = (type === 'grid' && ['WebSite']) || (type === 'page' && ['WebPage']) || (type === 'mdx' && ['WebPage'])

  return {
    type: type,
    schemaType: schema,
    mainEntityOfPage: {
      '@type': 'WebPage',
    },
    config: config,
    seotext: seoText,
  }
}

export const Main = styled.main`
  background: ${props => props.main_background || 'unset'};
  display: flex;
  min-height: 100vh; /* needed for the sticky footer */
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  transition: font-size 0.5s ease;
`

export const Container = styled.div`
  max-width: ${props => props.maxWidth};
  width: 100%;
  padding: 0px 10px;

  min-height: 100vh;
  display: flex;
  flex-direction: column;
`
