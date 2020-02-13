const fs = require(`fs`)
const path = require(`path`)
const mkdirp = require(`mkdirp`)
const withDefaults = require(`./utils/default-options`)

// Ensure that content directories exist at site-level
exports.onPreBootstrap = ({ store }, themeOptions) => {
  const { program } = store.getState()
  const { folders_to_check } = withDefaults(themeOptions)

  const dirs = folders_to_check.map(el => path.join(program.directory, el))
  dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
      mkdirp.sync(dir)
    }
  })
}

// Create a node for json files in 'content/json' with the content of the files without being parsed
exports.onCreateNode = async ({ node, actions, loadNodeContent, createNodeId, createContentDigest }, themeOptions) => {
  const { createNode, createParentChildLink } = actions

  if (node.internal.mediaType !== `application/json`) return

  const content = await loadNodeContent(node)
  const jsonId = createNodeId(`${node.id} >>> JSON`)
  const jsonNode = {
    name: node.name,
    content: content,
    id: jsonId,
    children: [],
    parent: node.id,
    internal: {
      contentDigest: createContentDigest(content),
      type: 'JsonContent',
    },
  }
  createNode(jsonNode)
  createParentChildLink({ parent: node, child: jsonNode }, themeOptions)
}

// if configured as a standalone, it generates a grid page
// if it is consumed as an add-on, it does not create any page

// These templates are simply data-fetching wrappers that import components (and allow shadowing)
const Template = require.resolve(`./src/templates/template`)

exports.createPages = async ({ graphql, actions, reporter }, themeOptions) => {
  const { basePath } = withDefaults(themeOptions)
  const { createPage } = actions

  const result = await graphql(`
    {
      core: allJsonContent {
        edges {
          node {
            name
            content
          }
        }
      }
    }
  `)

  if (result.errors) reporter.panic(result.errors)
  const jsonentries = result.data.core.edges

  createPage({
    path: basePath || '/',
    component: Template,
    context: { basePath, jsonentries }, // context is ignored here, submitted a question in gatsbyjs
  })
}
