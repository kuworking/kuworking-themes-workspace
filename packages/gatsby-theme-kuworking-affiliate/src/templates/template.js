import React from 'react'
import { Structure } from '../components/structure'

export default ({ location, pageContext, data }) => {
  const { core } = data
  const { basePath } = pageContext

  return (
    <Structure
      type="grid"
      blogGrid={{
        core: core.edges,
        basePath,
      }}
    />
  )
}
