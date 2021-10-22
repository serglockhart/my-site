import React from "react"

const Button = (props: {
  link: string
  links: string
  title: string
  titles: string
}) => {
  if (props.links)
    return (
      <div className="buttons">
        <p className="btn_perspective">
          <a href={props.link} rel="noopener noreferrer" target="_BLANK">
            <button className="btn btn-3d btn-3db">{props.title}</button>
          </a>
        </p>
        <p className="btn_perspective">
          <a href={props.links} rel="noopener noreferrer" target="_BLANK">
            <button className="btn btn-3d btn-3db">{props.titles}</button>
          </a>
        </p>
      </div>
    )
  else
    return (
      <div className="buttons">
        <p className="btn_perspective">
          <a href={props.link} rel="noopener noreferrer" target="_BLANK">
            <button className="btn btn-3d btn-3db">{props.title}</button>
          </a>
        </p>
      </div>
    )
}

export default Button
