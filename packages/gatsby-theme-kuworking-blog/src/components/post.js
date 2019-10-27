import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Styled, useThemeUI } from 'theme-ui'

import { Disqus, Config, SocialShare, shuffle_array } from 'gatsby-theme-kuworking-core'
import { CtaPosts } from './cta'
import { Card } from './cards'

export const Post = ({ blogPost: { images, post, structure: { post_related_images, tags_related_posts } = {} } }) => {
  const { theme } = useThemeUI()

  tags_related_posts = shuffle_array(tags_related_posts)
  if (tags_related_posts.length > 5) tags_related_posts.length = 5

  return (
    <>
      <Styled.h1 name="tothetop">
        <Title color={theme.colors.title}>
          {post.title.split('#').map((el, i) => (i % 2 === 0 ? <span key={i}>{el}</span> : <em key={i}>{el}</em>))}
        </Title>
      </Styled.h1>

      <Info>
        <div>{100 * parseInt(post.words / 100)} palabras</div>
        <div>{post.timeToRead} minutos</div>
        <div>{post.date.date}</div>
      </Info>

      <Tags>
        {post.tags.map((tag, j) => (
          <React.Fragment key={'link' + j}>
            <Tag to={'/tags/' + tag}>{tag.replace(/_/g, ' ')}</Tag>
          </React.Fragment>
        ))}
      </Tags>

      <SocialShare title={post.title} url={Config.url + post.name} image={Config.url + post.publicUrl} />

      <MDXRenderer>{post.content}</MDXRenderer>

      <CtaPosts />

      <RelatedPosts>
        <Styled.h1>Te puede interesar</Styled.h1>
        <Container>
          {tags_related_posts.map((post, i) => (
            <Card key={'related_card_' + i} post={post.node} i={i} />
          ))}
        </Container>
      </RelatedPosts>

      <CommentsWrap>
        <Styled.h1>Deja un comentario</Styled.h1>
        <Disqus label="Comment From A Post" origin={post.name} />
      </CommentsWrap>
    </>
  )
}

const laptop = '@media (min-width: 1100px)'

const Title = styled.div`
  font-size: 1.7em;
  text-transform: uppercase;
  color: ${props => props.color};
`

const Tags = styled.div`
  font-size: 0.9em;
  letter-spacing: -1px;
  line-height: 1.3em;
  display: flex;
  flex-direction: column;

  & > div {
    display: inline-block;
    padding-right: 4px;
    color: #a1a1a1 !important;
  }
`
const Info = styled(Tags)`
  margin-bottom: unset;
`

const Tag = styled(Link)`
  display: inline-block !important;
  margin-right: 10px;
  padding: 0px 2px;

  color: #ffffff !important;
  background: #3c3c3c;
  transition: background-color 0.5s ease;

  &:hover {
    color: #000;
    background-color: #ccc;
  }
`

const RelatedPosts = styled.div`
  margin-top: 100px;
`

const CommentsWrap = styled.div`
  margin-top: 100px;
  margin-bottom: 0.5em;
`

const Container = styled.article`
  margin-top: 50px;
  width: 100%;
  transition: padding 0.5s ease;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-column-gap: 1.6vw;
  grid-row-gap: 1.6vw;
  justify-content: space-between;

  ${laptop} {
    grid-column-gap: 15px;
    grid-row-gap: 15px;
  }

  @supports not (display: grid) {
    display: flex;
    flex-wrap: wrap;
  }
`
