module.exports = {
  website: {
    postsPerPage: 100,
    basePath: '/',
    do_not_count_type_for_pagination: [], // in the main grid I don't show 'blog's nor 'course's
    do_not_include_type_in_lists: [], // In /tags/css I don't want that 'course's appear
    do_not_create_tag_page_for: [], // I don't want the /tags/curso
  },
  metaData: {
    site: 'kuworking',
    title: 'Gatsby Theme kuworking One',
    description: 'Gatsby Theme kuworking One',
    siteUrl: 'https://www.kuworking.com',
  },
  tagManager: '',
  siteMapExclude: ['/tags/*', '/dummy'],
  folders_to_check: [
    'content/posts',
    'content/posts/images',
    'content/icons',
    'content/wallpapers',
    'content/pages',
    'content/core',
  ],
}
