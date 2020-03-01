import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout/index.js"
import Content from "../components/Content/index.js"
import Hero from "../components/Hero/index.js"
import Button from "../components/Button/index.js"
import Section from "../components/Section/index.js"
import Card from "../components/Card/index.js"
import Tech from "../components/Tech/index.js"
import Project from "../components/Project/index.js"
import Browser from "../components/Browser/index.js"
import Mobile from "../components/Mobile/index.js"
import System from "../components/System/index.js"
import Action from "../components/Action/index.js"

import "../styles/index.css"

const IndexPage = props => {
  return (
    <Layout>
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
            logo={`../../images/education/nd.webp`}
            logoBackup={`../../images/education/nd.png`}
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
                  href="https://mendoza.nd.edu/undergraduate/innovation-entrepreneurship-minor"
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
                <strong>Relevant Coursework</strong>: Data Structures, Systems
                Programming, Logic Design, Fundamentals of Computing, Discrete
                Mathematics, Linear Algebra & Differential Equations
              </p>
            }
          />
          <Card
            title="Philippine Science High School - Main Campus"
            subtitle="2012 - 2018 | 3.84 GPA"
            logoLink="http://www.pshs.edu.ph/curriculum/"
            logo={`../../images/education/pshs.webp`}
            logoBackup={`../../images/education/pshs.png`}
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
                awardee. Varsity Debate Team Captain, Philippine National
                Fencing Team Member, and Outreach Committee Founder.
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
            title="Media Software Engineer Intern | CBS"
            subtitle="Summer 2019 • New York, NY"
            logoLink="https://cbs.com"
            logo={`../../images/experience/cbs.webp`}
            logoBackup={`../../images/experience/cbs.png`}
            logoAlt={"CBS logo"}
            body={
              <ul className="tech">
                <li>
                  Standardized end-to-end broadcast distribution configurations
                  (video containers/codecs) for entire East Coast feed
                </li>
                <li>
                  Completed 27 international purchase requests using database
                  queries totaling $132,930 in profit
                </li>
                <li>
                  Assisted in cloud-based content compute, storage and
                  monitoring for day-to-day operations
                </li>
              </ul>
            }
            end={
              <p>
                <strong>Technologies</strong>: C++, XML, SQL Server, AWS (EC2,
                S3, Glacier, CloudWatch), AutoCAD
              </p>
            }
          />
          <Card
            title="Software Engineer Intern | IDEA Center"
            subtitle="Spring 2020 • South Bend, IN"
            logoLink="https://ideacenter.nd.edu"
            logo={`../../images/extracurriculars/ideacenter.webp`}
            logoBackup={`../../images/extracurriculars/ideacenter.png`}
            logoAlt={"IDEA Center logo"}
            body={
              <ul className="tech">
                <li>
                  Developed e-commerce web app with Shopify API through Pair
                  Programming to be used by startup
                </li>
                <li>
                  Will work with IDEA Center startups to develop full-stack web
                  apps and APIs in Agile Environment
                </li>
              </ul>
            }
            end={
              <p>
                <strong>Technologies</strong>: JavaScript, React, Next, GraphQL,
                Apollo, Node, Express, Polaris, Gatsby, Python, Sass/SCSS,
                Bootstrap, HTML/CSS, PWA, Git
              </p>
            }
          />
          <Card
            title="Chief Technology Officer | DeLive Drones"
            subtitle="October 2019 - Present • South Bend, IN"
            logoLink="https://delivedrones.com"
            logo={`../../images/experience/delive.webp`}
            logoBackup={`../../images/experience/delive.png`}
            logoAlt={"DeLive logo"}
            body={
              <ul className="tech">
                <li>
                  Exhibited in{" "}
                  <a
                    href="https://www.ces.tech"
                    rel="noopener noreferrer"
                    target="_BLANK"
                  >
                    Consumer Electronics Show (CES) 2020
                  </a>{" "}
                  , secured $20k funding,{" "}
                  <a
                    href="https://ideacenter.nd.edu/news-events/news/this-summers-race-to-revenue-program-funds-five-student-run-startups"
                    rel="noopener noreferrer"
                    target="_BLANK"
                  >
                    Race to Revenue
                  </a>{" "}
                  accelerator invitation, and pitch to Indianapolis-based $100M
                  VC fund
                </li>
                <li>
                  Solely developed front-end of web app and will integrate with
                  Node + Flask backend through Parse Server
                </li>
                <li>
                  Will develop and integrate RESTful API, drone GCS and NoSQL
                  database in Agile Environment
                </li>
              </ul>
            }
            end={
              <p>
                <strong>Technologies</strong>: JavaScript, React, Node, Python,
                Flask, MongoDB, AWS (Elastic Beanstalk, IoT), Parse Server,
                Sass/SCSS, Bootstrap, HTML/CSS, Raspberry Pi, Agile (SCRUM),
                PWA, Git
              </p>
            }
          />
          <Card
            title="Founder, CEO, Lead Developer | Munti"
            subtitle="February 2019 - Present • South Bend, IN"
            logoLink="/"
            logo={`../../images/experience/munti.webp`}
            logoBackup={`../../images/experience/munti.png`}
            logoAlt={"Munti logo"}
            body={
              <ul className="tech">
                <li>
                  Secured $2.5k funding to develop full-stack web and mobile
                  apps for student startup recruitment
                </li>
                <li>
                  Led web, mobile and hardware development teams through
                  multiple concurrent projects
                </li>
                <li>
                  Built web, mobile apps and embedded systems for early-stage
                  startups and small businesses
                </li>
              </ul>
            }
          />
          <Card
            title="Lead Software Engineer | Tembo AI"
            subtitle="January 2019 - January 2020 • South Bend, IN"
            logoLink="https://tembo.ai"
            logo={`../../images/experience/tembo.webp`}
            logoBackup={`../../images/experience/tembo.png`}
            logoAlt={"Tembo logo"}
            body={
              <ul className="tech">
                <li>
                  Solely developed full stack SSR web app and messaging mobile
                  apps to be used in alpha testing
                </li>
                <li>
                  Solely developed indoor location triangulation mobile tracker
                  resulting in{" "}
                  <a
                    href="https://southbendelkhart.org/news/tembo-ai-receives-minority-owned-startup-award"
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
                <strong>Technologies</strong>: JavaScript, React, Next, Node,
                Express, ZEIT Now, Sass/SCSS, Bootstrap, HTML/CSS, Flutter
                (DART), Firebase, Python, Raspberry Pi, Kali Linux, PWA, Git
              </p>
            }
          />
          <Card
            title="Lead Software Engineer | Gäshawk"
            subtitle="January 2019 - January 2020 • South Bend, IN"
            logoLink="https://xn--gshawk-bua.com"
            logo={`../../images/experience/gashawk.webp`}
            logoBackup={`../../images/experience/gashawk.png`}
            logoAlt={"Gäshawk logo"}
            body={
              <ul className="tech">
                <li>
                  Solely developed touchscreen GUI + LiDAR collision detection
                  resulting in{" "}
                  <a
                    href="https://startupsouthbendelkhart.com"
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
                    href="https://seedfund.nsf.gov/about"
                    rel="noopener noreferrer"
                    target="_BLANK"
                  >
                    National Seed Fund (NSF) Small Business Innovation Research
                    (SBIR)
                  </a>{" "}
                  program entry
                </li>
                <li>
                  Currently solely developing static landing page leveraging
                  modern technologies to be used by startup
                </li>
              </ul>
            }
            end={
              <p>
                <strong>Technologies</strong>: C++, Arduino, GraphQL, Netlify,
                styled-components, Javascript, React, Gatsby, HTML/CSS, PWA, Git
              </p>
            }
          />
          <Card
            title="Lead Software Engineer | Foreager"
            subtitle="January - August 2019 • Townsend, MA"
            logoLink="https://foreager.com"
            logo={`../../images/experience/foreager.webp`}
            logoBackup={`../../images/experience/foreager.png`}
            logoAlt={"Foreager logo"}
            body={
              <ul className="tech">
                <li>
                  Solely developed peer-to-peer golf rental mobile apps
                  resulting in semifinals finish (top 30/175 teams) in{" "}
                  <a
                    href="https://mccloskey.ideacenter.nd.edu"
                    rel="noopener noreferrer"
                    target="_BLANK"
                  >
                    McCloskey New Venture Competition 2019
                  </a>
                </li>
                <li>
                  Assisted in developing front-end of prototype e-commerce
                  website
                </li>
              </ul>
            }
            end={
              <p>
                <strong>Technologies</strong>: Flutter (DART), Firebase, Heroku,
                JavaScript, jQuery, Sass/SCSS, Bootstrap, HTML/CSS
              </p>
            }
          />
          <Card
            title="Technology Track Head | YouthHack"
            subtitle="March 2017 - July 2018 • Quezon City, Philippines"
            logoLink="https://youthhack.net"
            logoBackup={`../../images/experience/yh.svg`}
            logoAlt={"YH logo"}
            body={
              <ul className="tech">
                <li>
                  Organized national hackathon, international summit attended by
                  5 countries and 10-week startup incubator program for 9
                  collegiate student-run startups
                </li>
                <li>
                  Created and taught 4-hr workshops for web dev for collegiate
                  students and professionals
                </li>
                <li>
                  Partnered with{" "}
                  <a
                    href="https://www.inquirer.net"
                    rel="noopener noreferrer"
                    target="_BLANK"
                  >
                    Philippine Daily Inquirer
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://www.rappler.com"
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
                <strong>Technologies</strong>: JavaScript, jQuery, Bootstrap,
                HTML/CSS
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
            logoLink="https://ideacenter.nd.edu"
            logo={`../../images/extracurriculars/ideacenter.webp`}
            logoBackup={`../../images/extracurriculars/ideacenter.png`}
            logoAlt={"IDEA Center logo"}
            body={
              <p>
                Standing for Innovation, De-Risking and Enterprise Acceleration,
                the{" "}
                <a
                  href="https://ideacenter.nd.edu"
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
                  Aided in recruiting students for summer internships, McCloskey
                  New Venture Competition, and academic programs
                </li>
                <li>
                  Connected College of Engineering students to affiliated local
                  startups and business plan teams
                </li>
                <li>
                  Researched on marketing and recruitment strategies for College
                  of Engineering students
                </li>
              </ul>
            }
          />
          <Card
            title="Teaching Assistant, PHIL 10111 Intro to Philosophy | University of Notre Dame"
            subtitle="August 2019 - Present"
            logoLink="https://godandgoodlife.nd.edu"
            logo={`../../images/education/nd.webp`}
            logoBackup={`../../images/education/nd.png`}
            logoAlt={"ND logo"}
            body={
              <p>
                The{" "}
                <a
                  href="https://godandgoodlife.nd.edu"
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
                  Oversaw 21 students through graded group discussions and major
                  requirements of 3-credit course (20-page essay and
                  university-wide campaign publication)
                </li>
                <li>
                  Aided in course restructuring, lesson planning, grading
                  assignments, and hosting office hours
                </li>
              </ul>
            }
          />
        </Section>
        {/* Projects */}
        <Section id="projects" title="Projects">
          <Project
            bgColor={1}
            title="DeLive Site"
            body="Startup company landing page for DeLive Aerial System, LLC to be connected to Node + Flask backend for full stack."
            end={
              <p>
                <strong>Technologies:</strong> React (CRA), SCSS, Bootstrap,
                Netlify, Google Maps, Mailchimp, EmailJS, Google Analytics, PWA
              </p>
            }
            buttons={
              <div className="buttons">
                <Button
                  link="https://delivedrones.com/"
                  title="View here"
                  links="https://github.com/delive-as/delive-website"
                  titles="View repo"
                />
              </div>
            }
          >
            <Browser
              image=""
              vid={`../../videos/deliveSite.webm`}
              vidBackup={`../../videos/deliveSite.mp4`}
              vidAlt={"DeLive site"}
            />
          </Project>
          <Project
            bgColor={2}
            title="Tembo Site"
            body="Startup company landing page for Tembo AI, LLC setup for heavier SSR full stack web app workload."
            end={
              <p>
                <strong>Technologies:</strong> React, Next, Node, Express, SCSS,
                Bootstrap, Now, Mapbox, Mailchimp, Formspree, Google Analytics,
                PWA
              </p>
            }
            buttons={
              <div className="buttons">
                <Button
                  link="https://www.tembo.ai/"
                  title="View here"
                  links="https://github.com/tembo-ai/tembo-site"
                  titles="View repo"
                />
              </div>
            }
          >
            <Browser
              image=""
              vid={`../../videos/temboSite.webm`}
              vidBackup={`../../videos/temboSite.mp4`}
              vidAlt={"Tembo site"}
            />
          </Project>
          <Project
            bgColor={3}
            title="Kyra Site"
            body="Portfolio website for fashion designer Kyra Buenviaje displaying resume, projects and collections."
            end={
              <p>
                <strong>Technologies:</strong> React, Gatsby, Tailwind, Netlify,
                Formspree, Google Analytics, PWA
              </p>
            }
            buttons={
              <div className="buttons">
                <Button
                  link="https://www.kyrabuenviaje.com/"
                  title="View here"
                  links="https://github.com/lockjio/kyra-site"
                  titles="View repo"
                />
              </div>
            }
          >
            <Browser
              image=""
              vid={`../../videos/kyraSite2nd.webm`}
              vidBackup={`../../videos/kyraSite2nd.mp4`}
              vidAlt={"Kyra site"}
            />
          </Project>
          <Project
            bgColor={1}
            title={
              <a href="https://www.jbuenviaje.com">
                <h2>./Recursion</h2>
              </a>
            }
            body="Personal website displaying resume and projects inspired by a simple, software project-friendly LinkedIn profile."
            end={
              <p>
                <strong>Technologies:</strong> React, Gatsby, Bootstrap,
                Netlify, Formspree, Google Analytics, PWA
              </p>
            }
            buttons={
              <Button
                link="https://github.com/lockjio/my-site"
                title="View repo"
              />
            }
          >
            <Browser
              image={`../../images/projects/jio.webp`}
              imageBackup={`../../images/projects/jio.png`}
              imageAlt={"My site"}
            />
          </Project>
          <Project
            bgColor={2}
            title="Tembo App"
            body="Emergency Messaging iOS/Android Apps with Authentication developed for Tembo AI, LLC. Will be integrated with user tracking feature and used for alpha testing in local high school."
            end={
              <p>
                <strong>Technologies:</strong> DART (Flutter), Provider,
                Firebase
              </p>
            }
          >
            <Mobile
              vid={`../../videos/tembo.webm`}
              vidAlt={"Tembo app webm"}
              vidBackup={`../../videos/tembo.mp4`}
              vidBackupAlt={"Tembo app mp4"}
            />
          </Project>
          <Project
            bgColor={3}
            title="Foreager App"
            body="Peer-to-Peer Golf Equipment Rental iOS/Android Apps developed for Foreager, LLC. Demo resulted in Semifinals finish (top 30/175 teams) in McCloskey New Venture Competition 2019."
            end={
              <p>
                <strong>Technologies:</strong> DART (Flutter), Firebase
              </p>
            }
          >
            <Mobile
              vid={`../../videos/foreager.webm`}
              vidAlt={"Foreager app webm"}
              vidBackup={`../../videos/foreager.mp4`}
              vidBackupAlt={"Foreager app mp4"}
            />
          </Project>
          <Project
            bgColor={1}
            title="Gäshawk Overwatch"
            body="Touchscreen GUI + LiDAR Overhead Collision Detection system developed for Gäshawk Inc. Demo resulted in Start-Up South Bend Elkhart (SUSBE) accelerator program invitation."
            end={
              <p>
                <strong>Technologies:</strong> C++, Arduino, Git
              </p>
            }
            buttons={
              <Button
                link="https://github.com/gashawk/overwatch"
                title="View repo"
              />
            }
          >
            <System
              image={`../../images/projects/overwatch.webp`}
              imageBackup={`../../images/projects/overwatch.png`}
              imageAlt={"Gäshawk embedded"}
            />
          </Project>
          <Project
            bgColor={2}
            title="Automated School Logger"
            body="RFID attendance and location logger with online school database for Research 2 & 3. Garnered 3rd Grand Award in 2017 Youth Math Science and Technology (YMSAT) Week."
            end={
              <p>
                <strong>Technologies:</strong> C++, Arduino, PHP, MySQL,
                CodeIgniter, Eagle, Fritzing
              </p>
            }
            buttons={
              <Button
                link={`../../files/researchLogger.pdf`}
                title="View research"
              />
            }
          >
            <System
              image={`../../images/projects/logger.webp`}
              imageBackup={`../../images/projects/logger.png`}
              imageAlt={"Logger research"}
            />
          </Project>
          <Project
            bgColor={3}
            title="Sustainable Energy Charger"
            body="Mobile phone solar panel and hand-crank charger for Research 1. Garnered 4th Grand Award in Engineering in 2017 Taiwan International Science Fair (TISF)."
            end={
              <p>
                <strong>Technologies:</strong> AutoCAD, Switch-Mode Converter,
                Eagle, Fritzing
              </p>
            }
            buttons={
              <Button
                link={`../../files/researchCharger.pdf`}
                title="View research"
              />
            }
          >
            <System
              image={`../../images/projects/charger.webp`}
              imageBackup={`../../images/projects/charger.png`}
              imageAlt={"Charger research"}
            />
          </Project>
          <Project
            bgColor={1}
            title="Cosmological Constant"
            body="Research done for Theoretical Physics department of University of the Philippines in summer 2017 internship. Garnered Honorable Mention Award."
            buttons={
              <Button
                link={`../../files/researchNeutron.pdf`}
                title="View research"
              />
            }
          >
            <System
              image={`../../images/projects/cosmo.webp`}
              imageBackup={`../../images/projects/cosmo.png`}
              imageAlt={"Cosmo research"}
            />
          </Project>
        </Section>
        <div className="space-mobile" />
        <Action />
      </Content>
    </Layout>
  )
}

export default IndexPage
