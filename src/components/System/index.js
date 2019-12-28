import React from "react"

import "./index.css"

const System = props => (
  <div className="system-screenshot">
    <div className="top" />
    <img
      src={props.image}
      alt={props.imageAlt}
      aria-hidden="true"
      className="img-fluid"
    />
  </div>
)

export default System
