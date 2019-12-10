/** @jsx jsx */
import React from 'react'
import styled from '@emotion/styled'
import { Styled, css, useThemeUI, jsx } from 'theme-ui'
import { Mail as MailIcon } from 'emotion-icons/ion-md'
import { Config, Text } from 'gatsby-theme-kuworking-core'

export const CtaList = () => {}

export const CtaMain = () => {
  const { theme } = useThemeUI()
  const form_id = React.createRef()
  const input_id = React.createRef()

  return (
    <Container theme={theme} sx={{ variant: 'cta' }}>
      <Title>
        <div>{Text.cta.title}</div>
      </Title>
      <Sentence>
        <object>
          <Text.cta.message />
        </object>
      </Sentence>

      <MailChimp id="mc_embed_signup">
        <form
          action={Config.mail_chimp_action}
          method="post"
          id="mc-embedded-subscribe-form"
          ref={form_id}
          name="mc-embedded-subscribe-form"
          target="_blank"
          onSubmit={e => {
            e.stopPropagation()
            e.preventDefault()
          }}
          noValidate
        >
          <div id="mc_embed_signup_scroll">
            <Input>
              <input type="email" name="EMAIL" id="mce-EMAIL" ref={input_id} onClick={e => e.stopPropagation()} />
            </Input>

            <div id="mce-responses">
              <div id="mce-error-response" css={{ display: 'none' }}></div>
              <div id="mce-success-response" css={{ display: 'none' }}></div>
            </div>

            <div aria-hidden="true">
              <input
                type="text"
                css={{ position: 'absolute', left: '-5000px' }}
                name="b_7679f6806268867998475ecb8_d0543eb54f"
                tabIndex="-1"
              />
            </div>

            <button
              css={css({
                fontFamily: `body`,
              })}
              type="submit"
              value={Text.cta.suscribe}
              name="subscribe"
              id="mc-embedded-subscribe"
              onClick={e => {
                e.stopPropagation()
                //const expression = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/
                //const id = input_id.current.value.trim()
                //expression.test(String(id).toLowerCase())
                // ? form_id.current.submit()
                // : (input_id.current.value = Text.cta.error)
              }}
            >
              <MailIcon />
              {Text.cta.suscribe}
            </button>
          </div>
        </form>
      </MailChimp>
    </Container>
  )
}

export const CtaPosts = props => <CtaMain props={props} />

const q = px => `@media (min-width: ${px}px)`

const Title = styled(Styled.h1)`
  text-transform: uppercase;
  display: inline-block;

  & > div {
    border-right: 5px solid #ffffffde;
    margin-right: 5px;
    white-space: nowrap;
    overflow: hidden;
    animation: typewriter 1s steps(24) 0.5s 1 normal both, blinkTextCursor 350ms steps(44) 300 forwards;

    // prettier-ignore
    @keyframes typewriter {
      0% {width: 0;}
      99% {width: 100%; white-space: nowrap;}
      100% {width: 100%; white-space: unset;}
    }
    // prettier-ignore
    @keyframes blinkTextCursor {
      50% {border-color: transparent;}
      100% {border: none;}
    }
  }
`
const Sentence = styled(Styled.p)``
const Input = styled.div``
const MailChimp = styled.div`
  & > form > div:first-of-type {
    display: flex;
    height: 40px;
  }

  & ${Input} {
    & input {
      height: 100%;
      margin-right: 5px;
      border-radius: 3px;
      padding: 5px;
      width: 120px;
      ${q(400)} {
        width: 200px;
      }
    }
  }

  & button {
    border: 2px solid #000;
    cursor: pointer;
    font-weight: 700;
    text-decoration: none;
    border-radius: 3px;
  }

  & svg {
    margin-right: 5px;
    height: 15px;
  }
`

const Container = styled.div`
  background: ${props => props.theme.colors.cta__div__background};
  border-radius: 2px;

  padding: 10px;
  ${q(700)} {
    padding: 20px 40px 15px 15px;
  }

  & em {
    font-style: normal;
    font-weight: 700;
    padding: 1px 5px;
    border-radius: 2px;
    background: ${props => props.theme.colors.cta__em__background};
    color: ${props => props.theme.colors.cta__em__color};
  }

  ${Title} {
    color: ${props => props.theme.colors.cta__title__color};
    transition: color 0.5s ease;
  }
  ${MailChimp} button {
    background: ${props => props.theme.colors.cta__button__background};
    color: ${props => props.theme.colors.cta__button__color};
    transition: color 0.5s ease, background 0.5s ease;

    &:hover {
      background: ${props => props.theme.colors.cta__button_hover__background};
      color: ${props => props.theme.colors.cta__button_hover__color};
    }
  }
`
