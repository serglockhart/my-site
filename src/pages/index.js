import React from "react"

//import my custom styles
import "./index.css"

import Background from "../images/home-backing.svg"

const IndexPage = () => (
  <div className="App">
    {/* Navigation */}
    <div className="nav-wrapper">
      <div className="nav">
        <div id="overview">
          <a href="/" className="logo-wrapper">
            <img
              src={require("../images/logo-02.svg")}
              className={"img-fluid logo alt hidden-on-desktop"}
              alt={"logo"}
            />
            <img
              src={require("../images/logo-01.svg")}
              className={"img-fluid logo"}
              alt={"logo"}
            />
          </a>
          <div id="toggle">
            <span className="bar" id="first" />
            <span className="bar" id="second" />
            <span className="bar" id="third" />
          </div>
        </div>
        <div id="menu">
          <div className="space-3 hidden-on-desktop" />
          <div className="links">
            <a href="#home" className="active">
              Home
            </a>
            <a href="#education" className>
              Education
            </a>
            <a href="#experience" className>
              Experience
            </a>
            <a href="#technologies" className>
              Technologies
            </a>
            <a href="#extracurriculars" className>
              Extracurriculars
            </a>
            <a href="#projects" className>
              Projects
            </a>
            <a href="mailto:jbuenvia@nd.edu" className>
              Contact
            </a>
            {/* <a data-toggle="modal" data-target="#contactModal" id="contact-btn">
        Contact
      </a>
      <a href="/contact" id="contact-link">
        Contact
      </a> */}
          </div>
          <div className="social">
            <a href="https://twitter.com/lockjio" target="_BLANK">
              <img
                src={require("../images/logos/twitter.svg")}
                alt="Jio Buenviaje on Twitter"
              />
            </a>
            <a href="https://instagram.com/lockjio" target="_BLANK">
              <img
                src={require("../images/logos/instagram.svg")}
                alt="Jio Buenviaje on Instagram"
              />
            </a>
            <a href="https://github.com/lockjio" target="_BLANK">
              <img
                src={require("../images/logos/github.svg")}
                alt="Jio Buenviaje on GitHub"
              />
            </a>
            <a href="https://linkedin.com/in/lockjio" target="_BLANK">
              <img
                src={require("../images/logos/linkedin.svg")}
                alt="Jio Buenviaje on LinkedIn"
              />
            </a>
            <a href="mailto:jbuenvia@nd.edu">
              <img
                src={require("../images/logos/email.svg")}
                alt="Jio Buenviaje on Email"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="nav-space hidden-on-desktop" />
    {/* App content */}
    <div className="content">
      <div className="container-fluid">
        {/* Overview */}
        <div className="marg-bot-1" id="home">
          <div
            className="card has-bg"
            style={{ backgroundImage: `url(${Background})` }}
            id="hero"
          >
            <div className="flex-container no-flex-mobile">
              <div className="profile-picture-wrapper">
                <img
                  src={require("../images/me.png")}
                  className={"profile-picture"}
                  alt={"Jio Buenviaje image"}
                />
              </div>
              <div className="flex top">
                <h1 className="name">Hey! I'm Jio Buenviaje</h1>
                <p>
                  I aim to leverage tech to better understand and solve pressing
                  problems of niche groups. I study computer science at{" "}
                  <a
                    href="https://cse.nd.edu/undergraduates/computer-science"
                    target="_BLANK"
                  >
                    University of Notre Dame,
                  </a>{" "}
                  and spend my free time{" "}
                  <a href="https://linkedin.com/in/lockjio/" target="_BLANK">
                    working at startups,
                  </a>{" "}
                  <a href="https://github.com/lockjio" target="_BLANK">
                    learning new things,
                  </a>{" "}
                  and{" "}
                  <a href="https://instagram.com/lockjio/" target="_BLANK">
                    simply enjoying life.
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="buttons marg-bot-05">
            <a
              href="/files/resumeBuenviaje.pdf"
              target="_BLANK"
              className="btn btn-info marg-bot-05"
            >
              View my resume
            </a>
            <a href="#projects" className="btn btn-info marg-bot-05">
              View my projects
            </a>
            <a
              href="mailto:jbuenvia@nd.edu"
              className="btn btn-info marg-bot-05"
            >
              Contact me
            </a>
          </div>
        </div>
        {/* Education */}
        <div className="marg-bot-2" id="education">
          <h4 className="title">Education</h4>
          <div className="card">
            <div className="flex-container">
              <div className="flex">
                <h5>University of Notre Dame</h5>
                <p className="gray-text subtitle">2018 - 2022 | 3.51 GPA</p>
              </div>
              <a
                href="https://cse.nd.edu/undergraduates/computer-science"
                target="_BLANK"
              >
                <img
                  src={require("../images/education/nd.png")}
                  className="background-image"
                  alt="ND logo"
                />
              </a>
            </div>
            <p>
              Pursuing a BS in Computer Science (
              <a
                href="https://cse.nd.edu/undergraduates/cse-concentrations/mobile-computing"
                target="_BLANK"
              >
                Concentration in Mobile Computing
              </a>
              ) from the College of Engineering with a Minor in{" "}
              <a
                href="https://mendoza.nd.edu/undergraduate/innovation-entrepreneurship-minor/"
                target="_BLANK"
              >
                Innovation &amp; Entrepreneurship
              </a>{" "}
              from the Mendoza College of Business.
            </p>
            <p>
              <strong>Relevant Coursework</strong>: Data Structures, Logic
              Design, Systems Programming, Fundamentals of Computing, Discrete
              Mathematics
            </p>
          </div>
          <div className="card">
            <div className="flex-container">
              <div className="flex">
                <h5>Philippine Science High School - Main Campus</h5>
                <p className="gray-text subtitle">2012 - 2018 | 3.84 GPA</p>
              </div>
              <a href="http://www.pshs.edu.ph/curriculum/" target="_BLANK">
                <img
                  src={require("../images/education/pshs.png")}
                  className="background-image"
                  alt="PSHS logo"
                />
              </a>
            </div>
            <p>
              Graduated Magna Cum Laude (High Honors), with a class rank of
              28/221 and{" "}
              <a
                href="http://www.sei.dost.gov.ph/index.php/programs-and-projects/scholarships/undergraduate-scholarships#s-amp-t-undergraduate-scholarships"
                target="_BLANK"
              >
                2018 Philippine Government DOST-SEI Merit Scholarship
              </a>{" "}
              awardee. Varsity Debate Team Captain, Philippine National Fencing
              Team Member, and Outreach Committee Founder.
            </p>
            <p>
              <strong>Relevant Coursework</strong>: Data Structures &amp;
              Algorithms, Object-Oriented Programming, Client-Side Web
              Development, Embedded Systems &amp; Program Design, STEM Research
            </p>
          </div>
        </div>
        {/* Experience */}
        <div className="marg-bot-2" id="experience">
          <h4 className="title">Experience</h4>
          <div className="card">
            <div className="flex-container">
              <div className="flex">
                <h5>Software Engineering Intern | CBS</h5>
                <p className="gray-text subtitle">
                  June - August 2019 • New York, NY
                </p>
              </div>
              <a href="https://www.cbs.com/" target="_BLANK">
                <img
                  src={require("../images/experience/cbs.png")}
                  className="background-image"
                  alt="CBS logo"
                />
              </a>
            </div>
            <ul className="tech">
              <li>
                Standardized end-to-end broadcast distribution configurations
                for entire East Coast feed
              </li>
              <li>
                Completed 27 purchase requests from international TV stations
                amounting to $132,930 in profit
              </li>
              <li>
                Assisted with basic maintenance of cloud-based content storage
                and manipulation
              </li>
            </ul>
            <p>
              <strong>Technologies</strong>: SQL (SQL Server), XML, C++, AWS
              (S3, Lambda, CloudWatch), AutoCAD
            </p>
          </div>
          <div className="card">
            <div className="flex-container">
              <div className="flex">
                <h5>Interim CTO | DeLive Aerial Systems</h5>
                <p className="gray-text subtitle">
                  October 2019 - Present • South Bend, IN
                </p>
              </div>
              <a href="https://www.deliveaerial.com/" target="_BLANK">
                <img
                  src={require("../images/experience/delive.png")}
                  className="background-image"
                  alt="DeLive logo"
                />
              </a>
            </div>
            <ul className="tech">
              <li>
                Secured $10k funding,{" "}
                <a
                  href="https://ideacenter.nd.edu/news-events/news/this-summers-race-to-revenue-program-funds-five-student-run-startups/"
                  target="_BLANK"
                >
                  Race to Revenue
                </a>{" "}
                incubator invitation, and pitch to Indianapolis-based $100M VC
                fund
              </li>
              <li>
                Will develop full stack web app and structure database
                architecture in agile environment
              </li>
              <li>
                Will assist in further developing drone system for FAA approval
                and exhibit in{" "}
                <a href="https://www.ces.tech/" target="_BLANK">
                  Consumer Electronics Show (CES) 2020
                </a>
              </li>
            </ul>
            <p>
              <strong>Technologies</strong>: React, Redux, Node, Express,
              Python, AWS (DynamoDB, IoT), Raspberry Pi, Agile (SCRUM), Git
            </p>
          </div>
          <div className="card">
            <div className="flex-container">
              <div className="flex">
                <h5>Software Engineer | Tembo AI</h5>
                <p className="gray-text subtitle">
                  January 2019 - January 2020 • South Bend, IN
                </p>
              </div>
              <a href="https://www.tembo.tech/" target="_BLANK">
                <img
                  src={require("../images/experience/tembo.png")}
                  className="background-image"
                  alt="Tembo logo"
                />
              </a>
            </div>
            <ul className="tech">
              <li>
                Solely developed iOS/Android apps for emergency messaging to be
                used in alpha testing
              </li>
              <li>
                Solely developed and demoed MVP (Indoor Mobile Location Tracker)
                resulting in{" "}
                <a
                  href="https://southbendelkhart.org/news/tembo-ai-receives-minority-owned-startup-award/"
                  target="_BLANK"
                >
                  $11.5k funding
                </a>
              </li>
            </ul>
            <p>
              <strong>Technologies</strong>: DART, Flutter (Provider), Firebase,
              Raspberry Pi, Kali Linux, Git
            </p>
          </div>
          <div className="card">
            <div className="flex-container">
              <div className="flex">
                <h5>Software Engineer Technical Lead | Gäshawk Incorporated</h5>
                <p className="gray-text subtitle">
                  January 2019 - January 2020 • South Bend, IN
                </p>
              </div>
              <a href="https://xn--gshawk-bua.com/" target="_BLANK">
                <img
                  src={require("../images/experience/gashawk.png")}
                  className="background-image"
                  alt="Gäshawk logo"
                />
              </a>
            </div>
            <ul className="tech">
              <li>
                Solely developed and demoed MVP (Touchscreen GUI + LiDAR
                Overhead Collision Detection) resulting in{" "}
                <a href="https://startupsouthbendelkhart.com/" target="_BLANK">
                  Start-Up South Bend Elkhart (SUSBE)
                </a>{" "}
                accelerator invitation
              </li>
              <li>
                Assisted in{" "}
                <a href="https://seedfund.nsf.gov/about/" target="_BLANK">
                  National Seed Fund (NSF) Small Business Innovation Research
                  (SBIR)
                </a>{" "}
                program entry
              </li>
            </ul>
            <p>
              <strong>Technologies</strong>: C++, Arduino, Git
            </p>
          </div>
          <div className="card">
            <div className="flex-container">
              <div className="flex">
                <h5>Software Engineer Technical Lead | ShareCaddie</h5>
                <p className="gray-text subtitle">
                  January 2019 - August 2019 • South Bend, IN
                </p>
              </div>
              <div
                className="background-image"
                style={{
                  backgroundImage: "href(img/experience/sharecaddie.png)",
                }}
              />
            </div>
            <ul className="tech">
              <li>
                Solely developed and demoed MVP (Peer-to-Peer Golf Equipment
                Rental iOS/Android Apps) resulting in Semifinals finish (top
                30/175 teams) in{" "}
                <a href="https://mccloskey.ideacenter.nd.edu/" target="_BLANK">
                  McCloskey New Venture Competition 2019
                </a>
              </li>
            </ul>
            <p>
              <strong>Technologies</strong>: DART, Flutter (Provider), Firebase,
              HTML, CSS, JavaScript (jQuery)
            </p>
          </div>
          <div className="card">
            <div className="flex-container">
              <div className="flex">
                <h5>Technology Track Head | YouthHack</h5>
                <p className="gray-text subtitle">
                  March 2017 - July 2018 • Quezon City, Philippines
                </p>
              </div>
              <a href="https://youthhack.net/" target="_BLANK">
                <img
                  src={require("../images/experience/yh.svg")}
                  className="background-image"
                  alt="YH logo"
                />
              </a>
            </div>
            <ul className="tech">
              <li>
                Organized national hackathon, international summit attended by 5
                countries and 10-week startup incubator program for 9 collegiate
                student-run startups
              </li>
              <li>
                Created and taught 4-hr workshops for web dev for collegiate
                students and professionals
              </li>
              <li>
                Partnered with{" "}
                <a href="https://www.inquirer.net/" target="_BLANK">
                  Philippine Daily Inquirer
                </a>{" "}
                and{" "}
                <a href="https://www.rappler.com/" target="_BLANK">
                  Rappler
                </a>{" "}
                for media coverage and exposure
              </li>
            </ul>
            <p>
              <strong>Technologies</strong>: HTML, CSS, JavaScript (jQuery)
            </p>
          </div>
          <a
            href="/files/resumeBuenviaje.pdf"
            className="btn btn-info"
            target="_BLANK"
          >
            View my resume →
          </a>
        </div>
        {/* Technologies */}
        <div className="marg-bot-2" id="technologies">
          <h4 className="title">Technologies</h4>
          <div className="card">
            <div className="row">
              <div className="col-12 col-md-6">
                <h5>General Purpose</h5>
                <p>JavaScript (ES6), C++, Python, Java, Go/Golang</p>
                <h5>Web</h5>
                <p>
                  React, Redux, Node, Express, jQuery, XML, HTML, CSS
                  (SCSS/Sass, Bootstrap)
                </p>
                <h5>Mobile</h5>
                <p>DART, Flutter (Provider)</p>
                <h5>Embedded Systems</h5>
                <p>Arduino, Raspberry Pi, Intel Galileo</p>
              </div>
              <div className="col-12 col-md-6 col-1-format">
                <h5>Databases &amp; Deployment</h5>
                <p>
                  SQL (Postgres, SQL Server), AWS (S3, DynamoDB, Lambda, IoT,
                  CloudWatch), Firebase, Heroku
                </p>
                <h5>Other</h5>
                <p>MATLAB, Git, Linux, Kali Linux, Agile (SCRUM)</p>
                <h5>Design</h5>
                <p>AutoCAD, Fusion 360, SOLIDWORKS, Fritzing, Eagle, Spark</p>
              </div>
            </div>
          </div>
          <a href="#projects" className="btn btn-info">
            View my projects →
          </a>
        </div>
        {/* Extracurriculars */}
        <div id="extracurriculars">
          <h4 className="title">Extracurriculars</h4>
          <div className="card">
            <div className="flex-container">
              <div className="flex">
                <h5>Student Ambassador | IDEA Center</h5>
                <p className="gray-text subtitle">August 2019 - Present</p>
              </div>
              <a href="https://ideacenter.nd.edu/" target="_BLANK">
                <img
                  src={require("../images/extracurriculars/ideacenter.png")}
                  className="background-image"
                  alt="IDEA Center logo"
                />
              </a>
            </div>
            <p>
              Standing for Innovation, De-Risking and Enterprise Acceleration,
              the{" "}
              <a href="https://ideacenter.nd.edu/" target="_BLANK">
                IDEA Center
              </a>{" "}
              is the fundamental resource for all commercialization and
              entrepreneurial activities at the University of Notre Dame.
            </p>
            <ul>
              <li>
                Will aid in recruiting students for summer internships,
                McCloskey New Venture Competition, and academic programs,
                connect College of Engineering students to affiliated local
                startups and research on marketing and recruiting strategies for
                College of Engineering students
              </li>
            </ul>
          </div>
          <div className="card">
            <div className="flex-container">
              <div className="flex">
                <h5>
                  Teaching Assistant, PHIL 10111 Intro to Philosophy |
                  University of Notre Dame
                </h5>
                <p className="gray-text subtitle">August 2019 - Present</p>
              </div>
              <a href="https://godandgoodlife.nd.edu/" target="_BLANK">
                <img
                  src={require("../images/education/nd.png")}
                  className="background-image"
                  alt="ND logo"
                />
              </a>
            </div>
            <p>
              The{" "}
              <a href="https://godandgoodlife.nd.edu/" target="_BLANK">
                God and the Good Life (GGL)
              </a>{" "}
              course tackles such issues as what justifies one's beliefs,
              whether one should practice a religion, and what sacrifices one
              should make for others.
            </p>
            <ul>
              <li>
                Will personally oversee 21 students through graded group
                discussions and major requirements of 3-credit course (20-page
                essay and university-wide campaign publication) and aid in
                grading assignments, lesson planning, and hosting office hours
              </li>
            </ul>
          </div>
        </div>
        {/* Projects */}
        <div id="projects">
          <h4 className="title projects">Projects</h4>
          {/* <div class="project" style="background: #00aacf">
        <div class="text">
          <h2>-</h2>
          <p>-</p>
          <p><strong>Technologies:</strong> -</p>
          <div class="buttons">
              <a class="btn btn-sm" href="#">
                View here
              </a>
          </div>
        </div>
        <div class="screenshot-wrapper">
          <div class="browser-screenshot">
            <div class="top">
              <span class="circle"></span>
              <span class="circle"></span>
              <span class="circle"></span>
            </div>
            <img src={require("../images/projects/jio.png")} alt="-" class="img-fluid" />
          </div>
        </div>
      </div> */}
          <div className="project" style={{ background: "#e18e7f" }}>
            <div className="text">
              <h2>Tembo App</h2>
              <p>
                Emergency Messaging iOS/Android Apps with Authentication
                developed for Tembo AI. Will be integrated with user tracking
                feature and used for alpha testing in local high school.
              </p>
              <p>
                <strong>Technologies:</strong> DART, Flutter (Provider),
                Firebase
              </p>
            </div>
            <div className="screenshot-wrapper">
              <div className="mobile mobile-screenshot">
                <div className="side">
                  <div className="screen">
                    <img
                      src={require("../images/projects/tembo.gif")}
                      alt="Tembo app"
                    />
                  </div>
                </div>
                <div className="line" />
                <div className="header" />
                <div className="volume-button" />
                <div className="power-button" />
              </div>
            </div>
          </div>
          <div className="project" style={{ background: "#98D0CB" }}>
            <div className="text">
              <h2>ShareCaddie App</h2>
              <p>
                Peer-to-Peer Golf Equipment Rental iOS/Android Apps developed
                for ShareCaddie. Demo resulted in Semifinals finish (top 30/175
                teams) in McCloskey New Venture Competition 2019.
              </p>
              <p>
                <strong>Technologies:</strong> DART, Flutter, Firebase
              </p>
            </div>
            <div className="screenshot-wrapper">
              <div className="mobile mobile-screenshot">
                <div className="side">
                  <div className="screen">
                    <img
                      src={require("../images/projects/sharecaddie.gif")}
                      alt="ShareCaddie app"
                    />
                  </div>
                </div>
                <div className="line" />
                <div className="header" />
                <div className="volume-button" />
                <div className="power-button" />
              </div>
            </div>
          </div>
          <div className="project" style={{ background: "#f8a978" }}>
            <div className="text">
              <h2>Gäshawk Overwatch</h2>
              <p>
                Touchscreen GUI + LiDAR Overhead Collision Detection system
                developed for Gäshawk Inc. Demo resulted in Start-Up South Bend
                Elkhart (SUSBE) accelerator program invitation.
              </p>
              <p>
                <strong>Technologies:</strong> C++, Arduino, Fritzing,
                Touchscreen, LiDAR, GUI
              </p>
              <div className="buttons">
                <a
                  className="btn btn-sm"
                  href="https://github.com/gashawk/overwatch"
                  target="_BLANK"
                >
                  View repository
                </a>
              </div>
            </div>
            <div className="screenshot-wrapper">
              <div className="system-screenshot">
                <div className="top" />
                <img
                  src={require("../images/projects/gashawk.png")}
                  alt="Gäshawk embedded"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <div className="project" style={{ background: "#e18e7f" }}>
            <div className="text">
              <h2>Automated School Logger</h2>
              <p>
                RFID attendance and location logger with online school database
                for Research 2 &amp; 3. Garnered 3rd Grand Award in 2017 Youth
                Math Science and Technology (YMSAT) Week.
              </p>
              <p>
                <strong>Technologies:</strong> Research, C++, Arduino, PHP,
                MySQL, CodeIgniter, Fritzing, RFID Scanner, Touchscreen, WiFi.
                GUI
              </p>
              <div className="buttons">
                <a
                  className="btn btn-sm"
                  href="/files/researchLogger.pdf"
                  target="_BLANK"
                >
                  View research
                </a>
              </div>
            </div>
            <div className="screenshot-wrapper">
              <div className="system-screenshot">
                <div className="top" />
                <img
                  src={require("../images/projects/logger.png")}
                  alt="Logger research"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <div className="project" style={{ background: "#98D0CB" }}>
            <div className="text">
              <h2>Sustainable Energy Charger</h2>
              <p>
                Mobile phone solar panel and hand-crank charger for Research 1.
                Garnered 4th Grand Award in Engineering in 2017 Taiwan
                International Science Fair (TISF).
              </p>
              <p>
                <strong>Technologies:</strong> Research, AutoCAD, Eagle,
                Switch-Mode Converter, Mobile Charging, Solar Panel, Hand-Crank
              </p>
              <div className="buttons">
                <a
                  className="btn btn-sm"
                  href="/files/researchCharger.pdf"
                  target="_BLANK"
                >
                  View research
                </a>
              </div>
            </div>
            <div className="screenshot-wrapper">
              <div className="system-screenshot">
                <div className="top" />
                <img
                  src={require("../images/projects/charger.png")}
                  alt="Charger research"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <div className="project" style={{ background: "#f8a978" }}>
            <div className="text">
              <h2>Cosmological Constant</h2>
              <p>
                Research done for Theoretical Physics department of University
                of the Philippines in summer 2017 internship. Garnered Honorable
                Mention Award.
              </p>
              <p>
                <strong>Technologies:</strong> Research, MS Excel, Cosmological
                Constant, Neutron Stars
              </p>
              <div className="buttons">
                <a
                  className="btn btn-sm"
                  href="/files/researchNeutron.pdf"
                  target="_BLANK"
                >
                  View research
                </a>
              </div>
            </div>
            <div className="screenshot-wrapper">
              <div className="system-screenshot">
                <div className="top" />
                <img
                  src={require("../images/projects/cosmo.png")}
                  alt="Cosmo research"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="space-mobile" />
        <div className="browser marg-bot-1">
          <div className="top">
            <span className="circle" />
            <span className="circle" />
            <span className="circle" />
          </div>
          <div className="body">
            <h2>Let's make something!</h2>
            <p>
              I'm a developer enthusiastic about well-designed products that at
              their core, aim to assist people, regardless of market size.
              Whatever you are imagining, building, or growing, I'd love to hear
              about it. Scroll through my work and take the time to reach out.
              I'll respond as quickly as I can.
            </p>
            <div className="buttons">
              <a href="#projects" className="btn btn-info">
                View my projects
              </a>
              <a
                href="mailto:jbuenvia@nd.edu"
                className="btn btn-info"
                target="_BLANK"
              >
                Contact me
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Footer */}
    <footer>
      <div className="container-fluid">
        <p className="right">
          Juan Sergio Buenviaje © 2019. All rights reserved.
        </p>
        <p id="scroll-to-top">Scroll to top ↑</p>
      </div>
    </footer>
    {/* Contact form */}
    {/* <div class="modal fade" tabindex="-1" role="contact" id="contactModal" aria-labelledby="contactModal"
    aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
<div class="modal-content">
  <div class="modal-header">
    <h5 class="modal-title">Contact me</h5>
    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <form id="contactForm">
    <div class="modal-body">
      <!-- Render a div for error and success messages */}
    {/* <div id="message"></div> */}
    {/* Render the form fields */}
    {/* <div class="row">
        <div class="col-12 col-md-6">
          <input type="text" name="firstName" id="firstName" class="form-control" placeholder="First"
            required="true"></input>
        </div>
        <div class="col-12 col-md-6">
          <input type="text" name="lastName" class="form-control" placeholder="Last" required="true"></input>
        </div>
      </div>
      <input type="email" name="email" class="form-control" placeholder="example@gmail.com"
        required="true"></input>
      <input type="text" name="subject" class="form-control" placeholder="Subject..." required="true"></input>
      <textarea type="text" name="body" class="form-control" placeholder="Message..." required="true"></textarea>
    </div>
    <div class="modal-footer">
      <input type="submit" class="btn btn-info" value="Send" id="contactFormButton"></input>
      <button type="button" class="btn btn-secondary" data-dismiss="modal">
        Cancel
      </button>
    </div>
  </form>
</div>
    </div>
  </div> */}
  </div>
)

export default IndexPage
