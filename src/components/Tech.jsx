import React from "react"

const Tech = props => {
  return (
    <div className="card">
      <div className="container-fluid px-0">
        <div className="row">
          <div className="col-12 col-md-6">
            <h5>General Purpose</h5>
            <p>JavaScript ES6, C/C++, Python, Java, Go/Golang</p>
            <h5>Web</h5>
            <p>
              React (Next, Gatsby), Redux, Node, Express, GraphQL, Apollo
              Client, Flask, Hugo, jQuery, HTML, CSS (Sass/SCSS, LESS,
              Bootstrap, styled-components, Material-UI, Tailwind, Bulma), NPM,
              Yarn
            </p>
            <h5>Mobile</h5>
            <p>
              Swift, React Native, Dart (Flutter), Expo, Xcode, Android Studio
            </p>
            <h5>Databases &amp; Deployment</h5>
            <p>
              PostgreSQL, Microsoft SQL Server, SQL, MongoDB, AWS, Firebase,
              Heroku, Netlify, ZEIT Now
            </p>
          </div>
          <div className="col-12 col-md-6 col-1-format">
            <h5>Testing &amp; DevOps</h5>
            <p>Jest, Enzyme, Git (GitHub, GitLab)</p>
            <h5>Embedded</h5>
            <p>Arduino, Raspberry Pi, Verilog, Intel</p>
            <h5>Other</h5>
            <p>
              MATLAB, UNIX/Linux, Progressive Web Apps (PWA), OAuth, JSON, XML,
              YAML, DOM, REST APIs, HTTPS, DNS, Agile Development/Methodologies
            </p>
            <h5>Design</h5>
            <p>
              Sketch, Figma, Adobe XD, Illustrator, Photoshop, Affinity
              Designer, InVision Studio, Supernova Studio, Zeplin, AutoCAD,
              Fusion 360, SolidWorks
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tech
