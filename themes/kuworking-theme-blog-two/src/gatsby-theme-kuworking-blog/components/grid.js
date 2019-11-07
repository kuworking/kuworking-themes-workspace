import React from 'react'
import styled from '@emotion/styled'
import { Styled } from 'theme-ui'

import { Pagination, CtaMain, Card } from 'gatsby-theme-kuworking-blog'

export const Grid = ({
  blogGrid: {
    posts,
    pagination,
    tags: { tags_grid, tag, global_tags },
  },
}) => (
  <>
    <CtaMain />

    {tags_grid && <Tag>{tag}</Tag>}

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
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
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
const Tag = styled(Styled.h1)``
