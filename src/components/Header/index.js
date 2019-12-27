import React from "react"
import { Link } from "gatsby"

const Header = () => (
  <>
    <div className="nav-wrapper">
      <div className="nav">
        <div id="overview">
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
          <div id="toggle">
            <span className="bar" id="first" />
            <span className="bar" id="second" />
            <span className="bar" id="third" />
          </div>
        </div>
        <div id="menu">
          <div className="space-3 hidden-on-desktop" />
          <div className="links">
            <Link to="#home" className="active">
              Home
            </Link>
            <Link to="#education" className>
              Education
            </Link>
            <Link to="#experience" className>
              Experience
            </Link>
            <Link to="#technologies" className>
              Technologies
            </Link>
            <Link to="#extracurriculars" className>
              Extracurriculars
            </Link>
            <Link to="#projects" className>
              Projects
            </Link>
            <a href="mailto:jbuenvia@nd.edu" className>
              Contact
            </a>
            {/* <a data-toggle="modal" data-target="#contactModal" id="contact-btn">
        Contact
      </a>
      <Link to="/contact" id="contact-link">
        Contact
      </Link> */}
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
            <a href="mailto:jbuenvia@nd.edu">
              <img
                src={`../../images/logos/email.svg`}
                alt={"Jio Buenviaje on Email"}
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="nav-space hidden-on-desktop" />
  </>
)

export default Header
