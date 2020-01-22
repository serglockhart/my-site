import React from "react"

import "./Browser.css"

const Browser = props => {
  return (
    <div class="browser-screenshot">
      <div class="top">
        <span class="circle"></span>
        <span class="circle"></span>
        <span class="circle"></span>
      </div>
      <picture className="img-fluid">
        <source srcset={props.image} type="image/webp" />
        <img
          src={props.imageBackup}
          alt={props.imageAlt}
          aria-label={props.imageAlt}
          className="img-fluid"
        />
      </picture>
    </div>
  )
}

export default Browser
