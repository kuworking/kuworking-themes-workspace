import React from 'react'
import styled from '@emotion/styled'
import { Styled } from 'theme-ui'

import { SEO } from './seo'

const grid_maxwidth = '1000px'
const post_maxwidth = '800px'

export const Structure = ({ type, blogGrid, blogPost, blogPage }) => {
  const { images, location, canonical } = blogGrid || blogPost || blogPage
  const { page, children, main_maxwidth } = blogPage || ''
  const { posts, pagination, tags } = blogGrid || ''
  const { post, structure: { post_related_images, tags_related_posts } = {} } = blogPost || ''

  const maxWidth = (blogPost && post_maxwidth) || main_maxwidth || grid_maxwidth

  return (
    <Styled.root>
      <Main>
        <SEO type blogGrid blogPost blogPage />

        <Container maxWidth={maxWidth}>
          {(type === 'grid' && (
            <Grid>
              <h1>GRID</h1>
              <Lorem />
            </Grid>
          )) ||
            (type === 'mdx' && (
              <Post>
                <h1>POST</h1>
                <Lorem />
              </Post>
            )) ||
            ((type === 'page' || type === 'tool') && (
              <Page>
                <h1>PAGE</h1>
                <Lorem />
              </Page>
            ))}
        </Container>
      </Main>
    </Styled.root>
  )
}

const device = {
  laptop: `(max-width: 1100px)`,
  mobile: `(max-width: 600px)`,
  mobileS: `(max-width: 400px)`,
}

const Main = styled.main`
  background-color: #ffffff;
  display: flex;
  min-height: 100vh; /* needed for the sticky footer */
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  transition: font-size 0.5s ease, background-color 0.5s ease;
`

const Container = styled.div`
  max-width: ${props => props.maxWidth};
  width: 100%;

  @media ${device.laptop} {
    padding: 0px 10px;
  }
`
const Grid = styled.div`
  background-color: #eaeaea;
`
const Post = styled(Grid)
const Page = styled(Grid)

const Lorem = () => (
  <p>
    Can you punch up the fun level on these icons thanks for taking the time to make the website, but i already made it
    in wix, but can my website be in english?, or can you lower the price for the website? make it high quality and
    please use html can you make the font a bit bigger and change it to times new roman? jazz it up a little bit make
    the picture of the cupcake look delicious make the purple more well, purple-er it looks so empty add some more
    hearts can you add a bit of pastel pink and baby blue because the purple alone looks too fancy okay can you put a
    cute quote on the right side of the site? oh no it looks messed up! i think we need to start from scratch so can you
    turn it around in photoshop so we can see more of the front, try a more powerful colour. Can you turn it around in
    photoshop so we can see more of the front that will be a conversation piece make the font bigger or the hair is just
    too polarising. Can you make pink a little more pinkish this looks perfect. Just Photoshop out the dog, add a baby,
    and make the curtains blue, but there is too much white space for what you've given us is texty, we want sexy. Can
    you turn it around in photoshop so we can see more of the front can you punch up the fun level on these icons can we
    have another option. This looks perfect. Just Photoshop out the dog, add a baby, and make the curtains blue can you
    use a high definition screenshot. Can you lower the price for the website? make it high quality and please use html
    can you make the font a bit bigger and change it to times new roman? jazz it up a little bit make the picture of the
    cupcake look delicious make the purple more well, purple-er it looks so empty add some more hearts can you add a bit
    of pastel pink and baby blue because the purple alone looks too fancy okay can you put a cute quote on the right
    side of the site? oh no it looks messed up! i think we need to start from scratch. We are your relatives can the
    black be darker yet can you please change the color theme of the website to pink and purple? make the logo a bit
    smaller because the logo is too big can you link the icons to my social media accounts? oh and please put pictures
    of cats everywhere and could you solutionize that for me. Make it pop. Try a more powerful colour the target
    audience is makes and famles aged zero and up, and that's great, but can you make it work for ie 2 please yet I want
    you to take it to the next level can it be more retro, or we need more images of groups of people having
    non-specific types of fun. We have big contacts we will promote you the target audience is makes and famles aged
    zero and up can you rework to make the pizza look more delicious. Can you make the blue bluer? can you please send
    me the design specs again? can you punch up the fun level on these icons try a more powerful colour. This is just a
    5 minutes job can it be more retro, for can we try some other colours maybe. Could you rotate the picture to show
    the other side of the room? it needs to be the same, but totally different we try your eye, but can you change
    everything? and you might wanna give it another shot is there a way we can make the page feel more introductory
    without being cheesy make it pop. Can my website be in english?. We are a non-profit organization the target
    audience is makes and famles aged zero and up, so we are a non-profit organization, yet this was not according to
    brief, and I think we need to start from scratch. It's great, can you add a beard though make it look like Apple
    that sandwich needs to be more playful, yet can you please send me the design specs again?, so that will be a
    conversation piece. The flier should feel like a warm handshake I like it, but can the snow look a little warmer, so
    jazz it up a little, or I got your invoice...it seems really high, why did you charge so much, or there is too much
    white space there is too much white space needs to be sleeker. We are a startup we need to make the new version
    clean and sexy but could you solutionize that for me thanks for taking the time to make the website, but i already
    made it in wix, we are a startup. Needs to be sleeker doing some work for us "pro bono" will really add to your
    portfolio i promise and mmm, exactly like that, but different nor I know somebody who can do this for a reasonable
    cost, so we don't need a backup, it never goes down!. Other agencies charge much lesser I need a website. How much
    will it cost. We try your eye, but can you change everything? we are a non-profit organization the website doesn't
    have the theme i was going for and mmm, exactly like that, but different, but thats not what i saw in my head at
    all. I'll know it when i see it the hair is just too polarising, so anyway, you are the designer, you know what to
    do, so that will be a conversation piece. Mmm, exactly like that, but different jazz it up a little, yet thanks for
    taking the time to make the website, but i already made it in wix can you make it look like this clipart i found.
  </p>
)
