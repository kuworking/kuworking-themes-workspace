import React from 'react'
import styled from '@emotion/styled'
import { Styled } from 'theme-ui'

export const wrapRootElement = ({ element }) => <>{element}</>

export const wrapPageElement = ({ element }) => <Styled.root>{element}</Styled.root>
