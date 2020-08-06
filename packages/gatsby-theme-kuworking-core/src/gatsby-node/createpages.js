const fs = require('fs')

const withDefaults = require(`../../utils/default-options`)
const {
  get_image_versions,
  get_last_slug,
  post_structure,
  shuffle_array,
  array_chunk,
  structure_image_versions,
} = require(`./methods`)

/**
 * These templates are simply data-fetching wrappers that import components (and allow shadowing)
 * Except for the grid, where I don't use a query (everything is done in gatsby-node)
 */

const GlobalQuery = require(`../queries/global-query`)
const PostTemplate = require.resolve(`../queries/post-query`)
const PostsTemplate = require.resolve(`../queries/posts-query`)

exports.createPages = async ({ graphql, actions, reporter }, themeOptions) => {
  const { createPage } = actions
  const {
    basePath,
    postsPerPage,
    tagsPath,
    createTags,
    postsPath,
    wallpapersPath,
    postImagesPath,
    do_not_count_type_for_pagination,
    do_not_include_type_in_lists,
    do_not_include_type_in_related_posts,
    do_not_create_tag_page_for,
  } = withDefaults(themeOptions)

  const result = await graphql(GlobalQuery.data, {
    wallpapers: wallpapersPath || '',
    posts: postsPath,
    images: postImagesPath || '',
  })
  if (result.errors) reporter.panic(result.errors)

  const raw_posts = result.data.raw_posts.edges
  const wallpapers = result.data.wallpapers.edges
  const post_images = result.data.post_images.edges
  const grid_images = post_images.filter(({ node: { relativeDirectory } }) => relativeDirectory === '') // images without any folder

  /**
   * Relate the images with the posts and create a post structure
   */

  const posts = []
  const types = new Set()
  raw_posts.forEach(({ node: post }, index) => {
    const image = get_image_versions(grid_images, get_last_slug(post.slug))
    types.add(post.type)
    posts.push({
      ...post_structure(post, image),
      key: 'post_' + index,
    })
  })

  const typesCounter = {}
  Array.from(types).forEach(t => {
    typesCounter[t] = posts.filter(p => p.type === t).length
  })

  const createMainGrid = () => {
    /**
     * MAIN GRID
     * Create the main page with all posts (with JSON files)
     */

    const filtered_posts_by_type = do_not_count_type_for_pagination
      ? posts.filter(post => !do_not_count_type_for_pagination.includes(post.type))
      : posts

    // Write existing posts in a json file to avoid sending it within the context and enlarging JS bundle
    // But first chunk is sent through context
    const [first_group, ...groups_of_posts] = array_chunk(filtered_posts_by_type, 50)
    const base = basePath.substring(1)
    // separate loop for a sync action
    const filenames = groups_of_posts.map((_, i) => `${base}grid${i}.json`)
    // async on purpose
    groups_of_posts.forEach((data, i) =>
      fs.writeFile(`./public/${base}grid${i}.json`, JSON.stringify(data), 'utf8', err =>
        err ? console.log(err) : console.log(`file written: ./public/${base}grid${i}.json`)
      )
    )

    //const numPages = Math.ceil(filtered_posts_by_type.length / postsPerPage)

    //    Array.from({ length: numPages }).forEach((_, index) => {
    createPage({
      //      path: index === 0 ? basePath : `${basePath}${index + 1}`,
      path: basePath,

      component: PostsTemplate,
      context: {
        thePath: '',
        posts: first_group,
        posts_files: filenames,
        wallpapers: wallpapers,
        types: typesCounter,

        basePath: basePath,
        pre_path: basePath, // different when creating tags
        //current_page: index + 1,
        this_is_a_tag_search: false,
      },
    })
    //    })
  }

  const createTagPages = () => {
    /**
     * TAGS
     * Create a main page for each specific tag (with JSON files)
     * First create a global array of tags
     * then create pages
     */

    if (!createTags) return

    const filtered_posts_by_type2 = do_not_include_type_in_lists
      ? posts.filter(post => !do_not_include_type_in_lists.includes(post.type))
      : posts

    let global_tags = []
    const counting_by_tags = {}
    filtered_posts_by_type2.forEach(post => {
      global_tags = global_tags.concat(post.tags)
      post.tags.forEach(tag => {
        if (!counting_by_tags[tag]) counting_by_tags[tag] = 0
        counting_by_tags[tag]++
      })
    })

    const base = basePath.substring(1)

    // and the Tags Posts pages
    global_tags = [...new Set(global_tags)].filter(tag => tag !== do_not_create_tag_page_for)
    global_tags.forEach(tag => {
      const tagPosts = filtered_posts_by_type2.filter(post => post.tags.includes(tag))
      const tagCounter = tagPosts.length
      const [first_group, ...groups_of_posts] = array_chunk(tagPosts, 50)
      // separate loop for a sync action
      const filenames = groups_of_posts.map((_, i) => `${base}grid_tags_${tag}${i}.json`)
      groups_of_posts.forEach((data, i) =>
        fs.writeFile(`./public/${base}grid_tags_${tag}${i}.json`, JSON.stringify(data), 'utf8', err =>
          err ? console.log(err) : console.log(`file written: ./public/${base}grid_tags_${tag}${i}.json`)
        )
      )

      // let numPages_perTag = Math.ceil(counting_by_tags[tag] / postsPerPage)

      //      Array.from({ length: numPages_perTag }).forEach((_, index) => {
      // const thePath = index === 0 ? `${basePath}${tagsPath}/${tag}/` : `${basePath}${tagsPath}/${tag}/${index + 1}`
      const thePath = `${basePath}${tagsPath}/${tag}/`
      createPage({
        path: thePath,
        component: PostsTemplate,
        context: {
          thePath: thePath,
          posts: first_group,
          posts_files: filenames,
          wallpapers: wallpapers,

          basePath: basePath,
          pre_path: `${basePath}${tagsPath}/${tag}`, // different when creating tags
          // num_of_pages: numPages_perTag,
          // current_page: index + 1,
          tag: tag,
          global_tags: global_tags,
          tagCounter: tagCounter,
          this_is_a_tag_search: true,
        },
      })
    })
    //   })
  }

  const createPosts = () => {
    /**
     * Create pages for each MDX post
     * Save a JSON file for all posts, spliced, as a sort of pagination to be fetched and not passed through context
     */

    // write existing posts in a json file to avoid sending it within the context and enlarging JS bundle
    const groups_of_posts = array_chunk(posts, 50)
    const base = basePath.substring(1)
    // separate loop for a sync action
    const filenames = groups_of_posts.map((_, i) => `${base}posts${i}.json`)
    // async on purpose
    groups_of_posts.forEach((data, i) =>
      fs.writeFile(`./public/${base}posts${i}.json`, JSON.stringify(data), 'utf8', err =>
        err ? console.log(err) : console.log(`file written: ./public/${base}posts${i}.json`)
      )
    )

    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1]
      const next = index === 0 ? null : posts[index - 1]
      const { slug, name } = post

      createPage({
        path: slug,
        component: PostTemplate,
        context: {
          thePath: slug,
          post: post,
          post_images: structure_image_versions(
            post_images.filter(({ node: { relativeDirectory } }) => relativeDirectory === name)
          ),

          posts_files: filenames,
          wallpapers: wallpapers,
          types: typesCounter,

          basePath: basePath,
          pre_path: basePath, // different when creating tags
          id: post.id,
          folder: `/${post.name.split('/')[0]}\//`,
          previousId: previous ? previous.id : undefined,
          nextId: next ? next.id : undefined,
        },
      })
    })
  }

  createMainGrid()
  createTagPages()
  createPosts()
}
