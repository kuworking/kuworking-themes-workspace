const fs = require(`fs`)
const path = require(`path`)
const mkdirp = require(`mkdirp`)
const crypto = require(`crypto`)
const Debug = require(`debug`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const { urlResolve } = require(`gatsby-core-utils`)

const debug = Debug(`gatsby-theme-blog-core`)
const withDefaults = require(`./utils/default-options`)

// remove the trailing dashes, still, not well resolved, only applies to pages here
const replacePath = _path => (_path === `/` ? _path : _path.replace(/\/$/, ``))

exports.onCreatePage = async ({ page, actions }, themeOptions) => {
  const { basePath } = withDefaults(themeOptions)
  const { createPage, deletePage } = actions

  const oldPage = Object.assign({}, page)
  const newPage = Object.assign({}, page)
  newPage.path = urlResolve(replacePath(basePath), replacePath(page.path))
  newPage.context = { pre_path: `${basePath}` }
  page.path = replacePath(page.path)
  page.context = { pre_path: `${basePath}` }
  deletePage(oldPage)
  createPage(page)
  createPage(newPage)
}

// Ensure that content directories exist at site-level
exports.onPreBootstrap = ({ store }, themeOptions) => {
  const { program } = store.getState()
  const { folders_to_check } = withDefaults(themeOptions) // recipes are optional

  const dirs = folders_to_check.map(el => path.join(program.directory, el))
  dirs.forEach(dir => {
    debug(`Initializing ${dir} directory`)
    if (!fs.existsSync(dir)) {
      mkdirp.sync(dir)
    }
  })
}

// Create fields for post slugs and source
// This will change with schema customization with work
exports.onCreateNode = async ({ node, actions, getNode, createNodeId }, themeOptions) => {
  const { createNode, createParentChildLink } = actions
  const { postsPath, basePath } = withDefaults(themeOptions)

  // Make sure it's an MDX node
  if (node.internal.type !== `Mdx`) return

  const fileNode = getNode(node.parent)
  const source = fileNode.sourceInstanceName

  if (node.internal.type === `Mdx` && source === postsPath) {
    let slug

    if (node.frontmatter.slug) {
      // typically I don't add a slug, I infere it here
      if (path.isAbsolute(node.frontmatter.slug)) {
        // absolute paths take precedence
        slug = node.frontmatter.slug
      } else {
        // otherwise a relative slug gets turned into a sub path
        slug = urlResolve(basePath, node.frontmatter.slug)
      }
    } else {
      // otherwise use the filepath function from gatsby-source-filesystem
      const filePath = createFilePath({
        node: fileNode,
        getNode,
        basePath: source,
      })

      const changedPath = /^.\d{4}\.\d{2}\.\d{2}\./.test(filePath) ? '/' + filePath.split('.').pop() : filePath
      slug = urlResolve(basePath, changedPath)
    }

    // prettier-ignore
    const tags = node.frontmatter.tags
      ? node.frontmatter.tags.split(',').map(el =>
        el
          .trim()
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .replace(/ /g, '-')
      )
      : []

    slug = replacePath(slug)

    const fieldData = {
      title: node.frontmatter.title,
      tags,
      slug,
      date: node.frontmatter.date,
      keywords: node.frontmatter.keywords || [],
      type: node.frontmatter.type || '',
      snippet: node.frontmatter.snippet || '',
      abstract: node.frontmatter.abstract || '',
    }

    const mdxBlogPostId = createNodeId(`${node.id} >>> MdxBlogPost`)
    await createNode({
      ...fieldData,
      // Required fields.
      id: mdxBlogPostId,
      parent: node.id,
      children: [],
      internal: {
        type: `MdxBlogPost`,
        contentDigest: crypto
          .createHash(`md5`)
          .update(JSON.stringify(fieldData))
          .digest(`hex`),
        content: JSON.stringify(fieldData),
        description: `Mdx implementation of the BlogPost interface`,
      },
    })
    createParentChildLink({ parent: node, child: getNode(mdxBlogPostId) })
  }
}

// These templates are simply data-fetching wrappers that import components (and allow shadowing)
const PostTemplate = require.resolve(`./src/queries/post-query`)
const PostsTemplate = require.resolve(`./src/queries/posts-query`)

exports.createPages = async ({ graphql, actions, reporter }, themeOptions) => {
  const { createPage } = actions
  const { basePath, postsPerPage, tagsPath } = withDefaults(themeOptions)

  const result = await graphql(`
    {
      allMdxBlogPost(sort: { fields: [date, title], order: DESC }, limit: 1000) {
        edges {
          node {
            id
            slug
            tags
            type
          }
        }
      }
    }
  `)

  if (result.errors) reporter.panic(result.errors)

  // Create pages.
  const posts = result.data.allMdxBlogPost.edges

  // Create pages for each post
  posts.forEach(({ node: post }, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1]
    const next = index === 0 ? null : posts[index - 1]
    const { slug } = post
    createPage({
      path: slug,
      component: PostTemplate,
      context: {
        pre_path: `${basePath}`,
        id: post.id,
        previousId: previous ? previous.node.id : undefined,
        nextId: next ? next.node.id : undefined,
      },
    })
  })

  // Create the Posts (grid) page with pagination
  // But filter out those posts that are courses
  //  const numPages = Math.ceil(posts.length / postsPerPage)
  const numPages = Math.ceil(posts.length / postsPerPage)

  Array.from({ length: numPages }).forEach((_, index) => {
    createPage({
      path: index === 0 ? basePath : `${basePath}${index + 1}`,
      component: PostsTemplate,
      context: {
        pre_path: `${basePath}`,
        limit: postsPerPage,
        skip: index * postsPerPage,
        num_of_pages: numPages,
        current_page: index + 1,
        this_is_a_tag_search: false,
      },
    })
  })

  // Create the Tags Posts page with pagination
  // A global array of all employed tags
  let global_tags = []
  let counting_by_tags = {}
  posts.forEach(({ node: post }, index) => {
    const { tags } = post
    global_tags = global_tags.concat(tags)
    tags.map(tag => {
      if (!counting_by_tags[tag]) counting_by_tags[tag] = 0
      counting_by_tags[tag]++
    })
  })

  // and the Tags Posts pages
  global_tags = [...new Set(global_tags)] // to eliminate duplicates
  global_tags.forEach(tag => {
    let numPages_perTag = Math.ceil(counting_by_tags[tag] / postsPerPage)

    Array.from({ length: numPages_perTag }).forEach((_, index) => {
      createPage({
        path: index === 0 ? `${basePath}${tagsPath}/${tag}/` : `${basePath}${tagsPath}/${tag}/${index + 1}`,
        component: PostsTemplate,
        context: {
          pre_path: `${basePath}/${tagsPath}/${tag}`,
          limit: postsPerPage,
          skip: index * postsPerPage,
          num_of_pages: numPages_perTag,
          current_page: index + 1,
          tag: tag,
          global_tags: global_tags,
          this_is_a_tag_search: true,
        },
      })
    })
  })
}
