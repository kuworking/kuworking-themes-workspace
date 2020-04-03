import React from 'react'
import { domprogress } from 'gatsby-theme-kuworking-one'

/*
 Because wrapRootElement doesn’t render when the page changes it’s a good fit for context providers...
 ... that don’t need the page like theme or global application state providers
 */
export const wrapRootElement = ({ element }) => {
  return (
    <>
      {element}
      {domprogress.element()}
    </>
  )
}

/*
 wrapPageElement renders every time the page changes making it ideal for complex page transitions...
 ... or for stuff that need the page path, like an internationalization context provider for example
*/
// Provide styled outside mdx files from theme-ui
export const wrapPageElement = ({ element }) => <>{element}</>

export const onRouteUpdateDelayed = () => domprogress.start()
export const onRouteUpdate = () => domprogress.done()
