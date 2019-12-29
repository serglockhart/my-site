import React from "react"
import { Link } from "gatsby"

import Contact from "../Contact/index.js"

import "./Hero.css"

import Background from "../../images/home-backing.svg"

const Hero = props => {
  return (
    <div className="marg-bot-1" id="home">
      <div
        className="card has-bg"
        style={{ backgroundImage: `url(${Background})` }}
        id="hero"
      >
        <div className="flex-container no-flex-mobile">
          <div className="profile-picture-wrapper">
            <img
              src={`../../images/me.png`}
              className={"profile-picture"}
              alt={"Jio Buenviaje"}
              aria-label="Headshot"
            />
          </div>
          <div className="flex top">
            <h1 className="name">Hey! I'm Jio Buenviaje</h1>
            <p>
              I aim to leverage tech to better understand and solve pressing
              problems of niche groups. I study computer science at{" "}
              <a
                href="https://cse.nd.edu/undergraduates/computer-science"
                rel="noopener noreferrer"
                target="_BLANK"
              >
                University of Notre Dame,
              </a>{" "}
              and spend my free time{" "}
              <a
                href="https://linkedin.com/in/lockjio"
                rel="noopener noreferrer"
                target="_BLANK"
              >
                working at startups,
              </a>{" "}
              <a
                href="https://github.com/lockjio"
                rel="noopener noreferrer"
                target="_BLANK"
              >
                learning new things,
              </a>{" "}
              and{" "}
              <a
                href="https://instagram.com/lockjio"
                rel="noopener noreferrer"
                target="_BLANK"
              >
                simply enjoying life.
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="buttons marg-bot-05">
        <a
          href={`../../files/resumeBuenviaje.pdf`}
          rel="noopener noreferrer"
          target="_BLANK"
          className="btn btn-info marg-bot-05"
        >
          View my resume
        </a>
        <Link to="#projects" className="btn btn-info marg-bot-05">
          View my projects
        </Link>
        <Contact
          linkClasses="btn btn-info marg-bot-05"
          linkTitle="Contact me"
        />
      </div>
    </div>
  )
}

export default Hero
