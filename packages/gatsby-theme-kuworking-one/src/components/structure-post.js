import React from 'react'
import { SEO, config } from 'gatsby-theme-kuworking-core'
import { Header } from './layout/header'
import { Footer } from './layout/footer'
import { Post } from './layout/post'
import './globalcss.css'
import { getSchemaProps, Main, Container } from './structure'

const post_maxwidth = '800px'

export const StructurePost = ({ type, blogPost }) => {
  const maxWidth = post_maxwidth
  const basePath = blogPost && blogPost.pre_path

  const schemaProps = getSchemaProps(type)
  blogPost.image = config.url + (blogPost.post.full_image || '/global/image.jpg')

  return (
    <Main>
      <SEO blogPost={blogPost} {...schemaProps} />

      <Container maxWidth={maxWidth}>
        <Header basePath={basePath} />

        <Post blogPost={blogPost} />

        <Footer basePath={basePath} />
      </Container>
    </Main>
  )
}
