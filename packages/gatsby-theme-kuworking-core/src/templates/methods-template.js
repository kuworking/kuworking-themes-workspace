export const get_image = (images, name) =>
  images.filter(el => el.node.childImageSharp.fluid.originalName.slice(0, -4) === name)[0]

export const get_fixed_image = (images, name) =>
  images.filter(el => el.node.childImageSharp.fixed.originalName.slice(0, -4) === name)[0]

export const get_folder_image = (images, name) => images.filter(el => el.node.relativeDirectory === name)

export const get_data = post => ({
  pageName: post.slug.replace(/\//g, ''), // needed for the 1st slash, the last one is already removed
  type: post.type || '',
})

const fill_related_posts = (posts, post, images) => {
  let this_is_the_own_post

  posts.forEach(({ node: this_post }, i) => {
    this_post.name = this_post.slug.replace(/\//g, '')
    this_post.image = get_image(images.images, this_post.name)
    this_post.description = this_post.snippet
    if (this_post.title === post.title) this_is_the_own_post = i
  })

  posts.splice(this_is_the_own_post, 1) // remove the same post from the array
}

export const get_posts_with_the_same_tags = (post, allPosts, images) => {
  let posts_with_the_same_tags = []

  post.tags.forEach(tag => {
    const these_posts = [...allPosts.edges.filter(el => el.node.tags.includes(tag))]
    fill_related_posts(these_posts, post, images)
    posts_with_the_same_tags.push(...these_posts)
  })

  posts_with_the_same_tags = Array.from(new Set(posts_with_the_same_tags)) // duplicates are removed
  return posts_with_the_same_tags
}

export const post_structure = (post, image, fixed) => ({
  date: post.date,
  tags: post.tags,
  timeToRead: post.parent ? post.parent.timeToRead : '',
  words: post.parent ? post.parent.wordCount.words : '',
  abstract: post.abstract
    .replace(/_(.*?)_/g, '<i>$1</i>')
    .replace(/\*(.*?)\*/g, '<i>$1</i>')
    .replace(/__(.*?)__/g, '<b>$1</b>')
    .replace(/\*\*(.*?)\*\*/g, '<b>$1</b>'),
  content: post.body,
  title: post.title,
  description: post.snippet,
  name: post.slug.replace(/\//g, ''), // needed for the 1st slash, the last one is already removed
  image: image && ((fixed && image.node.childImageSharp.fixed) || image.node.childImageSharp.fluid), // image of the post ('none.jpg' if none)
  full_image: image && image.publicURL, // image of the post ('none.jpg' if none) in its original resolution
})
