import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"

const Footer = () => {
  return (
    <footer>
      <div className="container-fluid">
        <p className="right">
          Copyright &copy; {new Date().getFullYear()} Jio Buenviaje. All rights
          reserved.
        </p>
        <p id="scroll-to-top" onClick={() => scrollTo("#top")}>
          Scroll to top ↑
        </p>
      </div>
    </footer>
  )
}

export default Footer
