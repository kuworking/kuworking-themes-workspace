import React from 'react'
import { progress } from 'gatsby-theme-kuworking-core'

/*
 Because wrapRootElement doesn’t render when the page changes it’s a good fit for context providers...
 ... that don’t need the page like theme or global application state providers
 */
export const wrapRootElement = ({ element }) => {
  return (
    <>
      {element}
      {progress.element()}
    </>
  )
}

/*
 wrapPageElement renders every time the page changes making it ideal for complex page transitions...
 ... or for stuff that need the page path, like an internationalization context provider for example
*/
// Provide styled outside mdx files from theme-ui
export const wrapPageElement = ({ element }) => <>{element}</>

export const onRouteUpdateDelayed = () => progress.start()
export const onRouteUpdate = () => progress.done()
