import React, { useState } from 'react'

import { DisqusElements } from './disqus-elements'
import { Disqus as Form, CommentCount } from 'gatsby-plugin-disqus'

export const Disqus = ({ label, origin }) => {
  let disqusConfig = {
    url: window.location.pathname,
    title: origin,
  }
  console.log(disqusConfig)
  return (
    <DisqusElements>
      <CommentCount config={disqusConfig} placeholder={'...'} />
      <Form config={disqusConfig} />
    </DisqusElements>
  )
}
