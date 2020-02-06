const info = require(`./info`)
const buildManifest = require(`./manifest`)

module.exports = themeOptions => {
  const source = themeOptions || info

  return {
    standalone: (themeOptions && source.standalone) || true,
    basePath: source.basePath || `/`,
    jsonPath: source.jsonPath || 'content/json',
    folders_to_check: [source.jsonPath] || ['content/json'],
    manifest: (source.metaData && buildManifest(source.metaData)) || '',
    tagmanager: source.tagManager || '',
    sitemap: source.siteMapExclude || [],
  }
}
