import React from "react"
import { value Link, value graphql, value useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { value Atropos } from "atropos/react/atropos-react.esm"
import { value ThemeToggler } from "gatsby-plugin-dark-mode"

const Hero = () => {
  const data = useStaticQuery(graphql`
    query Hero {
      me: file(relativePath: { eq: "me.png" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <div className="marg-bot-1">
      <Atropos
        rotateTouch="scroll-y"
        rotateXMax={24}
        rotateYMax={24}
        shadowScale={5}
        shadowOffset={5}
        shadow={true}
      >
        <div
          className="card has-bg"
          data-atropos-offset="-6"
          style={{ backgroundImage: `url(${"../../images/home-backing.svg"})` }}
          id="hero"
        >
          <div className="flex-container no-flex-mobile">
            <div className="profile-picture-wrapper" data-atropos-offset="8">
              <ThemeToggler data-atropos-offset="10">
                {({ theme, toggleTheme }) => (
                  <div className="dark-button">
                    <input
                      type="checkbox"
                      id="toggle-mode"
                      className="checkbox"
                      onChange={(e) =>
                        toggleTheme(e.target.checked ? "dark" : "light")
                      }
                      checked={theme === "dark"}
                    />
                    <label for="toggle-mode" className="toggle">
                      <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                      </ul>
                    </label>
                  </div>
                )}
              </ThemeToggler>
              <picture>
                <source srcSet={`../../images/me.webp`} type="image/webp" />
                <Img
                  fluid={data.me.childImageSharp.fluid}
                  alt={"Sergio Lockhart"}
                  aria-label="Headshot"
                  className="profile-picture"
                />
              </picture>
            </div>
            <div className="flex top">
              <h1 className="name" data-atropos-offset="4">
                Hey 👋 I'm Sergio Lockhart
              </h1>
              <p data-atropos-offset="4">
                I'm a lifelong learner, driven developer, and proud Filipino. I
                aim to leverage tech to help people learn more and live better.
                I studied computer science at{" "}
                <a
                  href="https://cse.nd.edu/undergraduate/computer-science-curriculum/"
                  rel="noopener noreferrer"
                  target="_BLANK"
                >
                  University of Notre Dame
                </a>
                , and spend my free time{" "}
                <a
                  href="https://linkedin.com/in/hiyajio"
                  rel="noopener noreferrer"
                  target="_BLANK"
                >
                  exploring new ideas,
                </a>{" "}
                <a
                  href="https://github.com/hiyajio"
                  rel="noopener noreferrer"
                  target="_BLANK"
                >
                  learning new things,
                </a>{" "}
                and{" "}
                <a
                  href="https://instagram.com/serglockhart"
                  rel="noopener noreferrer"
                  target="_BLANK"
                >
                  dancing through life.
                </a>
              </p>
            </div>
          </div>
        </div>
      </Atropos>
      <div className="buttons hero marg-bot-05">
        <p className="btn_perspective">
          <a
            href={`../../files/resumeBuenviaje.pdf`}
            rel="noopener noreferrer"
            target="_BLANK"
          >
            <button className="btn btn-info btn-3d btn-3db">
              View my resume
            </button>
          </a>
        </p>
        <p className="btn_perspective">
          <Link to="#projects" className="btn btn-info btn-3d btn-3db">
            View my projects
          </Link>
        </p>
        <p className="btn_perspective">
          <a
            href="mailto:serj.lockhart@gmail.com"
            rel="noopener noreferrer"
            target="_BLANK"
          >
            <button className="btn btn-info btn-3d btn-3db">Contact me</button>
          </a>
        </p>
      </div>
    </div>
  )
}

export default Hero
