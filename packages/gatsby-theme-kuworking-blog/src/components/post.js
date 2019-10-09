import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import { Disqus, Config, SocialShare, shuffle_array } from 'gatsby-theme-kuworking-core'
import { CtaPosts } from './cta/cta-main'
import { RelatedCards } from './cards'

export const Post = ({ main_maxwidth, post, fitGlobalWidth, setFitGlobalWidth }) => {
  const open_global_width = props => {
    props.stopPropagation() // prevent nothing but just in case
    if (fitGlobalWidth) setFitGlobalWidth(0)
    else setFitGlobalWidth(1)
  }

  post.tags_related_posts = shuffle_array(post.tags_related_posts)
  if (post.tags_related_posts.length > 5) post.tags_related_posts.length = 5

  return (
    <Container cursos={post.tags.includes('cursos')}>
      <Title name="tothetop">
        {post.title.split('#').map((el, i) => (i % 2 === 0 ? <span key={i}>{el}</span> : <mark key={i}>{el}</mark>))}
      </Title>
      <Info>
        <Item>{100 * parseInt(post.words / 100)} palabras</Item>
        <Item>{post.timeToRead} minutos</Item>
        {/* {post.date.months < 2 && <Item>{post.date.date}</Item>} */}
      </Info>
      <Tags>
        {post.tags.map((tag, j) => (
          <object key={'link' + j}>
            <Tag to={'/tags/' + tag}>{tag.replace(/_/g, ' ')}</Tag>
          </object>
        ))}
      </Tags>
      <Tools>
        <Tool fitGlobalWidth={fitGlobalWidth} onClick={open_global_width}>
          ampliar ancho
        </Tool>
      </Tools>

      <SocialShare title={post.title} url={Config.url + post.name} image={Config.url + post.publicUrl} />

      <MDXRenderer>{post.content}</MDXRenderer>

      {post.tags.includes('cursos') || post.tags.includes('curso') || (
        <RelatedPosts>
          <h1>Te puede interesar</h1>
          <RelatedCards main_maxwidth={main_maxwidth} posts={post.tags_related_posts} />
        </RelatedPosts>
      )}

      {post.tags.includes('cursos') || post.tags.includes('curso') || (
        <CommentsWrap>
          <h1>Deja un comentario</h1>
          <Disqus label="Comment From A Post" origin={post.name} />
        </CommentsWrap>
      )}

      <CtaPosts />
    </Container>
  )
}

const device = {
  laptop: `(max-width: 1100px)`,
  mobile: `(max-width: 600px)`,
  mobileS: `(max-width: 400px)`,
}

const RestrictedContent = styled.div`
  margin-top: 20px;
  border: 6px solid #ff6c00;
  border-radius: 10px;
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;

  & svg {
    width: 100px;
  }

  & span {
    color: #4ccbff;
    cursor: pointer;
    &:hover {
      background-color: #808080;
      color: #fff;
    }
  }
`

const DivLock = styled.div`
  margin-bottom: 10px;
`

