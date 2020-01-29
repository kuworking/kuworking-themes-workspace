const info = require(`./info`)
const buildManifest = require(`./manifest`)

module.exports = themeOptions => {
  const source = themeOptions.info || info

  return {
    standalone: source.standalone || true,
    jsonPath: source.website.jsonPath || 'content/json',
    basePath: source.website.basePath || `/`,
    folders_to_check: source.folders_to_check || ['content/json'],

    manifest: buildManifest(source.metaData),
    tagmanager: source.tagManager || '',
    sitemap: source.siteMapExclude || [],
  }
}
