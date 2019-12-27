import React from "react"
import Educ from "./Educ"

const Section = props => (
  <div className="marg-bot-2" id={props.id}>
    <h4 className="title">{props.title}</h4>
    <Educ educCard={this.props.educCard} />
    {props.button}
  </div>
)

export default Section
