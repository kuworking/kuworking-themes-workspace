import React from 'react'
import styled from 'styled-components'

export const KWConsole = ({ code, title }) => {
  const rows = title.length
  return (
    <Console rows={rows}>
      <div>CONSOLE.LOG</div>
      <pre>
        {title.map((el, i) => (
          <div className="console" key={'console_title_' + i}>
            {el}
          </div>
        ))}
        {code.map((el, i) => (
          <div key={'console_' + i}>
            {typeof el === 'string' ? (
              el
            ) : typeof el === 'undefined' ? (
              <mark>undefined</mark>
            ) : (
              JSON.stringify(el, undefined, 4)
            )}
          </div>
        ))}
      </pre>
    </Console>
  )
}

const Console = styled.div`
  &:not(pre) > div {
    padding: 2px 2px 0px 18px;
    font-family: Roboto Condensed;
    background-color: #ff8686;
    border-radius: 8px 8px 0px 0px;
    color: #fff;
    max-width: 95vw;
  }

  & mark {
    color: #f00;
    background-color: unset;
  }

  & > pre {
    font-size: 0.7em;
    background-color: #222222;
    line-height: 1;
    font-family: 'Source Sans Pro', sans-serif;
    padding: 10px;
    border-radius: 0px 0px 8px 8px;
    color: #a7a7a7;
    margin: 0px;
    display: grid;
    grid-template-columns: min-content auto;
    grid-auto-flow: column;
    grid-template-rows: repeat(${props => props.rows}, auto);

    max-width: 95vw;
    overflow: auto;
    /*
    white-space: pre-wrap;
    word-wrap: break-word;
    */

    & > div {
      margin: 5px;
      padding: 5px;
    }

    & > div.console {
      background: #5b5b5b;
      color: #fff;
      border-radius: 0px 8px 8px 0;
    }
  }
`