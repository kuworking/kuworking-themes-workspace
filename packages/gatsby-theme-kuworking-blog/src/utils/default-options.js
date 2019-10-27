module.exports = themeOptions => {
  const postsPerPage = themeOptions.postsPerPage || 50

  return { postsPerPage }
}
