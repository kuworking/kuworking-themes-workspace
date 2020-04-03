/** @jsx jsx */
import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { jsx } from 'theme-ui'

import { Disqus, config, text, SocialShare, shuffle_array, Img } from 'gatsby-theme-kuworking-one'
import { CtaPosts } from './cta'
import { Card } from './cards'

export const Post = ({ blogPost: { images, post, structure: { post_related_images, tags_related_posts } = {} } }) => {
  const [disqusLoad, setDisqusLoad] = useState(0)

  tags_related_posts = shuffle_array(tags_related_posts)
  if (tags_related_posts.length > 5) tags_related_posts.length = 5

  const [image, setImage] = useState({ src: '', fake: true })
  useEffect(() => {
    setImage({ src: post.grid_image_versions })
  }, [post.grid_image_versions])

  return (
    <>
      <Title name="tothetop">
        <div>
          {post.title.split('#').map((el, i) => (i % 2 === 0 ? <span key={i}>{el}</span> : <em key={i}>{el}</em>))}
        </div>
      </Title>

      <Info>
        <div>
          {100 * parseInt(post.words / 100)} {text.post.words}
        </div>
        <div>
          {post.timeToRead} {text.post.minutes}
        </div>
        <div>
          {new Date(post.date).toLocaleDateString(text.post.date_language, {
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
        url={config.url + '/' + post.name}
        image={config.url + image.src}
      />

      <div style={{ marginBottom: '50px' }} />

      {(image.fake && <FakeImage />) || (
        <FixImage>
          <div>
            <Img image={[image.src.standard, image.src]} alt="related to post" />
          </div>
        </FixImage>
      )}
      <div style={{ marginBottom: '10px' }} />

      <div>
        <MDXRenderer>{post.content}</MDXRenderer>
      </div>

      <CtaPosts />

      <RelatedPosts>
        <h1>{text.post.related_posts}</h1>
        <Container>
          {tags_related_posts.map((post, i) => (
            <Card key={'related_card_' + i} post={post.node} related />
          ))}
        </Container>
      </RelatedPosts>

      <CommentsWrap onClick={() => setDisqusLoad(1)}>
        <h1>{text.post.comments}</h1>
        <Disqus
          load={disqusLoad}
          disqusShortName={config.disqus}
          disqus_url={config.disqus_url}
          label="Comment From A Post"
          origin={post.name}
        />
      </CommentsWrap>
    </>
  )
}

const q = px => `@media (min-width: ${px}px)`

const Title = styled.h1`
  ${q(400)} {
    margin-top: 50px;
  }
  & > div {
    text-transform: uppercase;
    color: ${props => props.theme.colors.post__title__color};

    & > em {
      font-style: normal;
      padding: 0px 6px;
      border-radius: 3px;
      display: inline-block;
      color: ${props => props.theme.colors.post__title_em__color};
      background: ${props => props.theme.colors.post__title_em__background};
      transition: color 0.5s ease, background 0.5s ease;
    }
  }
`

const Tag = styled(Link)``
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
    color: ${props => props.theme.colors.post__tags__info__color};
  }

  ${Tag} {
    display: inline-block;
    margin-right: 10px;
    margin-bottom: 3px;
    padding: 2px 8px;
    text-decoration: none;

    color: ${props => props.theme.colors.post__tags__tag__color};
    background: ${props => props.theme.colors.post__tags__tag__background};
    border-radius: 3px;
    transition: background-color 0.5s ease;

    &:hover {
      color: ${props => props.theme.colors.post__tags__tag_hover__color};
      background-color: ${props => props.theme.colors.post__tags__tag_hover__background};
      text-decoration: underline;
    }
  }
`
const Info = styled(Tags)`
  margin-bottom: unset;
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
  background: ${props => props.theme.colors.post__comments__background};

  & > h1 {
    margin-bottom: 0px;
    transition: color 0.5s ease;
    color: ${props => props.theme.colors.post__comments__title__color};
  }

  &:hover {
    background: ${props => props.theme.colors.post__comments_hover__background};
    & > h1 {
      color: ${props => props.theme.colors.post__comments_hover__title__color};
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

  ${q(1100)} {
    grid-column-gap: 15px;
    grid-row-gap: 15px;
  }

  @supports not (display: grid) {
    display: flex;
    flex-wrap: wrap;
  }
`

const image_skeleton = `
position: unset;
max-height: 300px;
${q(600)} {
  max-height: 500px;
  margin: 20px 0px;
}
`
export const FakeImage = styled.div`
  ${image_skeleton}
`
export const FixImage = styled.div`
  background-color: #ffffff;
  display: inline-block;
  border: 1px solid #d7d7d7;
  padding: 2px;
  margin: 10px 0px;

  & > div {
    ${image_skeleton}
    overflow: hidden;
    align-items: center;
    display: flex;

    & img {
      width: 100%;
    }
  }
`
