const info = require(`./src/utils/info`)
const buildManifest = require(`./src/utils/manifest`)

const info_folders = {
  postsPath: info.website.postsPath || 'content/posts/entries',
  postImagesPath: info.website.postImagesPath || 'content/posts/images',
  pagesPath: info.website.pagesPath || 'content/pages',
}

module.exports = themeOptions => {
  return {
    siteMetadata: info.metaData,

    plugins: [
      {
        resolve: `gatsby-theme-kuworking-core`,
        options: {
          postsPerPage: themeOptions.website.postsPerPage || info.website.postsPerPage || 500,
          basePath: themeOptions.website.basePath || info.website.basePath || '/',
          tagsPath: themeOptions.website.tagsPath || info.website.tagsPath || 'tags',
          createTags: info.website.createTags,

          ...info_folders,

          do_not_count_type_for_pagination: info.website.do_not_count_type_for_pagination || [],
          do_not_include_type_in_lists: info.website.do_not_include_type_in_lists || [],
          do_not_create_tag_page_for: info.website.do_not_create_tag_page_for || [],
          do_not_include_type_in_related_posts: info.website.do_not_include_type_in_related_posts || [],
          type_that_have_images: info.website.type_that_have_images || [],

          folders_to_check: Object.values(info_folders),
          mdx: true,

          manifest: themeOptions.metaData ? buildManifest(themeOptions.metaData) : buildManifest(info.metaData),
          tagmanager: themeOptions.tagManager || info.tagManager || '',
          sitemap: themeOptions.siteMapExclude || info.siteMapExclude || [],
        },
      },
    ],
  }
}
