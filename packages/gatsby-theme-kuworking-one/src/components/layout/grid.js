/** @jsx jsx */
import React from 'react' // eslint-disable-line no-unused-vars
import styled from '@emotion/styled'
import { jsx } from 'theme-ui'

import { Cta } from './cta'
import { Card } from '../cards'

export const Grid = ({
  blogGrid: {
    posts,
    tags: { tag },
  },
}) => {
  return (
    <>
      <Cta />

      {tag && (
        <Tag>
          <span>
            Tag <span>{tag}</span>
          </span>
        </Tag>
      )}

      <Container>
        {posts.map((post, i) => (
          <Card key={'card_' + i} post={post} lazy={i < 5 ? false : true} />
        ))}
      </Container>
    </>
  )
}

const q = px => `@media (min-width: ${px}px)`

const Container = styled.div`
  margin: 50px 0px;
  width: 100%;
  transition: padding 0.5s ease;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-column-gap: 1vw;
  grid-row-gap: 3vw;
  justify-content: space-between;

  ${q(1100)} {
    grid-column-gap: 10px;
    grid-row-gap: 30px;
  }

  @supports not (display: grid) {
    display: flex;
    flex-wrap: wrap;
  }
`
const Tag = styled.h1`
  margin-top: 20px;
  & > span {
    color: ${props => props.theme.colors.post__title__color};
    transition: color 0.5s easy;

    & > span {
      font-size: 1.7em;
      text-transform: uppercase;
    }
  }
`
