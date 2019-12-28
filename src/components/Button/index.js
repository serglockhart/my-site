import React from "react"

import "./index.css"

const Button = props => (
  <div className="buttons">
    <a
      href={props.link}
      rel="noopener noreferrer"
      target="_BLANK"
      className="btn btn-sm"
    >
      {props.title}
    </a>
  </div>
)

export default Button
