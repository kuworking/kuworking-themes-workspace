/** @jsx jsx */
import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { jsx } from 'theme-ui'

import { config, text, SocialShare, shuffle_array, Img, Margin } from 'gatsby-theme-kuworking-one'
import { Card } from '../cards'

export const Post = ({ blogPost: { post, related_posts, basePath } }) => {
  const [related_post_subset, setRelated_post_subset] = useState([])
  useEffect(() => {
    const array_of_index = shuffle_array(Array.from({ length: related_posts.length }, (v, i) => i)).slice(0, 5)
    setRelated_post_subset(array_of_index.map(i => related_posts[i]))
  }, [])

  const [wallpaper, setWallpaper] = useState({ src: '/blank.gif', fake: true })
  useEffect(() => {
    setTimeout(() => {
      post && setWallpaper({ src: post.full_image })
    }, 500)
  }, [post])

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
            <Tag to={'/tags/' + tag} arial-label="entradas">
              {tag.replace(/_/g, ' ')}
            </Tag>
          </React.Fragment>
        ))}
      </Tags>

      <SocialShare
        title={post.title.replace(/#/g, '')}
        url={config.url + '/' + post.name}
        image={config.url + post.full_image}
      />

      <Margin margin={[50]} />

      {(wallpaper.fake && <FakeImage />) || (
        <FixImage>
          <div>
            <Img image={[post.image_versions.standard, post.image_versions]} alt="related to post" />
          </div>
        </FixImage>
      )}

      <Margin margin={[10]} />

      <div>
        <MDXRenderer>{post.content}</MDXRenderer>
      </div>

      <RelatedPosts>
        <h1>{text.post.related_posts}</h1>
        <Container>
          {related_post_subset.map((post, i) => (
            <Card key={'related_card_' + i} post={post} />
          ))}
        </Container>
      </RelatedPosts>
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
