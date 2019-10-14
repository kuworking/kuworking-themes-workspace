import React from 'react'
import styled from '@emotion/styled'

import { Page, Disqus } from 'gatsby-theme-kuworking-core'

const UserRegister = () => (
  <Page
    title="Contactar"
    description="Contactar con KUWorking.com"
    keywords={['KUWorking.com', 'contactar', 'cursos']}
    robots="index, follow"
    nowallpaper="true"
    main_maxwidth={'800px'}
  >
    <Wrapper main_maxwidth={'800px'}>
      <Title1>Contactar</Title1>
      <div>Si tienes cualquier pregunta, utiliza el siguiente formulario para contactarme</div>

      <Wrap>
        <Disqus label="Contact from Main Page" origin="/contactar" />
      </Wrap>
    </Wrapper>
  </Page>
)

export default UserRegister

const device = {
  laptop: `(max-width: 1100px)`,
  mobile: `(max-width: 600px)`,
  mobileS: `(max-width: 400px)`,
}

const Wrapper = styled.div`
  max-width: ${props => props.main_maxwidth};
  width: 100%;

  color: #525252;
  font-size: 1.2em;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  & > div {
    padding: 10px;
    width: 100%;
  }

  & > div:nth-child(3),
  & > div:nth-child(4) {
  }

  @media ${device.laptop} {
    padding: 0px 5px;
  }
`

const Title1 = styled.div`
  background-color: #f1f1f1;
  font-size: 1.3em;
  font-weight: 700;
  text-transform: uppercase;
`

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  max-width: 500px;
  width: 100%;
  margin-top: 50px;

  & input,
  & textarea,
  & button {
    font-size: 1rem !important;
  }
`
