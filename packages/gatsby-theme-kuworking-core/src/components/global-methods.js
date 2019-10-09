export const fixDate = string_date => {
  let [year, month, day] = string_date.split('.') // iOS is not understanding the date format
  month = parseInt(month) - 1
  return {
    date: new Date(year, month, day).toLocaleString('es-ES', {
      year: 'numeric',
      month: '2-digit',
      day: 'numeric',
    }),
    months: Math.floor((new Date(Date.now()) - new Date(year, month, day)) / (1000 * 60 * 60 * 24 * 30)),
  }
}

export const get_image = (images, name) => {
  const [image] = images && images.filter(el => el.node.childImageSharp.fluid.originalName.slice(0, -4) === name)
  return image
}

export const get_and_remove_image = (images, name) => {
  const [image] = images && images.filter(el => el.node.childImageSharp.fluid.originalName.slice(0, -4) === name)
  const new_images = images && images.filter(el => el.node.childImageSharp.fluid.originalName.slice(0, -4) !== name)
  return [new_images, image]
}

export const get_raw_image = (images, name) => {
  const [image] = images && images.filter(el => el.node.name === name)
  return image
}

export const get_folder_image = (images, name) => images && images.filter(el => el.node.relativeDirectory === name)

export const get_data = post => ({
  pageName: post.slug.replace(/\//g, ''), // needed for the 1st slash, the last one is already removed
  type: post.type || '',
})

export const post_structure = (post, image, type_image_src, post_image_src) => ({
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
  type: post.type,
  src: image && image.node.childImageSharp.fluid, // image of the post ('none.jpg' if none)
  publicUrl: image && image.node.childImageSharp.fluid.src, // image of the post ('none.jpg' if none)
  type_image: type_image_src, // type of the post, if present in the frontmatter, not processed by gatsby (no fluid)
  post_image: post_image_src, // image of the post, if present ni the folder with the same pageName, not processed by gatsby (no fluid)
})

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
