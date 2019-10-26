import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'

import { Pagination } from 'gatsby-theme-kuworking-core'
import { CtaMain } from './cta'
import { Card } from './cards'

export const Grid = ({ blogGrid: { posts, pagination } }) => (
  <>
    <CtaMain />

    <Container>
      {posts.map((post, i) => (
        <Card key={'card_' + i} post={post} i={i} />
      ))}
    </Container>
    <Pagination pagination={pagination} />
  </>
)

const laptop = '@media (min-width: 1100px)'

const Container = styled.div`
  margin: 50px 0px;
  width: 100%;
  transition: padding 0.5s ease;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-column-gap: 1vw;
  grid-row-gap: 3vw;
  justify-content: space-between;

  ${laptop} {
    grid-column-gap: 10px;
    grid-row-gap: 30px;
  }

  @supports not (display: grid) {
    display: flex;
    flex-wrap: wrap;
  }
`
