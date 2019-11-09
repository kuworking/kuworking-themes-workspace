import { useState, useEffect } from 'react'

// based on https://usehooks.com/useScript/

export const useScript = src => {
  const [cachedScripts, setCachedScripts] = useState([])

  const [state, setState] = useState({
    loaded: false,
    error: false,
  })

  useEffect(() => {
    const inject_particles = stillMounted => {
      if (cachedScripts.includes(src)) {
        setState({
          loaded: true,
          error: false,
        })
      } else {
        let script = document.createElement('script')
        script.src = src
        script.async = true

        const onScriptLoad = () => {
          setCachedScripts(src, ...cachedScripts)
          setState({
            loaded: true,
            error: false,
          })
        }

        const onScriptError = () =>
          setState({
            loaded: true,
            error: true,
          })

        script.addEventListener('load', onScriptLoad)
        script.addEventListener('error', onScriptError)

        document.body.appendChild(script)

        return () => {
          script.removeEventListener('load', onScriptLoad)
          script.removeEventListener('error', onScriptError)
        }
      }
    }

    const stillMounted = { value: true }
    inject_particles(stillMounted)

    return () => {
      stillMounted.value = false
    }
  }, [src])

  return [state.loaded, state.error]
}
