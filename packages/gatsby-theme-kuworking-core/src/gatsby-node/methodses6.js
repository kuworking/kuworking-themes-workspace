export const shuffle_array = array => {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    // And swap it with the current element.
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }

  return array
}

export const get_image_versions = (images, name) =>
  Object.assign(
    {},
    ...images
      .filter(el => el.node.name.split('---')[0] === name)
      .map(el => ({ [el.node.name.split('---')[1] || 'standard']: el.node.publicURL }))
  )

export const get_last_slug = str =>
  str &&
  str
    .replace(/\/.*\//g, '')
    .replace(/^\//, '')
    .replace(/\/$/, '')

export const post_structure = (post, image) => ({
  id: post.id,
  date: post.date,
  tags: post.tags,
  timeToRead: post.parent ? post.parent.timeToRead : '',
  words: post.parent ? post.parent.wordCount.words : '',
  abstract: post.abstract
    .replace(/_(.*?)_/g, '<i>$1</i>')
    .replace(/\*(.*?)\*/g, '<i>$1</i>')
    .replace(/__(.*?)__/g, '<b>$1</b>')
    .replace(/\*\*(.*?)\*\*/g, '<b>$1</b>'),
  content: (post.parent && post.parent.body) || '',
  title: post.title,
  type: post.type,
  description: post.snippet,
  name: post.slug.replace(/^\//, ''), // needed for the 1st slash, the last one is already removed
  slug: post.slug,
  full_image: image && image.standard,
  image_versions: image || '',
})

// remove the trailing dashes, still, not well resolved, only applies to pages here
export const replacePath = _path => (_path === `/` ? _path : _path.replace(/\/$/, ``))

export const build_post_structure = (raw_posts, grid_images) => {
  const posts = []
  raw_posts.forEach(({ node: post }, index) => {
    const image = get_image_versions(grid_images, get_last_slug(post.slug))
    types.add(post.type)
    posts.push({
      ...post_structure(post, image),
      key: 'post_' + index,
    })
  })
  return posts
}