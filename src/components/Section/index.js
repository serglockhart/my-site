import React from "react"

const Section = props => (
  <div className="marg-bot-2" id={props.id}>
    <h4 className="title">{props.title}</h4>
    {props.button}
  </div>
)

export default Section
