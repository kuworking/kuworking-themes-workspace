module.exports = site => ({
  name: site.title,
  short_name: site.site,
  start_url: site.basePath || '/',
  background_color: '#ffffff',
  theme_color: '#000000',
  display: `minimal-ui`,
  icon: `content/favicon.png`,
  include_favicon: true,
})
