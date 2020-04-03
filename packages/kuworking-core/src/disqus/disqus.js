import React, { useEffect } from 'react'

const LoadScript = ({ disqusShortName, load }) => {
  useEffect(() => {
    const inject_disqus = stillMounted => {
      if (load) {
        const script = document.createElement('script')
        script.async = true
        script.type = 'text/javascript'
        script.src = `https://${disqusShortName}.disqus.com/embed.js`
        if (!stillMounted.value) return
        document.body.appendChild(script)
      }
    }

    const stillMounted = { value: true }
    inject_disqus(stillMounted)

    return function cancelFetch() {
      stillMounted.value = false
    }
  }, [load, disqusShortName])

  return <></>
}

export const Disqus = ({ load, disqusShortName, label, origin, disqus_url }) => {
  typeof window !== 'undefined' &&
    (window.disqus_config = function () {
      //  window.disqus_config = () => {
      this.page.identifier = origin
      this.page.title = origin
      this.page.url = disqus_url
      //    this.page.url = window.location.pathname
    })

  return (
    <>
      <LoadScript load={load} disqusShortName={disqusShortName} />
      <div id="disqus_thread" />
    </>
  )
}
