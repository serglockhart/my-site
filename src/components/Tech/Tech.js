import React from "react"

import "./Tech.css"

const Tech = props => {
  return (
    <div className="card">
      <div className="row">
        <div className="col-12 col-md-6">
          <h5>General Purpose</h5>
          <p>JavaScript ES6, C/C++, Python, Go/Golang</p>
          <h5>Web</h5>
          <p>
            React (Next, Gatsby, Material-UI), Flask, HTML (DOM), CSS
            (Sass/SCSS, styled-components, Bootstrap, Tailwind, Bulma), jQuery,
            AJAX, JSON, XML
          </p>
          <h5>APIs & SDKs</h5>
          <p>
            Node, Express, Google Maps, Mapbox (OpenStreetMap), Mailchimp,
            Shopify (Polaris), Parse Server, Formspree, EmailJS, Google
            Analytics
          </p>
          <h5>Mobile</h5>
          <p>Flutter (DART), React Native</p>
        </div>
        <div className="col-12 col-md-6 col-1-format">
          <h5>Embedded Systems</h5>
          <p>Arduino, Raspberry Pi, Intel Galileo</p>
          <h5>Databases &amp; Deployment</h5>
          <p>
            PostgreSQL, SQL Server, AWS, Firebase, Heroku, Netlify, ZEIT Now,
            GraphQL, Apollo
          </p>
          <h5>Other</h5>
          <p>MATLAB, Git, UNIX/Linux, Kali Linux, Agile (SCRUM)</p>
          <h5>Design</h5>
          <p>Illustrator, AutoCAD, Fusion 360, SOLIDWORKS, Fritzing, Eagle</p>
        </div>
      </div>
    </div>
  )
}

export default Tech
