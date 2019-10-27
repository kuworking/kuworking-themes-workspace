const manifest = require('../src/utils/manifest')
const sitemap = require('../src/utils/sitemap')
const tagmanager = require('../src/utils/tagmanager')
const feed = require('../src/utils/feed')

module.exports = themeOptions => {
  const basePath = themeOptions.basePath || `/`

  const postsPath = themeOptions.postsPath || `content/posts`
  const postImagesPath = themeOptions.postImagesPath || `content/posts/images`
  const iconsPath = themeOptions.iconsPath || `content/icons`
  const wallpapersPath = themeOptions.wallpapersPath || `content/wallpapers`
  const pagesPath = themeOptions.pagesPath || `content/pages`
  const tagsPath = themeOptions.tagsPath || `tags`

  const mdx = themeOptions.mdx || true
  const postsPerPage = themeOptions.postsPerPage || 50

  return {
    folders_to_check: [postsPath, postImagesPath, iconsPath, wallpapersPath, pagesPath, 'content/core'],
    basePath,
    postsPath,
    postImagesPath,
    iconsPath,
    wallpapersPath,
    pagesPath,
    tagsPath,
    mdx,
    postsPerPage,
    manifest,
    sitemap,
    tagmanager,
    feed,
  }
}
