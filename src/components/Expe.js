import React from "react"

const Expe = props => (
  <div className="card">
    <div className="flex-container">
      <div className="flex">
        <h5>Software Engineering Intern | CBS</h5>
        <p className="gray-text subtitle">June - August 2019 • New York, NY</p>
      </div>
      <a href="https://www.cbs.com/" rel="noopener noreferrer" target="_BLANK">
        <img
          src={`../../images/experience/cbs.png`}
          className="background-image"
          alt={"CBS logo"}
          aria-hidden="true"
        />
      </a>
    </div>
    <ul className="tech">
      <li>
        Standardized end-to-end broadcast distribution configurations for entire
        East Coast feed
      </li>
      <li>
        Completed 27 purchase requests from international TV stations amounting
        to $132,930 in profit
      </li>
      <li>
        Assisted with basic maintenance of cloud-based content storage and
        manipulation
      </li>
    </ul>
    <p>
      <strong>Technologies</strong>: SQL (SQL Server), XML, C++, AWS (S3,
      Lambda, CloudWatch), AutoCAD
    </p>
  </div>
)

export default Expe
