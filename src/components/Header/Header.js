import React, { useState } from "react"
import { Link } from "gatsby"

import Contact from "../Contact/index.js"

import "./Header.css"

const Header = props => {
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
                aria-label="JB White"
              />
              <img
                src={`../../images/logo-01.svg`}
                className={"img-fluid logo"}
                alt={"logo"}
                aria-label="JB Black"
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
                  alt={"Jio on Twitter"}
                  aria-label="Twitter"
                />
              </a>
              <a
                href="https://instagram.com/lockjio"
                rel="noopener noreferrer"
                target="_BLANK"
              >
                <img
                  src={`../../images/logos/instagram.svg`}
                  alt={"Jio on Instagram"}
                  aria-label="Instagram"
                />
              </a>
              <a
                href="https://github.com/lockjio"
                rel="noopener noreferrer"
                target="_BLANK"
              >
                <img
                  src={`../../images/logos/github.svg`}
                  alt={"Jio on GitHub"}
                  aria-label="GitHub"
                />
              </a>
              <a
                href="https://linkedin.com/in/lockjio"
                rel="noopener noreferrer"
                target="_BLANK"
              >
                <img
                  src={`../../images/logos/linkedin.svg`}
                  alt={"Jio on LinkedIn"}
                  aria-label="LinkedIn"
                />
              </a>
              <Contact>
                <img
                  src={`../../images/logos/email.svg`}
                  alt={"Jio on Email"}
                  aria-label="Email"
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

export default Header
