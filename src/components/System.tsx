import React from "react"
import Img from "gatsby-image"
import { Atropos } from "atropos/react/atropos-react.esm"

const System = (props: {
  image: string
  imageBackup: string
  imageAlt: string
}) => {
  return (
    <Atropos rotateTouch="scroll-y" rotateXMax={24} rotateYMax={24}>
      <div className="system-screenshot" data-atropos-offset="3">
        <div className="top" />
        <picture className="img-fluid">
          <source srcSet={props.image} type="image/webp" />
          <Img
            fluid={props.imageBackup}
            alt={props.imageAlt}
            aria-label={props.imageAlt}
            className="img-fluid"
          />
        </picture>
      </div>
    </Atropos>
  )
}

export default System
