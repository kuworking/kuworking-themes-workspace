module.exports = themeOptions => {
  const basePath = themeOptions.basePath || `/`

  const contentPath = themeOptions.contentPath || `content/posts`
  const contentImagesPath = themeOptions.contentImagesPath || `content/posts/images`
  const contentCommentsPath = themeOptions.contentCommentsPath || `content/posts/comments`
  const contentTypesPath = themeOptions.contentTypesPath || `content/posts/types`

  const recipesPath = themeOptions.recipesPath || `content/recipes`
  const recipesImagesPath = themeOptions.recipesImagesPath || `content/recipes/images`
  const recipesCommentsPath = themeOptions.recipesCommentsPath || `content/recipes/comments`
  const recipesTypesPath = themeOptions.recipesTypesPath || `content/recipes/types`

  const assetPath = themeOptions.assetPath || `content/assets`
  const wallpaperPath = themeOptions.wallpaperPath || `content/assets/wallpapers`

  const tagsPath = themeOptions.tagsPath || `tags`
  const mdx = themeOptions.mdx || true
  const postsPerPage = themeOptions.postsPerPage || 50
  const disqusShortname = themeOptions.disqusShortname || ''

  return {
    folders_to_check: [
      contentPath,
      contentImagesPath,
      contentCommentsPath,
      contentTypesPath,
      recipesPath,
      recipesImagesPath,
      recipesCommentsPath,
      recipesTypesPath,
      assetPath,
      wallpaperPath,
    ],
    basePath,
    contentPath,
    recipesPath,
    assetPath,
    tagsPath,
    mdx,
    postsPerPage,
    disqusShortname,
  }
}
