const info = require(`./info`)

module.exports = themeOptions => {
  const source = themeOptions || info

  return {
    standalone: source.standalone || true,
    basePath: source.basePath || `/`,
    jsonPath: source.jsonPath || 'content/json',
    folders_to_check: [source.jsonPath] || ['content/json'],
    manifest: source.manifest,
    tagmanager: source.tagManager || '',
    sitemap: source.siteMapExclude || [],
  }
}
