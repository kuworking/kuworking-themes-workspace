import React from 'react'
import styled from '@emotion/styled'
import { Styled, useThemeUI } from 'theme-ui'

export const CtaMain = () => {
  const { theme } = useThemeUI()

  return (
    <Container
      bg={theme.colors.cta__div__background}
      title={theme.colors.cta__title__color}
      em={theme.colors.cta__em__background}
      txtem={theme.colors.cta__em__color}
    >
      <Title>
        <div>Call To Action!</div>
      </Title>
      <Text>
        <object>
          Drop here your <em>email</em> and I will keep you in the loop 🤠
        </object>
      </Text>
    </Container>
  )
}

export const CtaPosts = props => <CtaMain props={props} />

const Title = styled(Styled.h1)`
  text-transform: uppercase;
  & > div {
    font-size: 1.6em;
  }
`
const Text = styled(Styled.p)`
  & > object {
    font-size: 1.6em;
  }
`
const Container = styled.div`
  background: ${props => props.bg};
  border-radius: 2px;
  padding: 20px 40px 15px 15px;

  & em {
    font-style: normal;
    font-weight: 700;
    padding: 1px 5px;
    border-radius: 2px;
    background: ${props => props.em};
    color: ${props => props.txtem};
  }

  ${Title} {
    color: ${props => props.title};
  }
`
