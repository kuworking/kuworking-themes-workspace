import React, { useEffect } from 'react'
import styled from 'styled-components'

export const CodepenScript = () => {
  useEffect(() => {
    // add codepen library
    const script2 = document.createElement('script')
    script2.async = true
    script2.type = 'text/javascript'
    script2.src = 'https://static.codepen.io/assets/embed/ei.js'
    document.body.appendChild(script2)
  }, []) // only run once

  return <></>
}

export const executeCodepenScript = () => {
  // add codepen library
  const script2 = document.createElement('script')
  script2.async = true
  script2.type = 'text/javascript'
  script2.src = 'https://static.codepen.io/assets/embed/ei.js'
  document.body.appendChild(script2)
}

export const CodeLink = props => <CodePen {...props} playground={false} />

export const CodePen = ({ playground = true, height = 600, title, html, css, js }) => {
  // prettier-ignore
  let html_complete = (html ? html : '') + `






<!-- ====================
emulación de console.log
==================== -->
[[[https://codepen.io/kuworking/pen/OYOPxd]]]
`
  let js_complete = js ? js : ''
  let css_complete = css ? css : ''

  let data_prefill = {
    title: title,
    description: 'KUWorking Pen',
    tags: ['KUWorking', 'javascript'],
    html_classes: [],
    head: '<meta name="viewport" content="width=device-width, initial-scale=1"></meta>',
    stylesheets: 'https://codepen.io/kuworking/pen/OYOPxd',
    scripts: ['https://codepen.io/kuworking/pen/OYOPxd'],
  }
  let data_prefill_link = {
    title: title,
    html: html_complete,
    css: css_complete,
    js: js_complete,
    editors: 1011,
    css_external: 'https://codepen.io/kuworking/pen/OYOPxd',
    js_external: 'https://codepen.io/kuworking/pen/OYOPxd',
  }

  return (
    <>
      {playground && (
        <div
          className="codepen"
          data-prefill={JSON.stringify(data_prefill)}
          data-height={height}
          data-theme-id="dark"
          data-default-tab="js,result"
          data-editable="true"
          data-preview="true"
          style={{
            height: height + 'px',
            boxSizing: 'border-box',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '2px solid',
            margin: '1em 0',
            padding: '1em',
          }}
          data-pen-title="KuWorking Pen"
        >
          <pre data-lang="html">{html_complete}</pre>
          <pre data-lang="css">{css_complete}</pre>
          <pre data-lang="js">{js_complete}</pre>
        </div>
      )}
      <CodePenForm action="https://codepen.io/pen/define" method="POST" target="_blank">
        <input type="hidden" name="data" value={JSON.stringify(data_prefill_link)} />
        <input type="submit" value="EDITOR" />
      </CodePenForm>
    </>
  )
}

export const CodePenSimple = ({
  playground = true,
  height = 600,
  tab = 'javascript,result',
  title,
  html,
  _css,
  js,
  scripts,
}) => {
  // _css instead of css because must be a protecte word when called frmo the browser (not from gatsby)
  // prettier-ignore
  let html_complete = html ? html : ''
  let js_complete = js ? js : ''
  let css_complete = _css ? _css : ''
  let scripts_complete =
    scripts.trim() === 'react'
      ? [
          'https://cdnjs.cloudflare.com/ajax/libs/react/16.8.4/umd/react.production.min.js',
          'https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.8.4/umd/react-dom.production.min.js',
          'https://cdnjs.cloudflare.com/ajax/libs/styled-components/3.4.10/styled-components.min.js',
        ]
      : []

  let data_prefill = {
    title: title,
    description: 'KUWorking Pen',
    tags: ['KUWorking'],
    html_classes: [],
    head: '<meta name="viewport" content="width=device-width, initial-scale=1"></meta>',
    scripts: scripts_complete,
  }
  let data_prefill_link = {
    title: title,
    description: 'KUWorking Pen',
    tags: ['KUWorking'],
    js_pre_processor: 'babel',
    js_external: scripts_complete.join(';'),
    html: html_complete,
    css: css_complete,
    js: js_complete,
    editors: 1011,
  }

  return (
    <>
      {playground && (
        <div
          className="codepen"
          data-prefill={JSON.stringify(data_prefill)}
          data-height={height}
          data-theme-id="dark"
          data-default-tab={tab}
          data-editable="true"
          data-preview="true"
          style={{
            height: height + 'px',
            boxSizing: 'border-box',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '2px solid',
            margin: '1em 0',
            padding: '1em',
          }}
          data-pen-title="KuWorking Pen"
        >
          <pre data-lang="html">{html_complete}</pre>
          <pre data-lang="css">{css_complete}</pre>
          <pre data-lang="babel">{js_complete}</pre>
        </div>
      )}
      <CodePenForm action="https://codepen.io/pen/define" method="POST" target="_blank">
        <input type="hidden" name="data" value={JSON.stringify(data_prefill_link)} />
        <input type="submit" value="EDITOR" />
      </CodePenForm>
    </>
  )
}

const CodePenForm = styled.form`
  cursor: pointer;
  font-size: 1em;
  margin-top: 5px;
  border-radius: 8px;
  background-color: #ff7d00;
  display: inline-block;
  padding: 5px;
  & > input {
    cursor: pointer;
    font-size: 1em;
    background-color: unset;
    color: #fff;
    font-weight: 700;
  }
`
