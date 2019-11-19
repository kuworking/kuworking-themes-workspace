module.exports = themeOptions => {
  return {
    basePath: themeOptions.basePath || `/`,
    postsPath: themeOptions.postsPath || `content/posts`,
    postImagesPath: themeOptions.postImagesPath || `content/posts/images`,
    recipesPath: themeOptions.recipesPath || `content/recipes`,
    recipesImagesPath: themeOptions.recipesImagesPath || `content/recipes/images`,
    iconsPath: themeOptions.iconsPath || `content/icons`,
    wallpapersPath: themeOptions.wallpapersPath || `content/wallpapers`,
    pagesPath: themeOptions.pagesPath || `content/pages`,
    tagsPath: themeOptions.tagsPath || `tags`,
    exclude_type_from_pagination: themeOptions.exclude_type_from_pagination || [],
    exclude_tag_from_create_pages: themeOptions.exclude_tag_from_create_pages || [],
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

    manifest: themeOptions.manifest,
    sitemap: themeOptions.sitemap,
    feeds: themeOptions.feeds,
    app: themeOptions.app,
    tagmanager: themeOptions.tagmanager,
  }
}
