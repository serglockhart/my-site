import React from "react"
import { Atropos } from "atropos/react/atropos-react.esm"

const Project = (props) => {
  /* let bgColor
  if (props.bgColor === 1) {
    bgColor = "#e18e7f"
  } else if (props.bgColor === 2) {
    bgColor = "#d4ba9f"
  } else {
    bgColor = "#90b8c6"
  } */

  return (
    <Atropos rotateTouch="scroll-y" rotateXMax={24} rotateYMax={24}>
      <div className="project" /* style={{ background: "#ffffff" }} */>
        <div className="text">
          <h2>{props.title}</h2>
          <p>{props.body}</p>
          {props.end}
          {props.buttons}
        </div>
        <div className="screenshot-wrapper" data-atropos-offset="6">
          {props.children}
        </div>
      </div>
    </Atropos>
  )
}

export default Project
