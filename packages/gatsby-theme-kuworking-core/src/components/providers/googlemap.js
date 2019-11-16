import styled from '@emotion/styled'

export const GoogleMap = ({ src, component }) => <Frame component={component} title="Google Maps" src={src} />

const Frame = styled.iframe`
  width: 100%;
  height: 450px;
  border: none;
  ${props => props.component}
`
