import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { Page } from 'gatsby-theme-kuworking-core'

const Nosotros = () => (
  <Page
    title="KUWorking"
    description="KUWorking y su razón de ser"
    keywords={['kuworking.com', 'mi historia', 'JavaScript']}
    robots="index, follow"
    nowallpaper="true"
    main_maxwidth={'800px'}
  >
    <Wrapper main_maxwidth={'800px'}>
      <Text1>
        No hay <em>ideas</em> buenas o malas, están las <em>que se hacen</em> y las que no <span>[Pep Torres]</span>
      </Text1>

      <Text topempty>Tener ideas sólo requiere pensar, y todo el mundo piensa</Text>
      <Text>
        Hacerlas, implementarlas, convertirlas en realidad necesita de algo más, como mínimo necesita determinación
      </Text>
      <Text>
        El problema es cuando <em>sí</em> tienes determinación y estás dispuesto y estás motivado pero no sabes por
        dónde empezar o por dónde seguir
      </Text>

      <Text topempty>
        <em>Qué es KUWorking?</em> Es mi proyecto para enseñarte a desarrollar en JavaScript y todo lo que su ecosistema
        te aporta, incluyendo WordPress
      </Text>
      <Text>
        Y eso por qué? Porque si de lo que se trata es de emprender, se empieza por validar ideas, y estas validaciones
        necesitan sí o sí una implementación digital (online, virtual, lo que quieras)
      </Text>
      <Text>
        Con lo que en KUW te enseño JavaScript y marketing online, te enseño las herramientas (porque sólo son
        herramientas) que te acercarán a poder pasar de ideas que se piensan a ideas que se hacen
      </Text>

      <Text topempty>Y esto es básico</Text>

      <Text2 topempty>
        KUW existe porque creo firmemente en que la mejor inversión que puedes hacer a corto, medio y largo plazo es
        aprender desarrollo y marketing en web
      </Text2>

      <Text topempty>
        Y aquí yo te lo enseño priorizando y aplicando, porque el tiempo pasa muy rápido y hay que ir deprisa, hay que
        salir y probar, salir e iterar, y así repetir
      </Text>

      <Text topempty>En fin</Text>

      <Text topempty>
        Es lo que hay, si te interesa lo que te he contado son 8 € al mes, tarifa plana sin permanencia
      </Text>

      <Suscribe>
        Y te puedes suscribir <Link to="/suscribirse">aquí</Link>
      </Suscribe>

      <Text topempty>Y tanto si te interesa como si no, que pases un fantástico día</Text>
    </Wrapper>
  </Page>
)

export default Nosotros

const device = {
  laptop: `(max-width: 1100px)`,
  mobile: `(max-width: 600px)`,
  mobileS: `(max-width: 400px)`,
}

const Wrapper = styled.div`
  max-width: ${props => props.main_maxwidth};
  width: 100%;
  line-height: 1.4;

  color: #525252;
  font-size: 1.2em;
  @media ${device.mobile} {
    font-size: 1em;
  }

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  & > div {
    width: 100%;
  }
  & > div:last-of-type {
    margin-bottom: 400px;
  }

  @media ${device.laptop} {
    padding: 0px 5px;
  }
`

const Text = styled.div`
  margin-top: ${props => (props.topempty ? '50px' : '5px')};
  @media ${device.mobile} {
    margin-top: ${props => (props.topempty ? '30px' : '5px')};
  }
  margin-bottom: 5px;

  & > em {
    font-weight: 700;
    font-style: normal;
    color: #ff5050;
    background-color: #dcdcdc;
    border-radius: 5px;
    padding: 0px 8px;
  }
`
const Text1 = styled(Text)`
  background-color: #797979;
  color: #fff;
  padding: 10px;
  border-radius: 5px;
  font-weight: 700;

  & > em {
    font-style: normal;
    color: #ff5050;
    background-color: #fff;
    border-radius: 0px;
    padding: 0px 5px;
  }
`
const Text2 = styled(Text)`
  font-weight: 700;
`
const Text3 = styled(Text2)`
  margin-top: 70px;

  background-color: #f5f5f5;
  padding: 10px;
  border-radius: 5px;
`
const List = styled(Text)`
  line-height: 1.2;
  margin: 0;

  &::before {
    content: '';
    display: inline-block;
    width: 10px;
    height: 10px;
    background-color: #5f9abb;
    border-radius: 3px;
    margin: 0px 5px 2px 15px;
  }
`
const Suscribe = styled(Text)`
  font-weight: 700;
  @media ${device.mobile} {
    margin-bottom: 100px;
  }
  & > a {
    color: #45bcff;
    &:hover {
      color: #2981b3;
    }
  }
`
