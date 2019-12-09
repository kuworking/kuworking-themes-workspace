const info = require(`./info`)
const buildFeeds = require(`./feeds`)
const buildManifest = require(`./manifest`)

module.exports = themeOptions => {
  const source = themeOptions.info ? themeOptions.info : info
  const recipesPath = source.website.recipesPath || null
  const recipesImagesPath = source.website.recipesImagesPath || null
  const recipeFolders = (source.website.recipesPath && [`content/recipes/images`, `content/recipes`]) || []

  return {
    postsPerPage: source.website.postsPerPage || 100,
    basePath: source.website.basePath || '/',
    postsPath: source.website.postsPath || 'content/posts',
    postImagesPath: source.website.postImagesPath || 'content/posts/images',
    recipesPath,
    recipesImagesPath,
    iconsPath: source.website.iconsPath || 'content/icons',
    wallpapersPath: source.website.wallpapersPath || 'content/wallpapers',
    pagesPath: source.website.pagesPath || 'content/pages',
    tagsPath: source.website.tagsPath || 'tags',
    do_not_count_type_for_pagination: source.website.do_not_count_type_for_pagination || [],
    do_not_include_type_in_lists: source.website.do_not_include_type_in_lists || [],
    do_not_create_tag_page_for: source.website.do_not_create_tag_page_for || [],
    folders_to_check: source.folders_to_check || [
      'content/posts',
      'content/posts/images',
      'content/icons',
      'content/wallpapers',
      'content/pages',
      'content/core',
      ...recipeFolders,
    ],
    mdx: true,

    manifest: buildManifest(source.metaData),
    feeds: source.feeds ? source.feeds(source.metaData) : buildFeeds(source.metaData),
    tagmanager: source.tagManager || '',
    sitemap: source.siteMapExclude || [],
  }
}
