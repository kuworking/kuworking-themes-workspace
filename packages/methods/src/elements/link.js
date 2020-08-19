import React from 'react'

export const L = ({ href, track = '', children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" id={`gtm_external_link_${track}`}>
    {children}
  </a>
)
