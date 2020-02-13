import React from 'react'
import { Structure } from '../components/structure'

export default ({ location, pageContext, data, path }) => {
  const { basePath, jsonentries } = pageContext

  return (
    <Structure
      type="grid"
      blogGrid={{
        core: jsonentries,
        basePath: basePath,
      }}
    />
  )
}
