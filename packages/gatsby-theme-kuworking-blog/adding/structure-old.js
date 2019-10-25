import React, { useState, useEffect } from 'react'
import Img from 'gatsby-image'
import styled from '@emotion/styled'

import { SEO, SeoText, shuffle_array } from 'gatsby-theme-kuworking-core'

import './globalcss.css'
import { Top } from './topbar'
import { Cards } from './cards'
import { Post } from './post'
import { CtaMain } from './cta/cta-main'
import { Footer } from './footer'
import { OldBrowser } from './old-browser'

const grid_maxwidth = '1000px'
const post_maxwidth = '800px'

const device = {
  laptop: `(max-width: 1100px)`,
  mobile: `(max-width: 600px)`,
  mobileS: `(max-width: 400px)`,
}

const Main = styled.main`
  background-color: #ffffff;
  font-family: 'Open Sans', sans-serif;
  font-size: 1rem; /* this is the reference, everything is "em" to this "rem" */
  display: flex;
  min-height: 100vh; /* needed for the sticky footer */
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  transition: font-size 0.5s ease, background-color 0.5s ease;
`

const Wallpaper = styled.div`
  width: 100%;
  & > div {
    background-color: #000000;

    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 40vh;
    overflow: hidden;
    margin-bottom: 40px;

    @media ${device.laptop} {
      margin-bottom: 10px;
    }

    & > div {
      mix-blend-mode: unset;
      width: 100%;
      height: 100%;
    }
  }
`

const ContainerGrid = styled.div`
  max-width: ${props => props.main_maxwidth};
  width: 100%;

  @media ${device.laptop} {
    padding: 0px 10px;
  }
`

const ContainerPost = styled.div`
  max-width: ${props => (props.fitGlobalWidth ? '80%' : props.main_maxwidth)};
  width: 100%;

  z-index: 1;
  display: grid;
  grid-template-columns: 1fr;
  /*  grid-template-columns: minmax(0, 1fr);*/
  grid-column-gap: 20px;

  transition: background-color 0.5s ease, max-width 0.5s ease;
  padding-bottom: 50px;
`

const StickyFoot = styled.div`
  flex: 1;
`

