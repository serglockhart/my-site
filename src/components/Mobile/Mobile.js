import React from "react"

import "./Mobile.css"

const Mobile = props => {
  return (
    <div className="mobile mobile-screenshot">
      <div className="side">
        <div className="screen">
          <video autoplay="true" loop="true" muted="true">
            <source src={props.vid} alt={props.vidAlt} type="video/webm" />
          </video>
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
