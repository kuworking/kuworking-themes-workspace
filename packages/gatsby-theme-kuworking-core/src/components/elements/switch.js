import React from 'react'
import styled from '@emotion/styled'
import { css, useColorMode } from 'theme-ui'
import { modes as colorModes } from '../../gatsby-plugin-theme-ui/colors'

export const Switch = props => {
  const [colorMode, setColorMode] = useColorMode()

  const toggleColorMode = e => {
    const index = colorModes.indexOf(colorMode)
    const next = colorModes[(index + 1) % colorModes.length]
    setColorMode(next)
  }

  return (
    <Square
      onClick={toggleColorMode}
      css={css({
        bg: `primary`,
      })}
    >
      {colorMode}
    </Square>
  )
}

export default Switch

const Square = styled.div`
  cursor: pointer;
  width: 16px;
  height: 16px;
  margin: 4px;
`