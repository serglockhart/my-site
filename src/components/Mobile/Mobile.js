import React from "react"

import "./Mobile.css"

const Mobile = props => {
  return (
    <div className="mobile mobile-screenshot">
      <div className="side">
        <div className="screen">
          <img
            src={props.image}
            alt={props.imageAlt}
            aria-label={props.imageAlt}
          />
        </div>
      </div>
      <div className="line" />
      <div className="header" />
      <div className="volume-button" />
      <div className="power-button" />
    </div>
  )
}

export default Mobile
