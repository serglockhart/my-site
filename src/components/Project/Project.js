import React from "react"

import "./Project.css"

const Project = props => {
  const bgColor = props.bgColor || "#e18e7f"

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
