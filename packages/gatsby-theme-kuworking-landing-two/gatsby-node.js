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

// if configured as a standalone, it generates a grid page
// if it is consumed as an add-on, it does not create any page

// These templates are simply data-fetching wrappers that import components (and allow shadowing)
const Template = require.resolve(`./src/templates/template`)

exports.createPages = async ({ graphql, actions, reporter }, themeOptions) => {
  const { basePath } = withDefaults(themeOptions)
  const { createPage } = actions

  createPage({
    path: basePath || '/',
    component: Template,
    context: { basePath, thePath: basePath },
  })
}
