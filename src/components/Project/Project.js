import React from "react"

import "./Project.css"

const Project = props => {
  let bgColor
  if (props.bgColor === 1) {
    bgColor = "#e18e7f"
  } else if (props.bgColor === 2) {
    bgColor = "#d4ba9f"
  } else {
    bgColor = "#90b8c6"
  }

  return (
    <div className="project" style={{ background: bgColor }}>
      <div className="text">
        <h2>{props.title}</h2>
        <p>{props.body}</p>
        {props.end}
        {props.buttons}
      </div>
      <div className="screenshot-wrapper">{props.children}</div>
    </div>
  )
}

export default Project
