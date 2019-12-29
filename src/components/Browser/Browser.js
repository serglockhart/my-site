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
      <img
        src={props.image}
        alt={props.imageAlt}
        aria-hidden="true"
        class="img-fluid"
      />
    </div>
  )
}

export default Browser
