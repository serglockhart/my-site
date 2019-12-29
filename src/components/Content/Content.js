import React from "react"

import "./Content.css"

const Content = props => {
  return (
    <div className="content">
      <div className="container-fluid">{props.children}</div>
    </div>
  )
}

export default Content
