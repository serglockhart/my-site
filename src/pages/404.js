import React from "react"
import { useIsJsEnabled } from "gatsby-plugin-js-fallback"

import Content from "../components/Content/index.js"
import Header from "../components/Header/index.js"
import Footer from "../components/Footer/index.js"

import "./index.css"

const ErrorPage = props => {
  const isJsEnabled = useIsJsEnabled()

  return isJsEnabled ? (
    <div className="app" id="top">
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
  ) : (
    <div className="app" id="top">
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
