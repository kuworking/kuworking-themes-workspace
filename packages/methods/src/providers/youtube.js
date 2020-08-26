import React from 'react'

export const Youtube = ({ src }) => {
  const youtube_src = /embed\/(.*?)(?:\?|$)/.exec(src)[1]
  const youtube_img = `https://img.youtube.com/vi/${youtube_src}/hqdefault.jpg`
  const srcdoc = `
  <style>
* {padding:0;margin:0;overflow:hidden}
html,body {height:100%}
img,span {position:absolute;width:100%;top:0;bottom:0;margin:auto}
span.label {
  height:1.5em;
  text-align:center;
  font:40px/1.5 sans-serif;
  color:white;
}
span.arrow {
  text-shadow:0 0 0.5em black;
  transform: rotate(45deg);
  position: relative;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  width: 40px;
  height: 40px;
  border-width: 10px 10px 0 0;
  border-style: solid;
  margin: 10px;
}
</style>
<a href="${src}">
  <img
    src="${youtube_img}"
    alt="Youtube"
  />
  <span class="label"><span class="arrow"></span>YouTube</span>
</a>
  `

  return (
    <div
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameborder="0"
      allowfullscreen
      title="Youtube"
      src={`data:text/html, ${srcdoc}`}
    ></div>
  )
}
