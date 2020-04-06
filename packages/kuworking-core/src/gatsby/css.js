import styled from '@emotion/styled'

export const q = px => `@media (min-width: ${px}px)`
export const qq = px => `@media (max-width: ${px}px)`

export const Margin = styled.div`
  width: 100%;
  ${props => {
    // fill values if array if shorter than breakpoints
    props.theme.breakpoints.forEach((_, i) => {
      if (typeof props.margin[i + 1] === 'undefined') props.margin[i + 1] = props.margin[i]
    })

    return `padding-top: ${props.margin[0]}px;
      ${props.theme.breakpoints
        .map(
          (p, i) => `@media (min-width: ${p}) {
      padding-top: ${props.margin[i + 1]}px;
    }
    `
        )
        .join('')}`
  }}
`
