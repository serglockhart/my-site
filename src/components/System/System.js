import React from "react"

import "./System.css"

const System = props => {
  return (
    <div className="system-screenshot">
      <div className="top" />
      <img
        src={props.image}
        alt={props.imageAlt}
        aria-label={props.imageAlt}
        className="img-fluid"
      />
    </div>
  )
}

export default System
