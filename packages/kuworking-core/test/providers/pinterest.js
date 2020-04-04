import React from 'react'
import { useScript } from '../hooks/usescript'

export const Pinterest = ({ src }) => {
  const [loaded, error] = useScript('//assets.pinterest.com/js/pinit.js') // eslint-disable-line no-unused-vars

  /* eslint-disable */
  return (
    <>
      <a aria-label="Pinterest" data-pin-do="embedPin" data-pin-width="large" data-pin-build="doBuild" href={src}></a>
      {loaded && window.doBuild && window.doBuild()}
    </>
  )
  /* eslint-enable */
}

export const PinterestScript = () => {
  const [loaded, error] = useScript('//assets.pinterest.com/js/pinit.js') // eslint-disable-line no-unused-vars
  return <>{loaded && window.doBuild && window.doBuild()}</>
}
