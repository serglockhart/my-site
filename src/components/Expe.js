import React from "react"

const Expe = props => (
  <div className="card">
    <div className="flex-container">
      <div className="flex">
        <h5>{props.title}</h5>
        <p className="gray-text subtitle">{props.subtitle}</p>
      </div>
      <a href={props.companyLink} rel="noopener noreferrer" target="_BLANK">
        <img
          src={props.logo}
          className="background-image"
          alt={props.logoAlt}
          aria-hidden="true"
        />
      </a>
    </div>
    <ul className="tech">
      <li>{props.firstItem}</li>
      <li>{props.secondItem}</li>
      <li>{props.thirdItem}</li>
    </ul>
    <p>
      <strong>Technologies</strong>: {props.tech}
    </p>
  </div>
)

export default Expe
