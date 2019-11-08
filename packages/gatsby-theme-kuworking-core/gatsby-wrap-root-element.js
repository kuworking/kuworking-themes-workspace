import React from 'react'
import { Styled } from 'theme-ui'

export const wrapRootElement = ({ element }) => <>{element}</>

export const wrapPageElement = ({ element }) => <Styled.root>{element}</Styled.root>
