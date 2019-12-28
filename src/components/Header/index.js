import React, { useState } from "react"
import { Link } from "gatsby"

import Contact from "../Contact/index.js"

import "./index.css"

export default props => {
  const [isToggled, setToggled] = useState(false)

  const toggleTrueFalse = () => setToggled(!isToggled)

  return (
    <>
      <div className="nav-wrapper">
        <div className="nav">
          <div
            id="overview"
            onClick={toggleTrueFalse}
            className={`${isToggled ? "active" : ""}`}
          >
            <Link to="/" className="logo-wrapper">
              <img
                src={`../../images/logo-02.svg`}
                className={"img-fluid logo alt hidden-on-desktop"}
                alt={"logo"}
                aria-hidden="true"
              />
              <img
                src={`../../images/logo-01.svg`}
                className={"img-fluid logo"}
                alt={"logo"}
                aria-hidden="true"
              />
            </Link>
            <div
              id="toggle"
              onClick={toggleTrueFalse}
              className={`${isToggled ? "active" : ""}`}
            >
              <span className="bar" id="first" />
              <span className="bar" id="second" />
              <span className="bar" id="third" />
            </div>
          </div>
          <div
            id="menu"
            onClick={toggleTrueFalse}
            className={`${isToggled ? "active" : ""}`}
          >
            <div className="space-3 hidden-on-desktop" />
            <div className="links">
              <Link to="#home">Home</Link>
              <Link to="#education">Education</Link>
              <Link to="#experience">Experience</Link>
              <Link to="#technologies">Technologies</Link>
              <Link to="#extracurriculars">Extracurriculars</Link>
              <Link to="#projects">Projects</Link>
              <Contact linkTitle="Contact" />
            </div>
            <div className="social">
              <a
                href="https://twitter.com/lockjio"
                rel="noopener noreferrer"
                target="_BLANK"
              >
                <img
                  src={`../../images/logos/twitter.svg`}
                  alt={"Jio Buenviaje on Twitter"}
                  aria-hidden="true"
                />
              </a>
              <a
                href="https://instagram.com/lockjio"
                rel="noopener noreferrer"
                target="_BLANK"
              >
                <img
                  src={`../../images/logos/instagram.svg`}
                  alt={"Jio Buenviaje on Instagram"}
                  aria-hidden="true"
                />
              </a>
              <a
                href="https://github.com/lockjio"
                rel="noopener noreferrer"
                target="_BLANK"
              >
                <img
                  src={`../../images/logos/github.svg`}
                  alt={"Jio Buenviaje on GitHub"}
                  aria-hidden="true"
                />
              </a>
              <a
                href="https://linkedin.com/in/lockjio"
                rel="noopener noreferrer"
                target="_BLANK"
              >
                <img
                  src={`../../images/logos/linkedin.svg`}
                  alt={"Jio Buenviaje on LinkedIn"}
                  aria-hidden="true"
                />
              </a>
              <Contact>
                <img
                  src={`../../images/logos/email.svg`}
                  alt={"Jio Buenviaje on Email"}
                  aria-hidden="true"
                />
              </Contact>
            </div>
          </div>
        </div>
      </div>
      <div className="nav-space hidden-on-desktop" />
    </>
  )
}
