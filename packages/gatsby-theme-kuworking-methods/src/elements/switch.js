import React from 'react'
import styled from '@emotion/styled'

export const Switch = ({ Day, Night, iconwidth = '20px', useColorMode, modes: colorModes, ...rest }) => {
  const [colorMode, setColorMode] = useColorMode()

  const toggleColorMode = e => {
    const index = colorModes.indexOf(colorMode)
    const next = colorModes[(index + 1) % colorModes.length]
    setColorMode(next)
  }

  const Icons = () => (
    <>
      <Night />
      <Day />
    </>
  )

  return (
    <Square
      day={colorMode === 'light'}
      onClick={toggleColorMode}
      iconwidth={iconwidth}
      id="gtm_switch_DayNight_1"
      {...rest}
    >
      <div id="gtm_switch_DayNight_2">
        <div id="gtm_switch_DayNight_3">
          <Icons />
        </div>
      </div>
    </Square>
  )
}

export default Switch

const Square = styled.div`
  cursor: pointer;
  margin: 4px;
  color: ${props => (props.day ? '#000' : '#fff')};
  background: ${props => (props.day ? props.dayColor : props.nightColor)};

  display: flex;
  align-items: center;
  justify-content: center;

  transition: color 0.2s ease, background 0.5s ease;
  &:hover {
    color: ${props => (props.day ? '#fff' : '#000')};
  }

  & > div:first-of-type {
    width: ${props => props.iconwidth};
    height: ${props => props.iconwidth};
    overflow: hidden;

    & > div:first-of-type {
      position: relative;
      display: flex;
      flex-direction: column;
      transition: top 0.2s ease-in;
      top: ${props => (props.day ? `-${props.iconwidth}` : '0px')};

      & svg {
        width: ${props => props.iconwidth};
        height: ${props => props.iconwidth};
      }
    }
  }
`
