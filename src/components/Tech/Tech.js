import React from "react"

import "./Tech.css"

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
            <h5>Databases &amp; Deployment</h5>
            <p>
              PostgreSQL, SQL Server, SQL, AWS, Firebase, Heroku, Netlify, ZEIT
              Now
            </p>
            <h5>Testing &amp; DevOps</h5>
            <p>Jest, Enzyme, Git (GitHub, GitLab)</p>
            <h5>Mobile</h5>
            <p>Flutter (DART), React Native, Expo</p>
          </div>
          <div className="col-12 col-md-6 col-1-format">
            <h5>Embedded Systems</h5>
            <p>Arduino, Raspberry Pi, Verilog, Intel</p>
            <h5>APIs & SDKs</h5>
            <p>
              OAuth, Stripe, Shopify, Mailchimp, Parse Server, Google Maps,
              Mapbox (OpenStreetMap), Getform, Formspree, Formcarry, EmailJS,
              Google Analytics
            </p>
            <h5>Other</h5>
            <p>
              MATLAB, UNIX/Linux, Kali Linux, Progressive Web Apps (PWA), JSON,
              XML, YAML, Markdown, Agile
            </p>
            <h5>Design</h5>
            <p>
              Affinity Designer, Sketch, Figma, Adobe XD, Invision Studio,
              Supernova Studio, Zeplin, AutoCAD, Fusion 360, SOLIDWORKS,
              Fritzing, EAGLE
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tech