const Container = styled.article`
  display: block;
  font-size: 1em;
  font-family: 'Source Sans Pro', sans-serif;
  line-height: 1.3;
  padding-bottom: 30px;
  color: #000;

  overflow: auto; /* crucial to prevent horizontal scroll */

  @media ${device.laptop} {
    margin: 0px 10px;
  }

  /* prettier-ignore */
  & h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-family: 'Open Sans';
    line-height: 1.1em;
    font-weight: 700;
    letter-spacing: -0.5px;
    color: #878787;
  }

  & em,
  & i,
  & > .restricted_content > p > code,
  & > h4 > code,
  & > p > code,
  & li > code {
    word-break: break-word;
    padding: 1px 6px;
    border-radius: 4px;
    text-shadow: unset;
    font-style: normal;
    font-weight: 700;
    font-size: 0.9em;
    background-color: #ffb739;
    color: #fff;
  }

  & em,
  i {
    background: #eaeaea;
    color: #7b7b7b;
  }

  & p.anchor {
    height: 0px;
    margin: 0px;
    padding: 0px;
  }

  & h1 {
    font-size: 2em;
    margin-top: 1em;
    margin-bottom: 5px;

    @media (max-width: 600px) {
      font-size: 1.6em;
    }
  }

  & h2 {
    font-size: 1.8em;
    margin-top: 1em;
    margin-bottom: 5px;

    @media (max-width: 600px) {
      font-size: 1.4em;
    }
  }

  & h3 {
    font-size: 1.4em;
    margin-bottom: 5px;

    @media (max-width: 600px) {
      font-size: 1.2em;
    }
  }

  & h4 {
    font-size: 1em;
  }

  & a {
    display: inline-block;
    color: #4ccbff;

    &:hover {
      background-color: #808080;
      color: #fff;
    }
  }

  & img {
    transition: border 0.5s ease;
    padding: 2px;
    width: 100%;
    border: 2px solid #bababa80;
  }

  & > .restricted_content > pre,
  & > pre {
    margin: 1em 0;
    overflow: auto;
    border-radius: 8px;

    white-space: pre;
    word-wrap: normal;
    hyphens: none;
    overflow: auto;
  }

  & > .restricted_content > pre > code,
  & > pre > code {
    float: left;
    padding: 15px;
    border-radius: 8px;

    max-width: unset;
    font-size: 1.2em;
    font-size: 0.9em;
    /* word-break: break-word; */
    word-break: normal;
    white-space: unset;
    overflow: visible;

    word-spacing: normal;
    tab-size: 4;
    hyphens: none;
    line-height: 1.4;

    & > span {
      @media ${device.mobile} {
        white-space: pre-line !important;
      }
    }
  }

  & > .restricted_content > blockquote,
  & > blockquote {
    padding: 20px 90px 20px 20px;
    @media ${device.mobile} {
      padding: 20px;
    }
    border-radius: 8px;
    background: linear-gradient(to right, #e7b89c, #f05053);
    color: #ffffff;
    margin: 40px 0;

    & p {
      margin-block-start: 0;
      margin-block-end: 0;
      margin-inline-start: 0;
      margin-inline-end: 0;
    }

    & p:not(:nth-of-type(1)) {
      margin-top: 10px;
    }

    & code {
      background-color: #9b9b9b !important;
      color: #fff !important;
      text-shadow: unset !important;
      padding: 2px 5px;
      line-height: 1;
      border-radius: 3px;
      font-size: 0.9em;
      font-style: unset;
    }
  }

  & > nav.course > a {
    font-size: 1.2em !important;
    font-weight: 700;
    display: block;
  }

  & > nav.course > h1,
  & > nav.course > h2 {
    font-size: 1em !important;
    margin: 0px 0px 10px 20px !important;
  }
  & > nav.course > h1 {
    font-size: 1.2em !important;
    margin: 30px 0px 10px 0px !important;
  }
  & > nav.course > h2 {
  }
  & > nav.course code {
    background-color: #9b9b9b !important;
    color: #fff !important;
    text-shadow: unset !important;
    padding: 2px 5px;
    line-height: 1;
    border-radius: 3px;
    font-size: 0.9em;
    font-style: unset;
  }

  & iframe {
    width: 100%;
    height: 750px;
  }
  & iframe.small {
    width: 100%;
    height: 500px;
  }
`

const Title = styled.h1`
  font-family: 'Open Sans';
  letter-spacing: -0.5px;
  color: #878787;
  font-size: 2em;

  margin-bottom: 10px;
  text-transform: uppercase;

  & > mark {
    background-color: #7d7d7d;
    color: #fff;
    letter-spacing: 0px;
    padding: 0px 2px;
  }

  @media ${device.mobile} {
    font-size: 1.6em;
  }
`

const Tags = styled.div`
  font-family: 'Open Sans';
  font-size: 0.9em;
  letter-spacing: -1px;
  line-height: 1.3em;
  display: flex;
  flex-direction: column;
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
const Tools = styled(Tags)`
  margin-bottom: 5px;
`
const Tool = styled.div`
  cursor: pointer;
  width: fit-content;
  margin-right: 10px;
  padding: 0px 2px;

  color: #ffffff !important;
  background: #ff8282;
  transition: background-color 0.5s ease;

  &:hover {
    color: #000;
    background-color: #ccc;
  }
`

const Info = styled(Tags)`
  margin-bottom: unset;
`

const Item = styled.div`
  display: inline-block;
  padding-right: 4px;
  color: #a1a1a1 !important;
`

const Comments = styled.div`
  margin-top: 2em;

  & > div:first-child {
    font-size: 2em;
    font-weight: 700;
    padding-bottom: 0.2em;
    border-bottom: 1px solid #ccc;
  }

  & > div:not(:first-child) {
    & > div:nth-child(2) {
      font-family: 'Roboto Condensed';
      color: #ccc;
      font-size: 0.7em;
    }
  }
`

const RelatedPosts = styled.div`
  margin-top: 100px;

  & > h1:first-child {
    color: #878787;
    margin-top: 100px;
    margin-bottom: 0.5em;
  }
`

const CommentsWrap = styled.div`
  margin-top: 100px;
  margin-bottom: 0.5em;

  & > h1:first-child {
    color: #878787;
    margin-bottom: 0.5em;
  }

  & > div:nth-of-type(1) {
    color: #878787;
    padding: 10px 0px;
    width: 100%;

    & > input,
    & > textarea,
    & > button {
      font-size: 1rem !important; /* posts */
      border-radius: 5px;
    }
  }
`
