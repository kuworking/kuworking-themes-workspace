import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import { config } from 'gatsby-theme-kuworking-landing-two'

export const CtaList = () => {}

export const CtaMain = ({ text }) => {
  const form_id = React.createRef()
  const input_id = React.createRef()
  let [rColor, setRColor] = useState(['#fff'])

  /*
  useInterval(() => {
    setRColor('#' + (((1 << 24) * Math.random()) | 0).toString(16))
  }, 100)
*/

  useEffect(() => {
    const get_random_color = () => {
      const letters = 'ABCDE'.split('')
      let color = ''
      for (var i = 0; i < 3; i++) {
        color += letters[Math.floor(Math.random() * letters.length)]
      }
      return color
    }
    setRColor(Array.from({ length: 100 }, () => '#' + get_random_color()))
    // setRColor(Array.from({ length: 100 }, () => '#' + (((1 << 24) * Math.random()) | 0).toString(16)))
  }, [])

  return (
    <Container>
      <MailChimp id="mc_embed_signup">
        <form
          action={config.mail_chimp_action}
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
            <Input rColor={rColor} input_id={input_id} />

            <div id="mce-responses">
              <div id="mce-error-response" style={{ display: 'none' }}></div>
              <div id="mce-success-response" style={{ display: 'none' }}></div>
            </div>

            <div aria-hidden="true">
              <input
                type="text"
                style={{ position: 'absolute', left: '-5000px' }}
                name="b_7679f6806268867998475ecb8_d0543eb54f"
                tabIndex="-1"
              />
            </div>

            <button
              aria-label="NewsLetter suscription"
              style={{}}
              type="submit"
              value={text}
              name="subscribe"
              id="mc-embedded-subscribe"
              onClick={e => {
                e.stopPropagation()
              }}
            >
              <Icon>
                <img src="/icons/mail.svg" alt="mail" />
                <div>{text}</div>
              </Icon>
            </button>
          </div>
        </form>
      </MailChimp>
    </Container>
  )
}

// out to prevent rerender and make css transitions work
const Input = ({ rColor, input_id }) => (
  <InputWrap rColor={rColor}>
    <input
      type="email"
      name="EMAIL"
      id="mce-EMAIL"
      ref={input_id}
      onClick={e => e.stopPropagation()}
      aria-label="sign-up form for mailing list"
    />
  </InputWrap>
)

export const CtaPosts = props => <CtaMain props={props} />

const q = px => `@media (min-width: ${px}px)`
const qq = px => `@media (max-width: ${px}px)`

const InputWrap = styled.div`
  @keyframes colorChange {
    ${props => props.rColor.map((c, i) => `${i}% {background: ${c}}`)}
  }

  & input {
    animation: colorChange 1000s infinite ease-in;

    height: 100%;
    margin-right: 5px;
    border-radius: 6px;
    transition: background 100s ease-in;
    font-weight: 700;
    border: 2px solid #fff;

    padding: 5px;
    width: 120px;
    ${q(400)} {
      width: 200px;
    }
  }
`
const Icon = styled.div``
const MailChimp = styled.div`
  & > form > div:first-of-type {
    display: flex;
    justify-content: center;
    height: 40px;
  }

  & button {
    cursor: pointer;
    font-weight: 700;
    text-decoration: none;
    border-radius: 6px;
  }

  ${Icon} {
    display: flex;
    align-items: center;

    & img {
      margin-right: 5px;
      width: 20px;
      height: 20px;
    }
    & > div {
    }
  }
`

const Container = styled.div`
  border-radius: 8px;

  padding: 10px;
  ${q(700)} {
    padding: 15px;
  }

  ${MailChimp} button {
    background: #e8e8e8;
    transition: background 0.5s ease-in;

    &:hover {
      background: #fc6f58;
    }
  }
`
