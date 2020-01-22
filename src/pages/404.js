import React from "react"

import Content from "../components/Content/index.js"
import Layout from "../components/Layout/index.js"

import "../styles/index.css"

const ErrorPage = props => {
  return (
    <Layout>
      <Content>
        <div>
          <div className="card">
            <div className="four">
              <img
                src="../../images/404.svg"
                className="four-img"
                alt="404 error"
                aria-label="404 error"
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
    </Layout>
  )
}

export default ErrorPage
