import React from 'react'
import styled from '@emotion/styled'

export const OldBrowser = () =>
  typeof CSS !== 'undefined' &&
  (CSS.supports('display', 'grid') || <Message>Tu navegador es antiguo y no verás bien la página :_(</Message>)

const Message = styled.div`
  font-size: 2rem;
  font-weight: 700;
  max-width: 1000px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 8px;
  background-color: #ff0000;
  color: #fff;
  margin: 50px 0px;
  padding: 30px;
`
