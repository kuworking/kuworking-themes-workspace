import React from 'react'
import styled from '@emotion/styled'

export const Youtube = ({ src, component }) => <Frame component={component} title="Youtube" src={src} />

const Frame = styled.iframe`
  width: 100%;
  height: 400px;
  border: none;
  ${props => props.component}
`
