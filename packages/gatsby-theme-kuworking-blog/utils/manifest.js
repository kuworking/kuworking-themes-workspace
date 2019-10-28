module.exports = site => ({
  name: site.siteUrl,
  short_name: site.title,
  start_url: site.start_url,
  background_color: '#ffffff',
  theme_color: '#000000',
  display: `minimal-ui`,
  icon: `content/icons/favicon.png`,
  include_favicon: true,
})
