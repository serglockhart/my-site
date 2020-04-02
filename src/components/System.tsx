import React from "react"

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
        <img
          src={props.imageBackup}
          alt={props.imageAlt}
          aria-label={props.imageAlt}
          className="img-fluid"
        />
      </picture>
    </div>
  )
}

export default System
