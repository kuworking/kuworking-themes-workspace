import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { Pagination } from 'gatsby-theme-kuworking-core'

//import { Lock as Premium } from 'styled-icons/fa-solid/Lock'
//import { BookmarkStar as Premium } from 'styled-icons/boxicons-solid/BookmarkStar'
//import { Star as Premium } from 'styled-icons/fa-solid/Star'
//import { StarOfLife as Premium } from 'styled-icons/fa-solid/StarOfLife'
//import { Stars as Premium } from 'styled-icons/material/Stars'
//import { Starburst as Premium } from 'styled-icons/typicons/Starburst'
//import { Barcode as Premium } from 'styled-icons/boxicons-regular/Barcode'
//import { Certification as Premium } from 'styled-icons/boxicons-regular/Certification'
import { CheckShield as Premium } from 'styled-icons/boxicons-regular/CheckShield'

export const Cards = ({ main_maxwidth, posts, isFirst, isLast, prev_page, next_page, num_of_pages, pre_path }) => (
  <Grid main_maxwidth={main_maxwidth}>
    {posts.map((post, i) => (
      <Card key={'card_' + i} post={post} i={i} />
    ))}
    <Pagination
      isFirst={isFirst}
      isLast={isLast}
      prev_page={prev_page}
      next_page={next_page}
      num_of_pages={num_of_pages}
      pre_path={pre_path}
    />
  </Grid>
)

export const RelatedCards = ({ main_maxwidth, posts }) => (
  <RelatedGrid main_maxwidth={main_maxwidth}>
    {posts.map((post, i) => (
      <Card key={'related_card_' + i} post={post.node} i={i} />
    ))}
  </RelatedGrid>
)

const device = {
  laptop: `(max-width: 1100px)`,
  mobile: `(max-width: 600px)`,
  mobileS: `(max-width: 400px)`,
}

const Grid = styled.div`
  font-size: 1em; /* redundant, except for related cards */
  margin-top: 50px;
  max-width: ${props => props.main_maxwidth};
  width: 100%;
  z-index: 1;
  transition: padding 0.5s ease;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-column-gap: 15px;
  grid-row-gap: 15px;
  justify-content: space-between;

  @media ${device.laptop} {
    grid-column-gap: 1.6vw;
    grid-row-gap: 1.6vw;
  }

  @supports not (display: grid) {
    display: flex;
    flex-wrap: wrap;
  }
`

const RelatedGrid = styled(Grid)``

const Card = ({ post, i }) => (
  <Container aria-label="Post" to={'/' + post.name}>
    <div>{post.tags.includes('curso') && <Premium />}</div>
    <Image>
      <img alt={post.name} src={post.tags.includes('curso') ? post.post_image : post.type_image} />
      {/*
        post.abstract.split('#').map((el, i) => (i % 2 === 0 ? <span key={i}>{el}</span> : <mark key={i}>{el}</mark>))
        */}
    </Image>
    <Title i={i}>
      {post.title.split('#').map((el, i) => (i % 2 === 0 ? <span key={i}>{el}</span> : <mark key={i}>{el}</mark>))}
    </Title>
  </Container>
)

const Container = styled(Link)`
  /* !important -> to overwrite the post h1 in related cards */
  display: grid !important;
  grid-template-columns: minmax(0, 1fr);
  grid-template-rows: 0px 140px minmax(100px, 1fr);
  @media ${device.mobile} {
    grid-template-rows: 10px 100px minmax(100px, 1fr);
  }
  align-content: flex-start !important;
  color: unset !important;

  transition: max-height 0.2s ease 0s, width 0.2s ease 0s, background-color 0.2s ease 0s, box-shadow 0.2s ease;

  box-shadow: 0px 0px 0px 0 #ffffff00;
  border-radius: 8px;

  &:hover {
    box-shadow: 0 4px 0px #717171;

    & > section:nth-child(2) > div:first-child {
      color: #ffffffe8 !important;
      background-color: #494949 !important;
    }
  }

  & > div:nth-child(1) {
    grid-row: 1 / span 2;
    grid-column: 1 / 2;
    z-index: 10;
    & > svg {
      width: 50px;
      padding: 8px;
      color: #fff;
      filter: drop-shadow(0px 0px 4px #ccc);
    }

    @supports not (display: grid) {
      position: absolute;
    }
  }
  & > div:nth-child(2) {
    grid-row: 1 / span 2;
    grid-column: 1 / 2;
  }

  @supports not (display: grid) {
    max-width: 240px;
    width: 100%;
    margin: 5px 2px;
  }
`
const Title = styled.h1`
  /* !important -> to overwrite the post h1 in related cards */
  margin-block-start: unset;
  margin-block-end: unset;
  margin-inline-start: unset;
  margin-inline-end: unset;

  font-family: 'Open Sans' !important;
  background-color: #404040 !important;
  color: #fff !important;
  border-radius: 0px 0px 8px 8px;

  line-height: 1.1em !important;
  font-size: 1em !important;
  margin-top: unset !important;
  padding: 5px;
  font-weight: 400 !important;
  letter-spacing: -0.5px !important;

  transition: font-size 0.2s ease 0s, color 0.2s ease 0s, background-color 0.2s ease 0s;

  & > mark {
    color: #ff9800 !important;
    background: unset !important;
    font-weight: 700;
    letter-spacing: 0px !important;
  }

  @supports not (display: grid) {
    height: 100px;
  }
`

const Image = styled.div`
  width: 100%;
  background-color: #2d2d2d;
  overflow: hidden;
  transition: color 0.2s ease 0s;

  display: grid;
  align-items: center;
  border-radius: 8px 8px 0px 0px;

  & > img {
    width: 102% !important; /* to eliminate a border that shouldn't be there */
    max-width: 500px;
    overflow: hidden;
    border: unset !important;
    padding: unset !important;
  }

  @supports not (display: grid) {
    height: 140px;
  }
`