export const Structure = ({
  type,
  wallpapers,
  white_image,

  // mdx
  canonical,
  post,
  images,
  comments,

  // grid
  tags_grid,
  tag,
  global_tags,
  type_images,
  posts,
  pre_path,
  num_of_pages,
  current_page,
  isFirst,
  isLast,
  prev_page,
  next_page,

  // pages
  children,
  title,
  description,
  keywords,
  robots,
  image,
  nowallpaper,
  need_info,

  // tool
  main_maxwidth /* overwrite the variable, when sent by tools */,
}) => {
  if (!main_maxwidth) main_maxwidth = grid_maxwidth
  let dataseo

  if (type === 'mdx') {
    dataseo = {
      robots: 'index, follow',
      canonical: canonical,
      title: SeoText.post.pre_title + post.title,
      description: post.description,
      keywords: [...SeoText.generic_keywords, ...post.tags.map(el => el.replace(/_/g, ' '))],
      type: 'post',
    }
  } else if (type === 'tool') {
    dataseo = {
      robots: robots,
      canonical: canonical,
      title: title,
      description: description,
      keywords: keywords,
      type: 'page',
    }
  } else if (type === 'page') {
    dataseo = {
      robots: robots,
      title: title,
      description: description,
      keywords: keywords,
      type: 'page',
    }
  } else if (type === 'grid') {
    dataseo = {
      robots: 'index, follow',
      title: tags_grid ? SeoText.grid_class.title + tag + '' : SeoText.grid.title,
      description: tags_grid ? SeoText.grid_class.description + tag : SeoText.grid.description,
      keywords: tags_grid ? [...SeoText.generic_keywords, tag] : [...SeoText.generic_keywords],
      type: 'grid',
    }
  }

  /* wallpapers, useEffect to prevent repaints */
  /* ------------------------------ */
  const [wallpaper_image, setWallpaper_image] = useState(white_image)
  const [changeWallpaper, setChangeWallpaper] = useState()

  let wallpapers_small = wallpapers.filter(el => el.node.childImageSharp.fluid.originalName.slice(-7) === '_sm.jpg')
  let wallpapers_normal = wallpapers.filter(el => el.node.childImageSharp.fluid.originalName.slice(-7) !== '_sm.jpg')

  const random_or_selected_wallpaper = () => {
    let response = typeof window !== `undefined` ? window.localStorage.getItem('wallpaper') : ''
    if (!response || response === 'no_image.jpg') {
      wallpapers_normal = shuffle_array(wallpapers_normal)
      response = wallpapers_normal[0].node.childImageSharp.fluid.originalName
    }
    return response
  }

  /* 
    I only execute this once, not when repainted (except when the wallpaper is re-selected again)
    I use useState for the image, but for the name of the image useState was too slow, I need real variables
    */
  useEffect(() => {
    const stillMounted = { value: true }
    const returned_image = random_or_selected_wallpaper()
    const [wimage] = wallpapers_normal.filter(el => el.node.childImageSharp.fluid.originalName === returned_image)
    let wallpaper_image = wimage && wimage.node.childImageSharp.fluid
    //    stillMounted.value && setWallpaper_image(wallpaper_image)
    setWallpaper_image(wallpaper_image)

    return function cancelFetch() {
      stillMounted.value = false
    }
  }, [changeWallpaper]) // only run when changeWallpaper changes (only in the user section)
  /* ------------------------------ */

  /* add mobile detection to the theme */
  /* ------------------------------ 
  let is_this_a_mobile_device = false
  if (typeof window !== `undefined`)
    is_this_a_mobile_device =
      typeof window.orientation !== 'undefined' || navigator.userAgent.indexOf('IEMobile') !== -1
  const addToTheme = props => ({ is_this_a_mobile_device: is_this_a_mobile_device, ...props })
  /* ------------------------------ */

  /* open the width of the code divs, to be passed to Sidebar */
  /* ------------------------------ */
  const [fitGlobalWidth, setFitGlobalWidth] = useState(0)
  /* ------------------------------ */

  return (
    <Main>
      <SEO
        title={dataseo.title}
        description={dataseo.description}
        keywords={dataseo.keywords}
        robots={dataseo.robots}
        canonical={dataseo.canonical}
        type={dataseo.type}
      />

      <OldBrowser />

      <Top type={type} tags_grid={tags_grid} main_maxwidth={type === 'mdx' ? post_maxwidth : main_maxwidth} />

      {type === 'grid' && (
        <ContainerGrid main_maxwidth={main_maxwidth}>
          <CtaMain main_maxwidth={main_maxwidth} />

          <Cards
            main_maxwidth={main_maxwidth}
            posts={posts}
            isFirst={isFirst}
            isLast={isLast}
            prev_page={prev_page}
            next_page={next_page}
            num_of_pages={num_of_pages}
            pre_path={pre_path}
          />
        </ContainerGrid>
      )}

      {(type === 'mdx' || type === 'page' || type === 'tool') && (
        <>
          {(nowallpaper === 'false' || !nowallpaper) && (
            <Wallpaper type={type}>
              <div>{wallpaper_image && <Img alt="KUWorking foto" fluid={wallpaper_image} />}</div>
            </Wallpaper>
          )}

          {type === 'mdx' && (
            <ContainerPost main_maxwidth={post_maxwidth} fitGlobalWidth={fitGlobalWidth}>
              <Post
                main_maxwidth={post_maxwidth}
                post={post}
                comments={comments}
                fitGlobalWidth={fitGlobalWidth}
                setFitGlobalWidth={setFitGlobalWidth}
              />
            </ContainerPost>
          )}

          {(type === 'page' || type === 'tool') && (
            <>
              {/* for the profile page I need to pass as props wallpapers and setChangeWallpaper 
          I need to clone children due to immutability */}
              {(need_info === 'true' &&
                React.Children.map(children, child =>
                  React.cloneElement(child, {
                    wallpapers: wallpapers_small,
                    setChangeWallpaper: setChangeWallpaper,
                  })
                )) ||
                children}
            </>
          )}
        </>
      )}

      <StickyFoot />
      <Footer main_maxwidth={type === 'grid' ? main_maxwidth : post_maxwidth} />
    </Main>
  )
}
