import React from "react"
import { Link } from "gatsby"

import Contact from "./Contact"

const Hero = () => {
  return (
    <div className="marg-bot-1">
      <div
        className="card has-bg"
        style={{ backgroundImage: `url(${"../../images/home-backing.svg"})` }}
        id="hero"
      >
        <div className="flex-container no-flex-mobile">
          <div className="profile-picture-wrapper">
            <picture>
              <source srcSet={`../../images/me.webp`} type="image/webp" />
              <img
                src={`../../images/me.png`}
                alt={"Jio Buenviaje"}
                aria-label="Headshot"
                className="profile-picture"
              />
            </picture>
          </div>
          <div className="flex top">
            <h1 className="name">Hey! I'm Jio Buenviaje</h1>
            <p>
              I'm a fullstack web + mobile developer and designer. I aim to
              leverage tech to help people learn more and live better. I study
              computer science at{" "}
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
