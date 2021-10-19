import React from "react"
import Img from "gatsby-image"
import { Atropos } from "atropos/react/atropos-react.esm"

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
      <Atropos rotateTouch="scroll-y" rotateXMax={24} rotateYMax={24}>
        <div className="flex-container">
          <div className="flex">
            <h5>{props.title}</h5>
            <p className="gray-text subtitle">{props.subtitle}</p>
          </div>
          <a
            href={props.logoLink}
            rel="noopener noreferrer"
            target="_BLANK"
            data-atropos-offset="8"
          >
            <picture className="background-image">
              <source srcSet={props.logo} type="image/webp" />
              <Img
                fluid={props.logoBackup}
                alt={props.logoAlt}
                aria-label={props.logoAlt}
                className="background-image"
              />
            </picture>
          </a>
        </div>
        {props.body}
        {props.end}
      </Atropos>
    </div>
  )
}

export default Card
