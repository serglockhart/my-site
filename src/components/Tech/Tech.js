import React from "react"

import "./Tech.css"

const Tech = props => {
  return (
    <div className="card">
      <div className="row">
        <div className="col-12 col-md-6">
          <h5>General Purpose</h5>
          <p>JavaScript ES6, C++, Python, Java, Go/Golang</p>
          <h5>Web</h5>
          <p>
            React (Gatsby, Next), HTML, CSS (Sass, Bootstrap, Tailwind,
            styled-components), XML, jQuery
          </p>
          <h5>APIs</h5>
          <p>Node, Express, Passport, GraphQL</p>
          <h5>Mobile</h5>
          <p>DART (Flutter)</p>
        </div>
        <div className="col-12 col-md-6 col-1-format">
          <h5>Embedded Systems</h5>
          <p>Arduino, Raspberry Pi, Intel Galileo</p>
          <h5>Databases &amp; Deployment</h5>
          <p>Postgres, SQL Server, AWS, Firebase, Heroku, Netlify, ZEIT now</p>
          <h5>Other</h5>
          <p>MATLAB, Git, Linux, Kali Linux, Agile (SCRUM)</p>
          <h5>Design</h5>
          <p>Illustrator, AutoCAD, Fusion 360, SOLIDWORKS, Fritzing, Eagle</p>
        </div>
      </div>
    </div>
  )
}

export default Tech
