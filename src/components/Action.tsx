import React from "react"
import { Link } from "gatsby"
import { Atropos } from "atropos/react/atropos-react.esm"

const Action = () => {
  return (
    <Atropos rotateTouch="scroll-y" rotateXMax={24} rotateYMax={24}>
      <div className="browser marg-bot-1" data-atropos-offset="-6">
        <div className="top">
          <span className="circle" />
          <span className="circle" />
          <span className="circle" />
        </div>
        <div className="body">
          <h2 data-atropos-offset="6">Let's make something!</h2>
          <p data-atropos-offset="5">
            I'm a developer enthusiastic about well-designed products that at
            their core, aim to assist people, regardless of market size.
            Whatever you are imagining, building, or growing, I'd love to hear
            about it. Scroll through my work and take the time to reach out.
            I'll respond as quickly as I can.
          </p>
          <div className="buttons" data-atropos-offset="8">
            <p className="btn_perspective">
              <Link to="#projects" className="btn btn-info btn-3d btn-3db">
                View my projects
              </Link>
            </p>
            <p className="btn_perspective">
              <a
                href="mailto:jio.buenviaje@gmail.com"
                rel="noopener noreferrer"
                target="_BLANK"
              >
                <button className="btn btn-info btn-3d btn-3db">
                  Contact me
                </button>
              </a>
            </p>
          </div>
        </div>
      </div>
    </Atropos>
  )
}

export default Action
