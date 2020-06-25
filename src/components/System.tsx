import React from "react"
import Img from "gatsby-image"

const System = (props: {
  image: string
  imageBackup: string
  imageAlt: string
}) => {
  return (
    <div className="system-screenshot">
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
  )
}

export default System
