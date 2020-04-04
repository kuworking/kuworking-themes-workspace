import { useRef } from 'react'
import styled from '@emotion/styled'

export const Test = () => {
  const dumb = useRef()
  return <Div>hola</Div>
}

const Div = styled.div`
  padding: 10px;
  background: #ccc;
  border-radius: 10px;
`
