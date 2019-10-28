import React, { useState } from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from '@emotion/styled'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Styled, useThemeUI } from 'theme-ui'

import { Disqus, Config, Text, SocialShare, shuffle_array } from 'gatsby-theme-kuworking-core'
import { CtaPosts } from './cta'
import { Card } from './cards'

export const Post = ({ blogPost: { images, post, structure: { post_related_images, tags_related_posts } = {} } }) => {
  const { theme } = useThemeUI()
  const [disqusLoad, setDisqusLoad] = useState(0)

  tags_related_posts = shuffle_array(tags_related_posts)
  if (tags_related_posts.length > 5) tags_related_posts.length = 5

  return (
    <>
      <Title
        name="tothetop"
        color={theme.colors.post__title__color}
        em={theme.colors.post__title_em__color}
        bgem={theme.colors.post__title_em__background}
      >
        <div>
          {post.title.split('#').map((el, i) => (i % 2 === 0 ? <span key={i}>{el}</span> : <em key={i}>{el}</em>))}
        </div>
      </Title>

      <Info>
        <div>
          {100 * parseInt(post.words / 100)} {Text.post.words}
        </div>
        <div>
          {post.timeToRead} {Text.post.minutes}
        </div>
        <div>
          {new Date(post.date).toLocaleDateString(Text.post.date_language, {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })}
        </div>
      </Info>

      <Tags>
        {post.tags.map((tag, j) => (
          <React.Fragment key={'link' + j}>
            <Tag to={'/tags/' + tag}>{tag.replace(/_/g, ' ')}</Tag>
          </React.Fragment>
        ))}
      </Tags>

      <SocialShare
        title={post.title.replace(/#/g, '')}
        url={Config.url + '/' + post.name}
        image={Config.url + post.image.src}
      />

      <div css={{ marginBottom: '50px' }} />
      <Img fluid={post.image} alt="post related to image" />
      <div css={{ marginBottom: '50px' }} />

      <MDXRenderer>{post.content}</MDXRenderer>

      <CtaPosts />

      <RelatedPosts>
        <Styled.h1>{Text.post.related_posts}</Styled.h1>
        <Container>
          {tags_related_posts.map((post, i) => (
            <Card key={'related_card_' + i} post={post.node} i={i} />
          ))}
        </Container>
      </RelatedPosts>

      <CommentsWrap
        onClick={() => setDisqusLoad(1)}
        c={theme.colors.global__panel__color}
        bg={theme.colors.global__panel__background}
        ch={theme.colors.global__panel_hover__color}
        bgh={theme.colors.global__panel_hover__background}
      >
        <Styled.h1>{Text.post.comments}</Styled.h1>
        <Disqus load={disqusLoad} disqusShortName={Config.disqus} label="Comment From A Post" origin={post.name} />
      </CommentsWrap>
    </>
  )
}

const laptop = '@media (min-width: 1100px)'

const Title = styled(Styled.h1)`
  & > div {
    font-size: 1.7em;
    text-transform: uppercase;
    color: ${props => props.color};

    & > em {
      font-style: normal;
      padding: 0px 6px;
      border-radius: 3px;
      display: inline-block;
      color: ${props => props.em};
      background: ${props => props.bgem};
    }
  }
`

const Tags = styled.div`
  font-size: 0.9em;
  letter-spacing: -1px;
  line-height: 1.3em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 15px;

  & > div {
    display: inline-block;
    padding-right: 4px;
    color: #a1a1a1;
  }
`
const Info = styled(Tags)`
  margin-bottom: unset;
`

const Tag = styled(Link)`
  display: inline-block;
  margin-right: 10px;
  margin-bottom: 3px;
  padding: 2px 8px;
  text-decoration: none;

  color: #757575;
  background: #ccc;
  border-radius: 3px;
  transition: background-color 0.5s ease;

  &:hover {
    color: #ffffff;
    background-color: #616161;
    text-decoration: underline;
  }
`

const RelatedPosts = styled.div`
  margin-top: 100px;
`

const CommentsWrap = styled.div`
  margin-top: 100px;
  margin-bottom: 0.5em;
  border-radius: 3px;
  padding: 10px;
  cursor: pointer;
  transition: background 0.5s ease;
  background: ${props => props.bg};

  & > h1 {
    margin-bottom: 0px;
    transition: color 0.5s ease;
    color: ${props => props.c};
  }

  &:hover {
    background: ${props => props.bgh};
    & > h1 {
      color: ${props => props.ch};
    }
  }
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
