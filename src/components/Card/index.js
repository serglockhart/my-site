import React from "react"

import "./index.css"

const Card = props => {
  return (
    <div className="card">
      <div className="flex-container">
        <div className="flex">
          <h5>{props.title}</h5>
          <p className="gray-text subtitle">{props.subtitle}</p>
        </div>
        <a href={props.logoLink} rel="noopener noreferrer" target="_BLANK">
          <img
            src={props.logo}
            className="background-image"
            alt={props.logoAlt}
            aria-hidden="true"
          />
        </a>
      </div>
      {props.body}
      {props.end}
    </div>
  )
}

export default Card
