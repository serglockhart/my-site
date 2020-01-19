import React from "react"

import "./Tech.css"

const Tech = props => {
  return (
    <div className="card">
      <div className="row">
        <div className="col-12 col-md-6">
          <h5>General Purpose</h5>
          <p>JavaScript (ES6), C++, Python, Java, Go/Golang</p>
          <h5>Web</h5>
          <p>
            React (Hooks), Node (Express), Gatsby, Next, jQuery, XML, HTML, CSS
            (SCSS/Sass, Bootstrap/Reactstrap, Tailwind)
          </p>
          <h5>Mobile</h5>
          <p>DART, Flutter (Provider)</p>
          <h5>Embedded Systems</h5>
          <p>Arduino, Raspberry Pi, Intel Galileo</p>
        </div>
        <div className="col-12 col-md-6 col-1-format">
          <h5>Databases &amp; Deployment</h5>
          <p>
            GraphQL, SQL (Postgres, SQL Server), AWS (S3, DynamoDB, Lambda, API
            Gateway, Cognito, IoT, CloudWatch), Firebase, Heroku, Netlify, ZEIT
            now, Contentful
          </p>
          <h5>Other</h5>
          <p>MATLAB, Git, Linux, Kali Linux, Agile (SCRUM)</p>
          <h5>Design</h5>
          <p>
            Illustrator, AutoCAD, Fusion 360, SOLIDWORKS, Fritzing, Eagle, Spark
          </p>
        </div>
      </div>
    </div>
  )
}

export default Tech
