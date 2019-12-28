import React from "react"

import "./index.css"

const System = props => (
  <div className="mobile mobile-screenshot">
    <div className="side">
      <div className="screen">
        <img src={props.image} alt={props.imageAlt} aria-hidden="true" />
      </div>
    </div>
    <div className="line" />
    <div className="header" />
    <div className="volume-button" />
    <div className="power-button" />
  </div>
)

export default System
