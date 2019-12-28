import React from "react"
import { Helmet } from "react-helmet"

import Content from "../components/Content/index.js"
import Header from "../components/Header/index.js"
import Footer from "../components/Footer/index.js"

import "./index.css"

const ErrorPage = props => {
  return (
    <div className="app" id="top">
      <Helmet>
        <meta charSet="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="author" content="Jio Buenviaje" />
        <title>Jio Buenviaje</title>
        <link rel="canonical" href="https://jbuenviaje.com/" />
      </Helmet>
      <Header />
      <Content>
        <div>
          <div className="card">
            <div className="four">
              <img
                src="../../images/404.svg"
                className="four-img"
                alt="404 error"
                aria-hidden="true"
              />
            </div>
            <h4>Oops! The page you were looking for does not exist.</h4>
            <p>
              Please check the URL and refresh the page. If you think this is a
              mistake, please contact me.
            </p>
          </div>

          <a href="/" className="btn btn-info">
            ← Back to home
          </a>
        </div>
      </Content>

      <Footer />
    </div>
  )
}

export default ErrorPage
