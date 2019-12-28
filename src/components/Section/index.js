import React from "react"

import "./index.css"

const Section = props => {
  return (
    <div className="marg-bot-2" id={props.id}>
      <h4 className="title">{props.title}</h4>
      {props.children}
      {props.button}
    </div>
  )
}

export default Section
