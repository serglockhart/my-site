import React from "react"
import { Link } from "gatsby"

import Header from "../components/Header/index.js"
import Content from "../components/Content/index.js"
import Hero from "../components/Hero/index.js"
import Section from "../components/Section/index.js"
import Card from "../components/Card/index.js"
import Tech from "../components/Tech/index.js"
import Project from "../components/Project/index.js"
import Browser from "../components/Browser/index.js"
import Mobile from "../components/Mobile/index.js"
import System from "../components/System/index.js"
import Action from "../components/Action/index.js"
import Footer from "../components/Footer/index.js"

import "./index.css"

import temboGif from "../images/tembo.gif"
import foreagerGif from "../images/foreager.gif"

const IndexPage = () => (
  <div className="app" id="top">
    {/* Navigation */}
    <Header />
    {/* App content */}
    <Content>
      {/* Overview */}
      <Hero />
      {/* Education */}
      <Section id="education" title="Education">
        <Card
          title="University of Notre Dame"
          subtitle="2018 - 2022 | 3.51 GPA"
          logoLink="https://cse.nd.edu/undergraduates/computer-science"
          logo={`../../images/education/nd.png`}
          logoAlt={"ND logo"}
          body={
            <p>
              Pursuing a BS in Computer Science (
              <a
                href="https://cse.nd.edu/undergraduates/cse-concentrations/mobile-computing"
                rel="noopener noreferrer"
                target="_BLANK"
              >
                Concentration in Mobile Computing
              </a>
              ) from the College of Engineering with a Minor in{" "}
              <a
                href="https://mendoza.nd.edu/undergraduate/innovation-entrepreneurship-minor/"
                rel="noopener noreferrer"
                target="_BLANK"
              >
                Innovation & Entrepreneurship
              </a>{" "}
              from the Mendoza College of Business.
            </p>
          }
          end={
            <p>
              <strong>Relevant Coursework</strong>: Data Structures, Logic
              Design, Systems Programming, Fundamentals of Computing, Discrete
              Mathematics
            </p>
          }
        />
        <Card
          title="Philippine Science High School - Main Campus"
          subtitle="2012 - 2018 | 3.84 GPA"
          logoLink="http://www.pshs.edu.ph/curriculum/"
          logo={`../../images/education/pshs.png`}
          logoAlt={"PSHS logo"}
          body={
            <p>
              Graduated Magna Cum Laude (High Honors), with a class rank of
              28/221 and{" "}
              <a
                href="http://www.sei.dost.gov.ph/index.php/programs-and-projects/scholarships/undergraduate-scholarships#s-amp-t-undergraduate-scholarships"
                rel="noopener noreferrer"
                target="_BLANK"
              >
                2018 Philippine Government DOST-SEI Merit Scholarship
              </a>{" "}
              awardee. Varsity Debate Team Captain, Philippine National Fencing
              Team Member, and Outreach Committee Founder.
            </p>
          }
          end={
            <p>
              <strong>Relevant Coursework</strong>: Data Structures &
              Algorithms, Object-Oriented Programming, Client-Side Web
              Development, Embedded Systems & Program Design, STEM Research
            </p>
          }
        />
      </Section>
      {/* Experience */}
      <Section
        id="experience"
        title="Experience"
        button={
          <a
            href={`../../files/resumeBuenviaje.pdf`}
            className="btn btn-info"
            rel="noopener noreferrer"
            target="_BLANK"
          >
            View my resume →
          </a>
        }
      >
        <Card
          title="Software Engineering Intern | CBS"
          subtitle="June - August 2019 • New York, NY"
          logoLink="https://www.cbs.com/"
          logo={`../../images/experience/cbs.png`}
          logoAlt={"CBS logo"}
          body={
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
          }
          end={
            <p>
              <strong>Technologies</strong>: SQL (SQL Server), XML, C++, AWS
              (S3, Lambda, CloudWatch), AutoCAD
            </p>
          }
        />
        <Card
          title="Interim CTO | DeLive Aerial Systems"
          subtitle="October 2019 - Present • South Bend, IN"
          logoLink="https://www.deliveaerial.com/"
          logo={`../../images/experience/delive.png`}
          logoAlt={"DeLive logo"}
          body={
            <ul className="tech">
              <li>
                Secured $10k funding,{" "}
                <a
                  href="https://ideacenter.nd.edu/news-events/news/this-summers-race-to-revenue-program-funds-five-student-run-startups/"
                  rel="noopener noreferrer"
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
                <a
                  href="https://www.ces.tech/"
                  rel="noopener noreferrer"
                  target="_BLANK"
                >
                  Consumer Electronics Show (CES) 2020
                </a>
              </li>
            </ul>
          }
          end={
            <p>
              <strong>Technologies</strong>: React, Redux, Node, Express,
              Python, AWS (DynamoDB, IoT), Raspberry Pi, Agile (SCRUM), Git
            </p>
          }
        />
        <Card
          title="Software Engineer | Tembo AI"
          subtitle="January 2019 - January 2020 • South Bend, IN"
          logoLink="https://www.tembo.tech/"
          logo={`../../images/experience/tembo.png`}
          logoAlt={"Tembo logo"}
          body={
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
                  rel="noopener noreferrer"
                  target="_BLANK"
                >
                  $11.5k funding
                </a>
              </li>
            </ul>
          }
          end={
            <p>
              <strong>Technologies</strong>: DART, Flutter (Provider), Firebase,
              Raspberry Pi, Kali Linux, Git
            </p>
          }
        />
        <Card
          title="Software Engineer Technical Lead | Gäshawk Incorporated"
          subtitle="January 2019 - January 2020 • South Bend, IN"
          logoLink="https://xn--gshawk-bua.com/"
          logo={`../../images/experience/gashawk.png`}
          logoAlt={"Gäshawk logo"}
          body={
            <ul className="tech">
              <li>
                Solely developed and demoed MVP (Touchscreen GUI + LiDAR
                Overhead Collision Detection) resulting in{" "}
                <a
                  href="https://startupsouthbendelkhart.com/"
                  rel="noopener noreferrer"
                  target="_BLANK"
                >
                  Start-Up South Bend Elkhart (SUSBE)
                </a>{" "}
                accelerator invitation
              </li>
              <li>
                Assisted in{" "}
                <a
                  href="https://seedfund.nsf.gov/about/"
                  rel="noopener noreferrer"
                  target="_BLANK"
                >
                  National Seed Fund (NSF) Small Business Innovation Research
                  (SBIR)
                </a>{" "}
                program entry
              </li>
            </ul>
          }
          end={
            <p>
              <strong>Technologies</strong>: C++, Arduino, Git
            </p>
          }
        />
        <Card
          title="Software Engineer Technical Lead | Foreager"
          subtitle="January 2019 - August 2019 • South Bend, IN"
          logoLink="https://foreager.com/"
          logo={`../../images/experience/foreager.png`}
          logoAlt={"Foreager logo"}
          body={
            <ul className="tech">
              <li>
                Solely developed and demoed MVP (Peer-to-Peer Golf Equipment
                Rental iOS/Android Apps) resulting in Semifinals finish (top
                30/175 teams) in{" "}
                <a
                  href="https://mccloskey.ideacenter.nd.edu/"
                  rel="noopener noreferrer"
                  target="_BLANK"
                >
                  McCloskey New Venture Competition 2019
                </a>
              </li>
            </ul>
          }
          end={
            <p>
              <strong>Technologies</strong>: DART, Flutter (Provider), Firebase,
              HTML, CSS, JavaScript (jQuery)
            </p>
          }
        />
        <Card
          title="Technology Track Head | YouthHack"
          subtitle="March 2017 - July 2018 • Quezon City, Philippines"
          logoLink="https://youthhack.net/"
          logo={`../../images/experience/yh.svg`}
          logoAlt={"YH logo"}
          body={
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
                <a
                  href="https://www.inquirer.net/"
                  rel="noopener noreferrer"
                  target="_BLANK"
                >
                  Philippine Daily Inquirer
                </a>{" "}
                and{" "}
                <a
                  href="https://www.rappler.com/"
                  rel="noopener noreferrer"
                  target="_BLANK"
                >
                  Rappler
                </a>{" "}
                for media coverage and exposure
              </li>
            </ul>
          }
          end={
            <p>
              <strong>Technologies</strong>: HTML, CSS, JavaScript (jQuery)
            </p>
          }
        />
      </Section>
      {/* Technologies */}
      <Section
        id="technologies"
        title="Technologies"
        button={
          <Link to="#projects" className="btn btn-info">
            View my projects →
          </Link>
        }
      >
        <Tech />
      </Section>
      {/* Extracurriculars */}
      <Section id="extracurriculars" title="Extracurriculars">
        <Card
          title="Student Ambassador | IDEA Center"
          subtitle="August 2019 - Present"
          logoLink="https://ideacenter.nd.edu/"
          logo={`../../images/extracurriculars/ideacenter.png`}
          logoAlt={"IDEA Center logo"}
          body={
            <p>
              Standing for Innovation, De-Risking and Enterprise Acceleration,
              the{" "}
              <a
                href="https://ideacenter.nd.edu/"
                rel="noopener noreferrer"
                target="_BLANK"
              >
                IDEA Center
              </a>{" "}
              is the fundamental resource for all commercialization and
              entrepreneurial activities at the University of Notre Dame.
            </p>
          }
          end={
            <ul>
              <li>
                Will aid in recruiting students for summer internships,
                McCloskey New Venture Competition, and academic programs,
                connect College of Engineering students to affiliated local
                startups and research on marketing and recruiting strategies for
                College of Engineering students
              </li>
            </ul>
          }
        />
        <Card
          title="Teaching Assistant, PHIL 10111 Intro to Philosophy | University of Notre Dame"
          subtitle="August 2019 - Present"
          logoLink="https://godandgoodlife.nd.edu/"
          logo={`../../images/education/nd.png`}
          logoAlt={"ND logo"}
          body={
            <p>
              The{" "}
              <a
                href="https://godandgoodlife.nd.edu/"
                rel="noopener noreferrer"
                target="_BLANK"
              >
                God and the Good Life (GGL)
              </a>{" "}
              course tackles such issues as what justifies one's beliefs,
              whether one should practice a religion, and what sacrifices one
              should make for others.
            </p>
          }
          end={
            <ul>
              <li>
                Will personally oversee 21 students through graded group
                discussions and major requirements of 3-credit course (20-page
                essay and university-wide campaign publication) and aid in
                grading assignments, lesson planning, and hosting office hours
              </li>
            </ul>
          }
        />
      </Section>
      {/* Projects */}
      <Section id="projects" title="Projects">
        {/* <div className="project" style={{ background: "#00aacf" }}>
          <div className="text">
            <h2>-</h2>
            <p>-</p>
            <p>
              <strong>Technologies:</strong> -
            </p>
            <div className="buttons">
              <a href="#" className="btn btn-sm">
                View here
              </a>
            </div>
          </div>
          <div className="screenshot-wrapper">
            <Browser
              image={`../../images/projects/jio.png`}
              imageAlt={"My site"}
            />
          </div>
        </div> */}
        <Project
          title="Tembo App"
          body="Emergency Messaging iOS/Android Apps with Authentication developed for Tembo AI. Will be integrated with user tracking feature and used for alpha testing in local high school."
          end={
            <p>
              <strong>Technologies:</strong> DART, Flutter (Provider), Firebase
            </p>
          }
        >
          <Mobile image={temboGif} imageAlt={"Tembo app"}></Mobile>
        </Project>
        <Project
          bgColor="#98D0CB"
          title="Foreager App"
          body="Peer-to-Peer Golf Equipment Rental iOS/Android Apps developed for Foreager. Demo resulted in Semifinals finish (top 30/175 teams) in McCloskey New Venture Competition 2019."
          end={
            <p>
              <strong>Technologies:</strong> DART, Flutter, Firebase
            </p>
          }
        >
          <Mobile image={foreagerGif} imageAlt={"Foreager app"}></Mobile>
        </Project>
        <Project
          bgColor="#f8a978"
          title="Gäshawk Overwatch"
          body="Touchscreen GUI + LiDAR Overhead Collision Detection system developed for Gäshawk Inc. Demo resulted in Start-Up South Bend Elkhart (SUSBE) accelerator program invitation."
          end={
            <p>
              <strong>Technologies:</strong> C++, Arduino, Fritzing,
              Touchscreen, LiDAR, GUI
            </p>
          }
          buttons={
            <div className="buttons">
              <a
                href="https://github.com/gashawk/overwatch"
                rel="noopener noreferrer"
                target="_BLANK"
                className="btn btn-sm"
              >
                View repository
              </a>
            </div>
          }
        >
          <System
            image={`../../images/projects/gashawk.png`}
            imageAlt={"Gäshawk embedded"}
          />
        </Project>
        <Project
          title="Automated School Logger"
          body="RFID attendance and location logger with online school database for Research 2 & 3. Garnered 3rd Grand Award in 2017 Youth Math Science and Technology (YMSAT) Week."
          end={
            <p>
              <strong>Technologies:</strong> Research, C++, Arduino, PHP, MySQL,
              CodeIgniter, Fritzing, RFID Scanner, Touchscreen, WiFi. GUI
            </p>
          }
          buttons={
            <div className="buttons">
              <a
                href={`../../files/researchLogger.pdf`}
                rel="noopener noreferrer"
                target="_BLANK"
                className="btn btn-sm"
              >
                View research
              </a>
            </div>
          }
        >
          <System
            image={`../../images/projects/logger.png`}
            imageAlt={"Logger research"}
          />
        </Project>
        <Project
          bgColor="#98D0CB"
          title="Sustainable Energy Charger"
          body="Mobile phone solar panel and hand-crank charger for Research 1. Garnered 4th Grand Award in Engineering in 2017 Taiwan International Science Fair (TISF)."
          end={
            <p>
              <strong>Technologies:</strong> Research, AutoCAD, Eagle,
              Switch-Mode Converter, Mobile Charging, Solar Panel, Hand-Crank
            </p>
          }
          buttons={
            <div className="buttons">
              <a
                href={`../../files/researchCharger.pdf`}
                rel="noopener noreferrer"
                target="_BLANK"
                className="btn btn-sm"
              >
                View research
              </a>
            </div>
          }
        >
          <System
            image={`../../images/projects/charger.png`}
            imageAlt={"Charger research"}
          />
        </Project>
        <Project
          bgColor="#f8a978"
          title="Cosmological Constant"
          body="Research done for Theoretical Physics department of University of the Philippines in summer 2017 internship. Garnered Honorable Mention Award."
          end={
            <p>
              <strong>Technologies:</strong> Research, MS Excel, Cosmological
              Constant, Neutron Stars
            </p>
          }
          buttons={
            <div className="buttons">
              <a
                href={`../../files/researchNeutron.pdf`}
                rel="noopener noreferrer"
                target="_BLANK"
                className="btn btn-sm"
              >
                View research
              </a>
            </div>
          }
        >
          <System
            image={`../../images/projects/cosmo.png`}
            imageAlt={"Cosmo research"}
          />
        </Project>
      </Section>
      <div className="space-mobile" />
      <Action></Action>
    </Content>
    {/* Footer */}
    <Footer />
    {/* Contact form */}
    {/* <div className="modal fade" tabindex="-1" role="contact" id="contactModal" aria-labelledby="contactModal"
    aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered" role="document">
<div className="modal-content">
  <div className="modal-header">
    <h5 className="modal-title">Contact me</h5>
    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <form id="contactForm">
    <div className="modal-body">
      Render a div for error and success messages */}
    {/* <div id="message"></div> */}
    {/* Render the form fields */}
    {/* <div className="row">
        <div className="col-12 col-md-6">
          <input type="text" name="firstName" id="firstName" className="form-control" placeholder="First"
            required="true"></input>
        </div>
        <div className="col-12 col-md-6">
          <input type="text" name="lastName" className="form-control" placeholder="Last" required="true"></input>
        </div>
      </div>
      <input type="email" name="email" className="form-control" placeholder="example@gmail.com"
        required="true"></input>
      <input type="text" name="subject" className="form-control" placeholder="Subject..." required="true"></input>
      <textarea type="text" name="body" className="form-control" placeholder="Message..." required="true"></textarea>
    </div>
    <div className="modal-footer">
      <input type="submit" className="btn btn-info" value="Send" id="contactFormButton"></input>
      <button type="button" className="btn btn-secondary" data-dismiss="modal">
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
