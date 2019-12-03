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
    do_not_count_type_for_pagination: themeOptions.do_not_count_type_for_pagination || [],
    do_not_include_type_in_lists: themeOptions.do_not_include_type_in_lists || [],
    do_not_create_tag_page_for: themeOptions.do_not_create_tag_page_for || [],
    mdx: themeOptions.mdx || true,
    postsPerPage: themeOptions.postsPerPage || 50,
    folders_to_check: themeOptions.folders_to_check || [
      'content/posts',
      'content/posts/images',
      'content/recipes',
      'content/recipes/images',
      'content/icons',
      'content/wallpapers',
      'content/pages',
    ],

    manifest: themeOptions.manifest,
    sitemap: themeOptions.sitemap,
    feeds: themeOptions.feeds,
    app: themeOptions.app,
    tagmanager: themeOptions.tagmanager,
  }
}
