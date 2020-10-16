import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/Layout"
import Content from "../components/Content"
import Hero from "../components/Hero"
import Button from "../components/Button"
import Section from "../components/Section"
import Card from "../components/Card"
import Tech from "../components/Tech"
import Project from "../components/Project"
import Browser from "../components/Browser"
import Mobile from "../components/Mobile"
import System from "../components/System"
import Action from "../components/Action"

import "../styles/index.scss"
// import "../styles/dark-index.css"
import "../styles/responsive.scss"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query Home {
      nd: file(relativePath: { eq: "education/nd.png" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      pshs: file(relativePath: { eq: "education/pshs.png" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      disney: file(relativePath: { eq: "experience/disney.png" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      techstars: file(relativePath: { eq: "experience/techstars.png" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      ideacenter: file(
        relativePath: { eq: "extracurriculars/ideacenter.png" }
      ) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      cbs: file(relativePath: { eq: "experience/cbs.png" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      delive: file(relativePath: { eq: "experience/delive.png" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      flowaste: file(relativePath: { eq: "experience/flowaste.png" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      debtly: file(relativePath: { eq: "experience/debtly.png" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      gitta: file(relativePath: { eq: "experience/gitta.png" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      tembo: file(relativePath: { eq: "experience/tembo.png" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      gashawk: file(relativePath: { eq: "experience/gashawk.png" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      foreager: file(relativePath: { eq: "experience/foreager.png" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      muntiSm: file(relativePath: { eq: "experience/muntiSm.png" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      collectio: file(relativePath: { eq: "projects/collectio.png" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      munti: file(relativePath: { eq: "projects/munti.png" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      debtlySite: file(relativePath: { eq: "projects/debtly.png" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      jio: file(relativePath: { eq: "projects/jio.png" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      drone: file(relativePath: { eq: "projects/drone.png" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      overwatch: file(relativePath: { eq: "projects/overwatch.png" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      logger: file(relativePath: { eq: "projects/logger.png" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      charger: file(relativePath: { eq: "projects/charger.png" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      cosmo: file(relativePath: { eq: "projects/cosmo.png" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

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
            subtitle="2018 – 2022 | 3.25 GPA"
            logoLink="https://cse.nd.edu/undergraduates/computer-science"
            logo={`../../images/education/nd.webp`}
            logoBackup={data.nd.childImageSharp.fluid}
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
                <strong>Relevant Courses</strong>: Data Structures, Modern Web &
                App Development, Software Development Practices, Programming
                Paradigms, Systems Programming, Computer Architecture, Logic
                Design
              </p>
            }
          />
          <Card
            title="Philippine Science High School – Main Campus"
            subtitle="2012 – 2018 | 3.84 GPA"
            logoLink="http://pshs.edu.ph/curriculum/"
            logo={`../../images/education/pshs.webp`}
            logoBackup={data.pshs.childImageSharp.fluid}
            logoAlt={"PSHS logo"}
            body={
              <p>
                Graduated Magna Cum Laude (High Honors), with a class rank of
                28/221 and{" "}
                <a
                  href="http://sei.dost.gov.ph/index.php/programs-and-projects/scholarships/undergraduate-scholarships#s-amp-t-undergraduate-scholarships"
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
                <strong>Relevant Courses</strong>: Data Structures & Algorithms,
                Object-Oriented Programming, Client-Side Web Development,
                Embedded Systems & Program Design, STEM Research
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
            title="Content Delivery Software Engineer Intern | Disney Streaming Services"
            subtitle="Fall 2020 • New York, NY"
            logoLink="https://www.disneystreaming.com/"
            logo={`../../images/experience/disney.webp`}
            logoBackup={data.disney.childImageSharp.fluid}
            logoAlt={"Disney+ logo"}
            body={
              <ul className="tech">
                <li>
                  Will optimize content delivery and customer experience for
                  Disney+ and ESPN+ as part of the CDN team
                </li>
              </ul>
            }
            end={
              <p>
                <strong>Technologies</strong>: Go, JavaScript, Node, Python,
                InfluxDB, Docker, Bash, AWS (EC2, S3, IAM, CloudWatch,
                CloudFront), Akamai, Fastly, Grafana, Jira, Git
              </p>
            }
          />
          <Card
            title="Fullstack Software Engineer Intern | Techstars"
            subtitle="Summer 2020 • New York, NY"
            logoLink="https://techstars.com/"
            logo={`../../images/experience/techstars.webp`}
            logoBackup={data.techstars.childImageSharp.fluid}
            logoAlt={"Techstars logo"}
            body={
              <ul className="tech">
                <li>
                  Worked in portfolio company{" "}
                  <a
                    href="https://joincabinet.com/"
                    rel="noopener noreferrer"
                    target="_BLANK"
                  >
                    Cabinet
                  </a>{" "}
                  on 5 feature rollouts on web and mobile apps currently serving
                  2,000+ users thereby increasing user retention by 6.7%
                </li>
                <li>
                  Completed new tech stack compatibility apps (web and mobile)
                  in Agile Team for upcoming adoption
                </li>
              </ul>
            }
            end={
              <p>
                <strong>Technologies</strong>: TypeScript, JavaScript, React,
                Redux, Python, Django, PostgreSQL, Firebase, Material-UI, Ionic,
                Capacitor, Zeplin, HTML/CSS, Git
              </p>
            }
          />
          <Card
            title="Fullstack Software Engineer Intern | IDEA Center"
            subtitle="Spring 2020 • South Bend, IN"
            logoLink="https://ideacenter.nd.edu"
            logo={`../../images/extracurriculars/ideacenter.webp`}
            logoBackup={data.ideacenter.childImageSharp.fluid}
            logoAlt={"IDEA Center logo"}
            body={
              <ul className="tech">
                <li>
                  Architected e-Commerce web app and store templates through
                  Pair Programming currently used by startups
                </li>
                <li>
                  Programmed key metrics cards and dashboards in Snapboard
                  currently used in administrative startup monitoring
                </li>
                <li>
                  Wrote Design Documents and Codebase Guides/Documentation for
                  all work done in Agile Team
                </li>
              </ul>
            }
            end={
              <p>
                <strong>Technologies</strong>: JavaScript, React, Next, GraphQL,
                Apollo, MongoDB, Parse Platform, Node, Express, Shopify API,
                Sass/SCSS, HTML/CSS, Git
              </p>
            }
          />
          <Card
            title="Media Software Engineer Intern | CBS"
            subtitle="Summer 2019 • New York, NY"
            logoLink="https://cbs.com"
            logo={`../../images/experience/cbs.webp`}
            logoBackup={data.cbs.childImageSharp.fluid}
            logoAlt={"CBS logo"}
            body={
              <ul className="tech">
                <li>
                  Standardized end-to-end broadcast distribution configurations
                  (Codecs) for entire East Coast feed
                </li>
                <li>
                  Finished 27 international purchase requests using Database
                  Queries totaling $132,930 in profit
                </li>
                <li>
                  Aided in Cloud-based content compute, storage and monitoring
                  for day-to-day operations
                </li>
              </ul>
            }
            end={
              <p>
                <strong>Technologies</strong>: C++, XML, SQL, SQL Server, AWS
                (EC2, S3, Lambda, Glacier, CloudWatch), AutoCAD
              </p>
            }
          />
          <Card
            title="iOS Software Engineer | FloWaste"
            subtitle="August 2020 – Present • South Bend, IN"
            logoLink="https://flowaste.com/"
            logo={`../../images/experience/flowaste.webp`}
            logoBackup={data.flowaste.childImageSharp.fluid}
            logoAlt={"FloWaste logo"}
            body={
              <ul className="tech">
                <li>
                  Redesigned and will convert ML food scanner iOS app currently
                  in UIKit to SwiftUI in Agile Team
                </li>
              </ul>
            }
            end={
              <p>
                <strong>Technologies</strong>: Swift, UIKit, SwiftUI, Core ML,
                HealthKit, CocoaPods, Python, Flask, Firebase, Adobe XD, Zeplin,
                Framer, Git
              </p>
            }
          />
          <Card
            title="iOS Software Engineer | Debtly"
            subtitle="May 2020 – September 2020 • South Bend, IN"
            logoLink="https://debtly.app/"
            logo={`../../images/experience/debtly.webp`}
            logoBackup={data.debtly.childImageSharp.fluid}
            logoAlt={"Debtly logo"}
            body={
              <ul className="tech">
                <li>
                  Designed and built credit card consolidation iOS app with
                  NoSQL database resulting in $8k funding
                </li>
              </ul>
            }
            end={
              <p>
                <strong>Technologies</strong>: Swift, SwiftUI, Core Data,
                CocoaPods, Alamofire, Firebase, Plaid API, Sketch, Adobe XD,
                Zeplin, Webflow, TestFlight, Git
              </p>
            }
          />
          <Card
            title="Software Engineer – Mobile, Fullstack | Gitta"
            subtitle="April 2020 – September 2020 • South Bend, IN"
            logoLink="https://gittasitta.com/"
            logo={`../../images/experience/gitta.webp`}
            logoBackup={data.gitta.childImageSharp.fluid}
            logoAlt={"Gitta logo"}
            body={
              <ul className="tech">
                <li>
                  Developed babysitter hiring service mobile apps with NoSQL
                  User and Request Ticketing Database, RESTful API, SMS
                  autoresponder and static website in Agile Team
                </li>
                <li>
                  Fixed 17 bugs and improved user onboarding flow based on
                  TestFlight beta testing public feedback for upcoming release
                </li>
              </ul>
            }
            end={
              <p>
                <strong>Technologies</strong>: Dart, Flutter, JavaScript, Node,
                Express, Firebase, Twilio API, Twilio Studio, Figma, Adobe XD,
                Supernova Studio, Wiredash, TestFlight, Play Console, HTML/CSS,
                Git
              </p>
            }
          />
          <Card
            title="Chief Technology Officer | DeLive Drones"
            subtitle="October 2019 – August 2020 • South Bend, IN"
            logoLink="https://delivedrones.com"
            logo={`../../images/experience/delive.webp`}
            logoBackup={data.delive.childImageSharp.fluid}
            logoAlt={"DeLive logo"}
            body={
              <ul className="tech">
                <li>
                  Integrated dashboard web app and drone contact RESTful API in
                  Agile Team resulting in $10k funding
                </li>
                <li>
                  Exhibited in{" "}
                  <a
                    href="https://ces.tech"
                    rel="noopener noreferrer"
                    target="_BLANK"
                  >
                    Consumer Electronics Show (CES) 2020
                  </a>
                  , secured $25k total funding,{" "}
                  <a
                    href="https://ideacenter.nd.edu/news-events/news/this-summers-race-to-revenue-program-funds-five-student-run-startups"
                    rel="noopener noreferrer"
                    target="_BLANK"
                  >
                    Race to Revenue
                  </a>{" "}
                  accelerator invite, and pitch to Indianapolis-based $100M VC
                  fund
                </li>
              </ul>
            }
            end={
              <p>
                <strong>Technologies</strong>: JavaScript, React, Node, Express,
                Python, Raspberry Pi, AWS IoT, DroneKit SDK, Sass/SCSS,
                Bootstrap, HTML/CSS, PWA, Git
              </p>
            }
          />
          <Card
            title="Software Engineer – Mobile, Fullstack | Tembo AI"
            subtitle="January 2019 – January 2020 • South Bend, IN"
            logoLink="https://tembo.ai"
            logo={`../../images/experience/tembo.webp`}
            logoBackup={data.tembo.childImageSharp.fluid}
            logoAlt={"Tembo logo"}
            body={
              <ul className="tech">
                <li>
                  Made SSR web app and emergency group messaging mobile apps
                  with NoSQL User Database for upcoming alpha testing
                </li>
                <li>
                  Built WiFi indoor triangulation mobile location tracker
                  through Pair Programming resulting in{" "}
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
                <strong>Technologies</strong>: Dart, Flutter, JavaScript, React,
                Next, Node, Express, Python, Raspberry Pi, Vercel (ZEIT Now),
                Heroku, Firebase, Kali Linux, Mapbox API, Sass/SCSS, Bootstrap,
                HTML/CSS, PWA, Git
              </p>
            }
          />
          <Card
            title="Software Engineer – Frontend, Embedded | Gäshawk"
            subtitle="January 2019 – January 2020 • South Bend, IN"
            logoLink="https://gashawkrv.com/"
            logo={`../../images/experience/gashawk.webp`}
            logoBackup={data.gashawk.childImageSharp.fluid}
            logoAlt={"Gäshawk logo"}
            body={
              <ul className="tech">
                <li>
                  Created Server-Side Rendering (SSR) Progressive Web App (PWA)
                  currently used by startup
                </li>
                <li>
                  Constructed LiDAR truck overhead collision detection system
                  with Touchscreen Graphical User Interface (GUI) resulting in{" "}
                  <a
                    href="https://startupsouthbendelkhart.com"
                    rel="noopener noreferrer"
                    target="_BLANK"
                  >
                    Start-Up South Bend Elkhart (SUSBE)
                  </a>{" "}
                  accelerator invite
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
              </ul>
            }
            end={
              <p>
                <strong>Technologies</strong>: C++, Arduino, JavaScript, React,
                Gatsby, GraphQL, Netlify, Google Maps API, Sass/SCSS, Bootstrap,
                HTML/CSS, PWA, Git
              </p>
            }
          />
          <Card
            title="Software Engineer – Mobile, Frontend | Foreager"
            subtitle="January – August 2019 • Townsend, MA"
            logoLink="/"
            logo={`../../images/experience/foreager.webp`}
            logoBackup={data.foreager.childImageSharp.fluid}
            logoAlt={"Foreager logo"}
            body={
              <ul className="tech">
                <li>
                  Coded peer-to-peer golf equipment rental mobile apps resulting
                  in semifinals finish (top 30/175 teams) in{" "}
                  <a
                    href="https://mccloskey.ideacenter.nd.edu"
                    rel="noopener noreferrer"
                    target="_BLANK"
                  >
                    McCloskey New Venture Competition 2019
                  </a>
                </li>
                <li>
                  Contributed to developing peer-to-peer golf equipment rental
                  web store through Pair Programming used by 150+ users
                </li>
              </ul>
            }
            end={
              <p>
                <strong>Technologies</strong>: Dart, Flutter, Firebase, Heroku,
                JavaScript, jQuery, Sharetribe, Mailchimp API, Sass/SCSS,
                Bootstrap, HTML/CSS, Git
              </p>
            }
          />
          <Card
            title="Founder, Lead Developer & Designer, Project Manager | Munti"
            subtitle="February 2019 – Present • South Bend, IN"
            logoLink="https://munti.io/"
            logo={`../../images/experience/muntiSm.webp`}
            logoBackup={data.muntiSm.childImageSharp.fluid}
            logoAlt={"Munti logo"}
            body={
              <ul className="tech">
                <li>
                  Led web, mobile and hardware development teams of Software
                  Freelance Company through multiple concurrent projects
                </li>
                <li>
                  Produced web, mobile apps and embedded systems for early-stage
                  startups and small businesses
                </li>
                <li>
                  Secured $2.5k funding to develop web and mobile apps for
                  student startup recruitment
                </li>
              </ul>
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
            subtitle="August 2019 – Present"
            logoLink="https://ideacenter.nd.edu"
            logo={`../../images/extracurriculars/ideacenter.webp`}
            logoBackup={data.ideacenter.childImageSharp.fluid}
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
                  Spearheaded improvements in recruiting students for summer
                  internships, McCloskey New Venture Competition, and academic
                  programs
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
            subtitle="August 2019 – Present"
            logoLink="https://godandgoodlife.nd.edu"
            logo={`../../images/education/nd.webp`}
            logoBackup={data.nd.childImageSharp.fluid}
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
                  Helped in course restructuring, lesson planning, grading
                  assignments, and hosting office hours
                </li>
              </ul>
            }
          />
        </Section>
        {/* Projects */}
        <Section id="projects" title="Projects">
          <Project
            title="Collectio Site"
            body="e-Commerce (PWA) multi-page application (MPA) for Collectio Comics for Modern Web and App Development I."
            end={
              <p>
                <strong>Technologies:</strong> JavaScript, React (CRA), Redux
                (Saga, Thunk), Capacitor, Jest, Enzyme, styled-components, Sass,
                Firebase, Netlify, Stripe, HTML/CSS, PWA, Git
              </p>
            }
            buttons={
              <div className="buttons">
                <Button
                  link="https://comicollect.com/"
                  title="View here"
                  links="https://github.com/lockjio/collectio-site"
                  titles="View repo"
                />
              </div>
            }
          >
            <Browser
              image={`../../images/projects/collectio.webp`}
              imageBackup={data.collectio.childImageSharp.fluid}
              imageAlt={"Collectio site"}
            />
          </Project>
          <Project
            title="Munti Site"
            body="Design and development freelance company single-page application (SPA) landing page (PWA) for Munti LLC."
            end={
              <p>
                <strong>Technologies:</strong> JavaScript, React (CRA), Jest,
                Sass, Bootstrap, Netlify, Basin, Google Analytics, HTML/CSS,
                PWA, Git
              </p>
            }
            buttons={
              <div className="buttons">
                <Button
                  link="https://munti.io/"
                  title="View here"
                  links="https://github.com/munti-llc/munti-site"
                  titles="View repo"
                />
              </div>
            }
          >
            <Browser
              image={`../../images/projects/munti.webp`}
              imageBackup={data.munti.childImageSharp.fluid}
              imageAlt={"Munti site"}
            />
          </Project>
          <Project
            title="Gäshawk Site"
            body="Startup company single-page application (SPA) landing page (PWA) for Gäshawk, Inc."
            end={
              <p>
                <strong>Technologies:</strong> JavaScript, React, Gatsby,
                GraphQL, Sass, Bootstrap, Netlify, Google Maps, Formcarry,
                Google Analytics, HTML/CSS, PWA, Git
              </p>
            }
            buttons={
              <div className="buttons">
                <Button
                  link="https://gashawkrv.com/"
                  title="View here"
                  links="https://github.com/gashawk/gashawk-site"
                  titles="View repo"
                />
              </div>
            }
          >
            <Browser
              image=""
              vid={`../../videos/gashawkSite.webm`}
              vidBackup={`../../videos/gashawkSite.mp4`}
              vidAlt={"Gäshawk site"}
            />
          </Project>
          <Project
            title="DeLive Site"
            body="Startup company single-page application (SPA) landing page (PWA) for DeLive Aerial System, LLC."
            end={
              <p>
                <strong>Technologies:</strong> JavaScript, React (CRA), Sass,
                Bootstrap, Netlify, Google Maps, Mailchimp, EmailJS, Google
                Analytics, HTML/CSS, PWA, Git
              </p>
            }
            buttons={
              <div className="buttons">
                <Button
                  link="https://delivedrones.com/"
                  title="View here"
                  links="https://github.com/delive-as/delive-site"
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
            title="Tembo Site"
            body="Startup company server-side rendering (SSR) single-page application (SPA) landing page (PWA) for Tembo AI, LLC."
            end={
              <p>
                <strong>Technologies:</strong> JavaScript, React, Next, Node,
                Express, Sass, Bootstrap, Now, Mapbox, Mailchimp, Formspree,
                Google Analytics, HTML/CSS, PWA, Git
              </p>
            }
            buttons={
              <div className="buttons">
                <Button
                  link="https://tembo.ai/"
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
            title="Kyra Site"
            body="Portfolio and collections multi-page application (MPA) website (PWA) for fashion designer Kyra Buenviaje."
            end={
              <p>
                <strong>Technologies:</strong> JavaScript, React, Gatsby,
                GraphQL, styled-components, Tailwind, Netlify, Formspree, Google
                Analytics, HTML/CSS, PWA, Git
              </p>
            }
            buttons={
              <div className="buttons">
                <Button
                  link="https://kyrabuenviaje.com/"
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
            title="Gitta Site"
            body="Startup company single-page application (SPA) landing page (PWA) for Gitta LLC."
            end={
              <p>
                <strong>Technologies:</strong> Squarespace, Adobe XD, Zeplin,
                Google Analytics, Bootstrap, HTML/CSS, PWA, Git
              </p>
            }
            buttons={
              <div className="buttons">
                <Button link="https://gittasitta.com/" title="View here" />
              </div>
            }
          >
            <Browser
              image=""
              vid={`../../videos/gittaSite.webm`}
              vidBackup={`../../videos/gittaSite.mp4`}
              vidAlt={"Gitta site"}
            />
          </Project>
          {/* <Project
			title="Debtly Site"
			body="Startup company multi-page application (MPA) landing page (PWA) for Debtly Inc."
			end={
			  <p>
				<strong>Technologies:</strong> Webflow, Sketch, Adobe XD,
				Zeplin, Google Analytics, HTML/CSS, PWA, Git
			  </p>
			}
			buttons={<Button link="https://debtly.app/" title="View here" />}
		  >
			<Browser
			  image={`../../images/projects/debtly.webp`}
			  imageBackup={data.debtlySite.childImageSharp.fluid}
			  imageAlt={"Debtly site"}
			/>
		  </Project> */}
          <Project
            /* title={
			  <a href="https://jbuenviaje.com">
				<h2>./Recursion</h2>
			  </a>
			} */
            title="My Site"
            body="Personal single-page application (SPA) website (PWA) displaying resume and projects."
            end={
              <p>
                <strong>Technologies:</strong> TypeScript, JavaScript, React,
                Gatsby, GraphQL, Sass, Bootstrap, Netlify, Getform, Google
                Analytics, HTML/CSS, PWA, Git
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
              imageBackup={data.jio.childImageSharp.fluid}
              imageAlt={"My site"}
            />
          </Project>
          <Project
            title="Debtly App"
            body="Credit Card Consolidation iOS App with Authentication, Photo Upload, Plaid Link Account and FaceID Integration developed for Debtly Inc. Currently beta testing through TestFlight for release."
            end={
              <p>
                <strong>Technologies:</strong> Swift, SwiftUI, Core Data,
                CocoaPods, Alamofire, Firebase, Plaid API, Sketch, Adobe XD,
                Zeplin, TestFlight, Git
              </p>
            }
          >
            <Mobile
              vid={`../../videos/debtly.webm`}
              vidAlt={"Debtly app webm"}
              vidBackup={`../../videos/debtly.mp4`}
              vidBackupAlt={"Debtly app mp4"}
            />
          </Project>
          <Project
            title="Collectio App"
            body="Comic Book e-Commerce iOS/Android Hybrid App with Authentication, Cart Functionality, Online Inventory Retrieval and Stripe Payment Processing for Collectio Comics for Modern Web and App Development I."
            end={
              <p>
                <strong>Technologies:</strong> Capacitor, JavaScript, React
                (CRA), Redux (Saga, Thunk), Jest, Enzyme, styled-components,
                Sass, Firebase, Stripe, HTML/CSS, PWA, Git
              </p>
            }
            buttons={
              <Button
                link="https://github.com/lockjio/collectio-site"
                title="View repo"
              />
            }
          >
            <Mobile
              vid={`../../videos/collectio.webm`}
              vidAlt={"Collectio app webm"}
              vidBackup={`../../videos/collectio.mp4`}
              vidBackupAlt={"Collectio app mp4"}
            />
          </Project>
          <Project
            title="GittaSitta App"
            body="Babysitter Hiring Service iOS/Android Hybrid App with Authentication, Twilio SMS Autoresponder, Contact and Calendar Integration developed for Gitta LLC. Currently beta testing through TestFlight/Play Console for release."
            end={
              <p>
                <strong>Technologies:</strong> Dart, Flutter, Provider,
                JavaScript, Firebase, Twilio, Adobe XD, Supernova Studio,
                Wiredash, TestFlight, Play Console, Git
              </p>
            }
          >
            <Mobile
              vid={`../../videos/gitta.webm`}
              vidAlt={"GittaSitta app webm"}
              vidBackup={`../../videos/gitta.mp4`}
              vidBackupAlt={"GittaSitta app mp4"}
            />
          </Project>
          <Project
            title="Tembo App"
            body="Emergency Messaging iOS/Android Hybrid App with Authentication developed for Tembo AI, LLC. Will be integrated with user tracking feature and used for alpha testing in local high school."
            end={
              <p>
                <strong>Technologies:</strong> Dart, Flutter, Provider,
                Firebase, Git
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
            title="Foreager App"
            body="Peer-to-Peer Golf Equipment Rental iOS/Android Hybrid App developed for Foreager, LLC. Demo resulted in Semifinals finish (top 30/175 teams) in McCloskey New Venture Competition 2019."
            end={
              <p>
                <strong>Technologies:</strong> Dart, Flutter, Firebase, Git
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
            title="DeLive Drone"
            body="Semi-Autonomous Drone with Automatic Ticketing and Communication System developed for DeLive Aerial System, LLC. Demo resulted in 15k seed funding from Race to Revenue (R2R) accelerator program."
            end={
              <p>
                <strong>Technologies:</strong> Python, Raspberry Pi, Django,
                Node, Express, AWS IoT, DroneKit SDK, Git
              </p>
            }
          >
            <System
              image={`../../images/projects/drone.webp`}
              imageBackup={data.drone.childImageSharp.fluid}
              imageAlt={"DeLive embedded"}
            />
          </Project>
          <Project
            title="Gäshawk Overwatch"
            body="LiDAR Overhead Collision Detection System with Touchscreen Graphical User Interface (GUI) developed for Gäshawk, Inc. Demo resulted in Start-Up South Bend Elkhart (SUSBE) accelerator invite."
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
              imageBackup={data.overwatch.childImageSharp.fluid}
              imageAlt={"Gäshawk embedded"}
            />
          </Project>
          <Project
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
              imageBackup={data.logger.childImageSharp.fluid}
              imageAlt={"Logger research"}
            />
          </Project>
          <Project
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
              imageBackup={data.charger.childImageSharp.fluid}
              imageAlt={"Charger research"}
            />
          </Project>
          <Project
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
              imageBackup={data.cosmo.childImageSharp.fluid}
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
