import React from 'react'
import styled from '@emotion/styled'

import { Page } from 'gatsby-theme-kuworking-core'

const PrivacyText = styled.div`
  display: flex;
  width: 700px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px 10px;
  font-size: 1.2em;
  line-height: 1.3;

  @media (max-width: 700px) {
    width: unset;
    font-size: 1em;
  }
  @media (max-width: 500px) {
    width: unset;
    font-size: 0.8em;
  }
`

const Privacy = () => (
  <Page
    title="Privacidad de datos"
    description="Privacidad de datos en KUWorking.com"
    keywords={['KUWorking.com', 'privacidad', 'datos']}
    robots="noindex, follow"
  >
    <PrivacyText>
      <h1>Política de datos</h1>
      <p>Los datos se colectan con Google Analytics para tener estadísticas de la visibilidad de la página</p>
      <p>
        Y también utilizo localStorage para poder articular ciertas características de la página, por ejemplo para la
        paginación de la herramienta font-inspiration
      </p>
    </PrivacyText>
  </Page>
)

export default Privacy
