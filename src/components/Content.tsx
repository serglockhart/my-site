import React from "react"

const Content = (props: { children: any }) => {
  return (
    <div className="content">
      <div className="container-fluid">{props.children}</div>
    </div>
  )
}

export default Content
