import React from "react"

const Card = (props: {
  title: string
  subtitle: string
  logoLink: string
  logo: string
  logoBackup: string
  logoAlt: string
  body: any
  end: any
}) => {
  return (
    <div className="card">
      <div className="flex-container">
        <div className="flex">
          <h5>{props.title}</h5>
          <p className="gray-text subtitle">{props.subtitle}</p>
        </div>
        <a href={props.logoLink} rel="noopener noreferrer" target="_BLANK">
          <picture className="background-image">
            <source srcSet={props.logo} type="image/webp" />
            <img
              src={props.logoBackup}
              alt={props.logoAlt}
              aria-label={props.logoAlt}
              className="background-image"
            />
          </picture>
        </a>
      </div>
      {props.body}
      {props.end}
    </div>
  )
}

export default Card
