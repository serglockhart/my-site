import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"

import "./index.css"

const Footer = props => {
  return (
    <footer>
      <div className="container-fluid">
        <p className="right">
          Juan Sergio Buenviaje © 2019. All rights reserved.
        </p>
        <p id="scroll-to-top" onClick={() => scrollTo("#top")}>
          Scroll to top ↑
        </p>
      </div>
    </footer>
  )
}

export default Footer
