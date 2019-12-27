import React from "react"
import Educ from "./educ"

const Section = props => (
  <div className="marg-bot-2" id={props.id}>
    <h4 className="title">{props.title}</h4>
    <Educ educCard={this.props.educCard} />
  </div>
)

export default Section
