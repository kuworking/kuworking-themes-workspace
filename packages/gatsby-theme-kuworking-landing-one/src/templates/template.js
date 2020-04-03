import React from 'react'
import { Structure } from '../components/structure'

export default ({ pageContext }) => {
  const { thePath, basePath, jsonentries } = pageContext

  return (
    <Structure
      type="grid"
      blogGrid={{
        thePath: thePath,
        core: jsonentries,
        basePath: basePath,
      }}
    />
  )
}
