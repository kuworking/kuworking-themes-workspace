const buildManifest = require('./manifest')
const buildFeeds = require('./feeds')

module.exports = themeOptions => {
  return {
    basePath: themeOptions.basePath || `/`,
    postsPath: themeOptions.postsPath || `content/posts`,
    postImagesPath: themeOptions.postImagesPath || `content/posts/images`,
    iconsPath: themeOptions.iconsPath || `content/icons`,
    wallpapersPath: themeOptions.wallpapersPath || `content/wallpapers`,
    pagesPath: themeOptions.pagesPath || `content/pages`,
    tagsPath: themeOptions.tagsPath || `tags`,
    mdx: themeOptions.mdx || true,
    postsPerPage: themeOptions.postsPerPage || 50,
    folders_to_check: themeOptions.folders_to_check || [
      'content/posts',
      'content/posts/images',
      'content/icons',
      'content/wallpapers',
      'content/pages',
      'content/core',
    ],

    manifest: buildManifest(themeOptions.app),
    feeds: buildFeeds(themeOptions.app),
    app: themeOptions.app,
    tagmanager: themeOptions.tagmanager,
    sitemap: themeOptions.sitemap,
  }
}
