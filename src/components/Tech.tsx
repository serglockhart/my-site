import React from "react"

const Tech = () => {
  return (
    <div className="card">
      <div className="container-fluid px-0">
        <div className="row">
          <div className="col-12 col-md-6">
            <h5>General Purpose</h5>
            <p>
              JavaScript ES6, TypeScript, C/C++, Python, Java, Go/Golang, MATLAB
            </p>
            <h5>Web</h5>
            <p>
              React (Next, Gatsby), Redux, Node, Express, Django, Flask,
              GraphQL, Apollo Client, Hugo, jQuery, HTML, CSS (Sass/SCSS, LESS,
              Bootstrap, styled-components, Material-UI, Tailwind, Bulma), npm,
              Yarn, Webflow
            </p>
            <h5>Mobile</h5>
            <p>
              iOS, Swift, SwiftUI, Cocoapods, Xcode, Android, Gradle, Flutter
              (Dart), Provider, Wiredash, Ionic, Capacitor, Expo, Android
              Studio, TestFlight, Play Console
            </p>
            <h5>Embedded</h5>
            <p>Raspberry Pi, Arduino, Verilog</p>
          </div>
          <div className="col-12 col-md-6 col-1-format">
            <h5>Databases &amp; Deployment</h5>
            <p>
              PostgreSQL, Microsoft SQL Server, SQL, MongoDB, Parse Platform,
              AWS, Firebase, Heroku, Netlify, Vercel (ZEIT Now), Docker
            </p>
            <h5>Testing</h5>
            <p>Jest, Enzyme, Cypress, Postman</p>
            <h5>Other</h5>
            <p>
              Git (GitHub, GitLab), UNIX/Linux, Progressive Web Apps (PWA),
              JSON, XML, YAML, DOM, REST APIs, HTTPS, DNS, Agile Software
              Development, Scrum, Kanban
            </p>
            <h5>Design</h5>
            <p>
              Sketch, Figma, Adobe XD, Illustrator, Photoshop, Affinity
              Designer, InVision Studio, Supernova Studio, Zeplin, Canva,
              AutoCAD, Fusion 360, SolidWorks
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tech
