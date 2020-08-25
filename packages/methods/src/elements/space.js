import React from 'react'
import { styled } from 'linaria/react'

export const SPACE = styled.div`
  margin: ${props => (props.space ? props.space : '100px')} 0px;
  background: ${props => (props.blk ? '' : 'linear-gradient(45deg, #d7dee199, transparent)')};
  height: 2px;
  max-width: 400px;
  width: 100%;
`
