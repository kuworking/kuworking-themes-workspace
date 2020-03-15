import React from 'react'
import { Structure } from '../components/structure'

export default ({ location: { href }, pageContext, data, path }) => {
  const { basePath, jsonentries } = pageContext

  return (
    <Structure
      type="grid"
      blogGrid={{
        canonical: href.split('?')[0], // remove the ?whatever part
        core: jsonentries,
        basePath: basePath,
      }}
    />
  )
}
