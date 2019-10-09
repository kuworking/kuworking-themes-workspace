import React from 'react'
import styled from 'styled-components'

const device = {
  laptop: `(max-width: 1100px)`,
  mobile: `(max-width: 600px)`,
  mobileS: `(max-width: 400px)`,
}

export const L = ({ href, children }) => (
  <a href={href} target="_blank">
    {children}
  </a>
)

export const Space = ({ space }) => <div css={'margin-top: ' + (space ? space : '60px') + ';'} />

export const ByeDiv = styled.div`
  margin-top: 100px;
  padding: 30px 90px 30px 30px;
  @media (max-width: 600px) {
    padding: 30px 30px 30px 30px;
  }
  border-radius: 8px;
  background-color: #17acd6;
  color: #ffffff;
  font-weight: 700;
`

export const Vamos = styled.div`
  width: fit-content;
  padding: 13px 15px;
  border-radius: 15px;
  background: linear-gradient(to right, #ff416c, #ff4b2b);
  color: #fff;
  font-weight: 700;
  margin: 50px 0px;
`

export const Smileys = styled.div`
  background: #efefef;
  padding: 10px;
  border-radius: 8px;
  font-size: 1.4em;
`

export const List = styled.div`
  & div {
    font-weight: 700;
    margin-top: 20px;
    font-size: 1.2em;
    background: #6c6c6c;
    max-width: 300px;
    color: #fff;
    padding: 0px 5px;
    border-radius: 5px;
  }
  & a {
    display: block !important;
    font-size: 0.9em;
  }
`

export const Comment = styled.div`
  margin-top: 100px;
  margin-bottom: 20px;
  width: 100%;
  height: 5px;
  background: #efefef;
  display: block;
  border-radius: 5px;
`

export const TLDR = styled.div`
  display: grid;
  grid-template-rows: minmax(40px, 1fr);
  align-items: stretch;
  grid-template-columns: 60px 1fr;
  @media ${device.mobile} {
    grid-template-columns: 1fr;
  }

  & > div {
    padding: 2px 2px 20px 5px;
    font-weight: 700;
  }
  & > div:first-child {
    background: linear-gradient(to right, #ff416c, #ff4b2b);
    color: #fff;
  }
  & > div:last-child {
    background: #cacaca;
  }
  & i {
    background: #ff4452 !important;
    color: #ffffff !important;
    font-weight: 700 !important;
  }
`
