const info = require(`./info`)
const buildManifest = require(`./manifest`)

module.exports = themeOptions => {
  const source = themeOptions || info

  return {
    standalone: (themeOptions && source.standalone) || true,
    basePath: source.basePath || `/`,
    folders_to_check: [],
    manifest: (source.metaData && buildManifest(source.metaData)) || '',
    tagmanager: source.tagManager || '',
    sitemap: source.siteMapExclude || [],
  }
}
