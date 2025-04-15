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

import "../styles/dark-index.scss"
import "../styles/dark-toggle.scss"
import "../styles/index.scss"
import "../styles/responsive.scss"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query Home {
      # Education
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
      # Experience
      amazon: file(relativePath: { eq: "experience/amazon.png" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      apple: file(relativePath: { eq: "experience/apple.png" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      cabinet: file(relativePath: { eq: "experience/cabinet.png" }) {
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
      dss: file(relativePath: { eq: "experience/dss.png" }) {
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
      flovision: file(relativePath: { eq: "experience/flovision.png" }) {
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
      gashawk: file(relativePath: { eq: "experience/gashawk.png" }) {
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
      debtly: file(relativePath: { eq: "experience/debtly.png" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      hbo: file(relativePath: { eq: "experience/hbo.png" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      hbomax: file(relativePath: { eq: "experience/hbomax.png" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      ideacenter: file(relativePath: { eq: "experience/ideacenter.png" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      munti: file(relativePath: { eq: "experience/munti.png" }) {
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
      tembo: file(relativePath: { eq: "experience/tembo.png" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      twitch: file(relativePath: { eq: "experience/twitch.png" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      urma: file(relativePath: { eq: "experience/urma.png" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      urmaong: file(relativePath: { eq: "experience/urmaong.png" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      viacomcbs: file(relativePath: { eq: "experience/viacomcbs.png" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      waltdisney: file(relativePath: { eq: "experience/waltdisney.png" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      warnermedia: file(relativePath: { eq: "experience/warnermedia.png" }) {
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
      collectio: file(relativePath: { eq: "projects/collectio.png" }) {
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
      drone: file(relativePath: { eq: "projects/drone.png" }) {
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
      sergio: file(relativePath: { eq: "projects/sergio.png" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      kyra: file(relativePath: { eq: "projects/kyra.png" }) {
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
      maet: file(relativePath: { eq: "experience/maet.png" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      maetSm: file(relativePath: { eq: "projects/maet.png" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      muntiSm: file(relativePath: { eq: "projects/munti.png" }) {
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
      urmaongSm: file(relativePath: { eq: "projects/urmaong.png" }) {
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
            subtitle="August 2018 – May 2022 | 3.39 GPA"
            logoLink="https://cse.nd.edu/undergraduate/computer-science-curriculum/"
            logo={`../../images/education/nd.webp`}
            logoBackup={data.nd.childImageSharp.fluid}
            logoAlt={"ND logo"}
            body={<p>Graduated with a BS in Computer Science.</p>}
            end={
              <p>
                <strong>Relevant Courses</strong>: Data Structures,
                Design/Analysis of Algorithms, Modern Web & App Development,
                Software Development Practices, Computer Graphics, Operating
                Systems, Introduction to Design Thinking, Fundamentals Of
                Design, Theory of Computing, Probability & Statistics,
                Undergraduate Research
              </p>
            }
          />
          <Card
            title="Philippine Science High School – Main Campus"
            subtitle="June 2012 – May 2018 | 3.84 GPA"
            logoLink="http://pshs.edu.ph/curriculum/"
            logo={`../../images/education/pshs.webp`}
            logoBackup={data.pshs.childImageSharp.fluid}
            logoAlt={"PSHS logo"}
            body={
              <p>
                Graduated Magna Cum Laude (High Honors), with a class rank of
                28/221 and{" "}
                <a
                  href="https://region6.dost.gov.ph/dost-sei-undergraduate-scholarship-merit-scholarship/"
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
            <p className="btn_perspective">
              <a
                href={`../../files/resumeLockhart.pdf`}
                rel="noopener noreferrer"
                target="_BLANK"
              >
                <button className="btn btn-info btn-3d btn-3db">
                  View my resume →
                </button>
              </a>
            </p>
          }
        >
          <Card
            title="Software Engineer – ICT3 | Apple"
            subtitle="July 2022 – November 2024 • New York, NY"
            logoLink="https://apple.com/"
            logo={`../../images/experience/apple.webp`}
            logoBackup={data.apple.childImageSharp.fluid}
            logoAlt={"Apple logo"}
            body={
              <p>
                <ul className="tech">
                  <li>
                    Redesigned{" "}
                    <a
                      href="https://shazam.com"
                      rel="noopener noreferrer"
                      target="_BLANK"
                    >
                      Shazam
                    </a>{" "}
                    home page and made reusable server-side rendered UI web
                    components
                  </li>
                  <li>
                    Updated and converted other Shazam web pages to React from
                    previous framework
                  </li>
                  <li>
                    Designed and developed reusable components and UI views for
                    internal native iOS UI framework
                  </li>
                </ul>
              </p>
            }
            end={
              <p>
                <strong>Technologies</strong>: Swift, SwiftUI, MusicKit,
                TypeScript, JS, React, Next, Context, Storybook, Handlebars,
                JIRA
              </p>
            }
          />
          <Card
            title="Founding Mobile Engineer, UI/UX Designer | Maet"
            subtitle="January 2022 – June 2022 • South Bend, IN"
            logoLink="https://maet.io/"
            logo={`../../images/experience/debtly.webp`}
            logoBackup={data.maet.childImageSharp.fluid}
            logoAlt={"Maet logo"}
            body={
              <ul className="tech">
                <li>
                  Designed and built a gamified community sports team
                  marketplace hybrid mobile app demo for controlled TestFlight
                  alpha testing in Indiana college
                </li>
              </ul>
            }
            end={
              <p>
                <strong>Technologies</strong>: Expo, React Native, React,
                TypeScript, Storybook, Redux (Thunk), React-Hook-Form, Yup,
                Firebase, Figma, Zeplin, TestFlight, Git
              </p>
            }
          />
          <Card
            title="Founder, Project Manager, Lead Developer & Designer | Munti"
            subtitle="September 2018 – May 2022 • South Bend, IN"
            logoLink="https://munti.netlify.app/"
            logo={`../../images/experience/munti.webp`}
            logoBackup={data.munti.childImageSharp.fluid}
            logoAlt={"Munti logo"}
            body={
              <p>
                <ul className="tech">
                  <li>
                    Led development and design teams of Software Freelance
                    Company through multiple concurrent projects
                  </li>
                  <li>
                    Produced web, mobile apps and embedded systems for
                    early-stage startups and small businesses
                  </li>
                </ul>
              </p>
            }
          />
          <Card
            title="Full Stack Software Engineer Intern | HBO"
            subtitle="September 2021 – December 2021 • Seattle, WA"
            logoLink="https://hbo.com/"
            logo={`../../images/experience/hbo.webp`}
            logoBackup={data.hbo.childImageSharp.fluid}
            logoAlt={"HBO logo"}
            body={
              <p>
                <ul className="tech">
                  <li>
                    Investigated, proposed, and implemented request performance
                    metrics capturing for client apps, then tested and deployed
                    to an internal telemetry library as part of Caps Shared
                    Components team
                  </li>
                  <li>
                    Created a dashboard to demo the feature and to visualize key
                    metrics and data relationships
                  </li>
                </ul>
              </p>
            }
            end={
              <p>
                <strong>Technologies</strong>: Rush, TypeScript, JavaScript,
                React, Redux, Azure Pipelines, Bootstrap, Postman, Jest, JIRA,
                Git
              </p>
            }
          />
          <Card
            title="Full Stack Software Engineer Intern | Twitch"
            subtitle="May 2021 – August 2021 • San Francisco, CA"
            logoLink="https://twitch.tv/"
            logo={`../../images/experience/twitch.webp`}
            logoBackup={data.twitch.childImageSharp.fluid}
            logoAlt={"Twitch logo"}
            body={
              <p>
                <ul className="tech">
                  <li>
                    Scoped out, developed, and tested feature to create and send
                    marketing in localized languages for internal campaign
                    management system updating microservices as part of
                    Notifications team
                  </li>
                  <li>
                    Finished UI improvement tickets for the internal marketing
                    campaign management system
                  </li>
                </ul>
              </p>
            }
            end={
              <p>
                <strong>Technologies</strong>: Go, TypeScript, JavaScript,
                React, AWS (S3, ECS, DynamoDB), Jest, Enzyme, Jenkins, JIRA, Git
              </p>
            }
          />
          <Card
            title="Founding Shopify Web Developer, Interaction Designer | URMA ONG"
            subtitle="November 2020 – August 2021 • New York, NY"
            logo={`../../images/experience/urma.webp`}
            logoBackup={data.urma.childImageSharp.fluid}
            logoAlt={"URMA ONG logo"}
            body={
              <p>
                <ul className="tech">
                  <li>
                    Redesigned, developed, and currently maintaining e-commerce
                    store, inventory, and shipping
                  </li>
                  <li>
                    Will scale store conversion rate and reach by proposing,
                    split-testing, and optimizing new online store features and
                    designs
                  </li>
                </ul>
              </p>
            }
            end={
              <p>
                <strong>Technologies</strong>: JavaScript, jQuery, Liquid, PHP,
                SASS/SCSS, Bootstrap, HTML/CSS, Figma, Adobe Illustrator, Adobe
                Photoshop, Shopify, JIRA, Git
              </p>
            }
          />
          <Card
            title="Lead Web Engineer, UI/UX Designer | FloVision Solutions"
            subtitle="February 2021 – May 2021 • Chicago, IL"
            logoLink="https://flovisionsolutions.com/"
            logo={`../../images/experience/flovision.webp`}
            logoBackup={data.flovision.childImageSharp.fluid}
            logoAlt={"FloVision logo"}
            body={
              <p>
                <ul className="tech">
                  <li>
                    Built and designed food waste and admin management
                    dashboards currently used in 3 live paid pilots in 100+
                    locations helping visualize actionable ML insights and
                    secure a $1.1M pre-seed round
                  </li>
                  <li>
                    Created Design Documents and Codebase Guides/Documentation
                    for all work done in Agile Team
                  </li>
                </ul>
              </p>
            }
            end={
              <p>
                <strong>Technologies</strong>: JavaScript, React, Redux, Node,
                Express, GraphQL, Apollo, GCP (Run, BigQuery), Firebase, LESS,
                AntD, XD, Framer, JIRA, HTML/CSS, Git
              </p>
            }
          />
          <Card
            title="Full Stack Software Engineer Intern | Disney"
            subtitle="September 2020 – January 2021 • New York, NY"
            logoLink="https://disney.com/"
            logo={`../../images/experience/disney.webp`}
            logoBackup={data.disney.childImageSharp.fluid}
            logoAlt={"Disney logo"}
            body={
              <p>
                <ul className="tech">
                  <li>
                    Researched, designed, and proposed regional data dashboards
                    automated monthly, then built and shipped them to production
                    receiving positive reception as part of Content Delivery &
                    Origin team
                  </li>
                  <li>
                    Added features and LATAM region to partner CDNs real-time
                    performance dashboards for launch
                  </li>
                </ul>
              </p>
            }
            end={
              <p>
                <strong>Technologies</strong>: Python, SQL, InfluxDB, Bash,
                JavaScript, Node, Express, AWS (EC2, S3, Cloudfront), Grafana,
                Postman, Fastly, Conviva API, JIRA, Git
              </p>
            }
          />
          <Card
            title="Lead Mobile Engineer, UI/UX Designer | GittaSitta"
            subtitle="April 2020 – September 2020 • South Bend, IN"
            logo={`../../images/experience/gitta.webp`}
            logoBackup={data.gitta.childImageSharp.fluid}
            logoAlt={"Gitta logo"}
            body={
              <p>
                <ul className="tech">
                  <li>
                    Developed babysitter hiring service mobile apps with NoSQL
                    User and Request Ticketing Database, RESTful API, and SMS
                    autoresponder yielding $20k funding
                  </li>
                  <li>
                    Fixed 17 bugs and improved user onboarding flow based on
                    TestFlight public beta testing feedback in Agile Team for
                    upcoming release
                  </li>
                </ul>
              </p>
            }
            end={
              <p>
                <strong>Technologies</strong>: Dart, Flutter, Firebase,
                TestFlight, JavaScript, Node, Express, Heroku, Figma, Sketch,
                Supernova, Wiredash, Twilio API, HTML/CSS, Git
              </p>
            }
          />
          <Card
            title="Founding iOS Engineer, UI/UX Designer | Debtly"
            subtitle="May 2020 – September 2020 • South Bend, IN"
            logo={`../../images/experience/debtly.webp`}
            logoBackup={data.debtly.childImageSharp.fluid}
            logoAlt={"Debtly logo"}
            body={
              <ul className="tech">
                <li>
                  Designed and built credit card consolidation iOS app demo
                  yielding $8k funding
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
            title="UI/UX Engineer Intern | Cabinet"
            subtitle="June 2020 – August 2020 • New York, NY"
            logoLink="https://joincabinet.com/"
            logo={`../../images/experience/cabinet.webp`}
            logoBackup={data.cabinet.childImageSharp.fluid}
            logoAlt={"Cabinet logo"}
            body={
              <p>
                <ul className="tech">
                  <li>
                    Worked on 5 feature rollouts on web and mobile apps
                    currently serving 2,000+ users thereby increasing user
                    retention by 6.7%
                  </li>
                  <li>
                    Completed new tech stack compatibility apps (web and mobile)
                    in Agile Team for upcoming adoption
                  </li>
                </ul>
              </p>
            }
            end={
              <p>
                <strong>Technologies</strong>: Django, PostgreSQL, Capacitor,
                TypeScript, JavaScript, React, Redux, Python, Firebase,
                Material-UI, Jest, Enzyme, Zeplin, HTML/CSS, Git
              </p>
            }
          />
          <Card
            title="Chief Technology Officer, Lead Designer | DeLive Drones"
            subtitle="October 2019 – August 2020 • South Bend, IN"
            logoLink="https://delivedrones.netlify.app"
            logo={`../../images/experience/delive.webp`}
            logoBackup={data.delive.childImageSharp.fluid}
            logoAlt={"DeLive logo"}
            body={
              <p>
                <ul className="tech">
                  <li>
                    Integrated dashboard web app and drone contact RESTful API
                    in Agile Team yielding $10k funding
                  </li>
                  <li>
                    Exhibited at{" "}
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
              </p>
            }
            end={
              <p>
                <strong>Technologies</strong>: JavaScript, React, Redux, Python,
                Flask, AWS (S3, RDS, IoT), Raspberry Pi, DroneKit SDK,
                SASS/SCSS, Bootstrap, HTML/CSS, PWA, Git
              </p>
            }
          />
          <Card
            title="Web Engineer | IDEA Center"
            subtitle="January 2020 – May 2020 • South Bend, IN"
            logoLink="https://ideacenter.nd.edu"
            logo={`../../images/extracurriculars/ideacenter.webp`}
            logoBackup={data.ideacenter.childImageSharp.fluid}
            logoAlt={"IDEA Center logo"}
            body={
              <p>
                <ul className="tech">
                  <li>
                    Architected e-Commerce web app and store templates through
                    Pair Programming currently used by startups
                  </li>
                  <li>
                    Programmed key metrics cards and dashboards in Snapboard
                    presently used in administrative startup monitoring
                  </li>
                </ul>
              </p>
            }
            end={
              <p>
                <strong>Technologies</strong>: Next, Gatsby, Flask, MongoDB,
                GraphQL, Apollo, JavaScript, React, Python, Netlify, Vercel,
                Shopify API, SASS/SCSS, HTML/CSS, Git
              </p>
            }
          />
          <Card
            title="Founding Full Stack Engineer, Web Designer | Tembo AI"
            subtitle="January 2019 – January 2020 • South Bend, IN"
            logoLink="https://tembos.vercel.app/"
            logo={`../../images/experience/tembo.webp`}
            logoBackup={data.tembo.childImageSharp.fluid}
            logoAlt={"Tembo logo"}
            body={
              <p>
                <ul className="tech">
                  <li>
                    Made SSR web app and emergency group messaging mobile apps
                    with NoSQL User Database for upcoming alpha testing
                  </li>
                  <li>
                    Built WiFi indoor triangulation mobile location tracker
                    through Pair Programming yielding{" "}
                    <a
                      href="https://southbendelkhart.org/news/tembo-ai-receives-minority-owned-startup-award"
                      rel="noopener noreferrer"
                      target="_BLANK"
                    >
                      $11.5k funding
                    </a>
                  </li>
                </ul>
              </p>
            }
            end={
              <p>
                <strong>Technologies</strong>: Dart, Flutter, JavaScript, React,
                Next, Node, Express, Python, Raspberry Pi, Vercel (ZEIT Now),
                Heroku, Firebase, Kali Linux, Mapbox API, SASS/SCSS, Bootstrap,
                HTML/CSS, PWA, Git
              </p>
            }
          />
          <Card
            title="Founding Software Engineer, Web Designer | Gäshawk"
            subtitle="January 2019 – November 2019 • South Bend, IN"
            logoLink="https://gashawkrv.netlify.app/"
            logo={`../../images/experience/gashawk.webp`}
            logoBackup={data.gashawk.childImageSharp.fluid}
            logoAlt={"Gäshawk logo"}
            body={
              <p>
                <ul className="tech">
                  <li>
                    Created Server-Side Rendering (SSR) Progressive Web App
                    (PWA) currently used by startup
                  </li>
                  <li>
                    Constructed LiDAR truck overhead collision detection system
                    with Touchscreen Graphical User Interface (GUI) yielding{" "}
                    <a
                      href="https://startupsouthbendelkhart.com"
                      rel="noopener noreferrer"
                      target="_BLANK"
                    >
                      Start-Up South Bend Elkhart (SUSBE)
                    </a>{" "}
                    accelerator invite
                  </li>
                </ul>
              </p>
            }
            end={
              <p>
                <strong>Technologies</strong>: C++, Arduino, JavaScript, React,
                Gatsby, GraphQL, Netlify, Google Maps API, SASS/SCSS, Bootstrap,
                HTML/CSS, PWA, Git
              </p>
            }
          />
          <Card
            title="Media Software Engineer Intern | CBS"
            subtitle="June 2019 – August 2019 • New York, NY"
            logoLink="https://cbs.com/"
            logo={`../../images/experience/cbs.webp`}
            logoBackup={data.cbs.childImageSharp.fluid}
            logoAlt={"CBS logo"}
            body={
              <p>
                <ul className="tech">
                  <li>
                    Standardized end-to-end broadcast distribution
                    configurations (Codecs) for entire East Coast feed
                  </li>
                  <li>
                    Finished 27 international purchase requests using Database
                    Queries totaling $132,930 in profit
                  </li>
                </ul>
              </p>
            }
            end={
              <p>
                <strong>Technologies</strong>: C++, XML, SQL, Microsoft SQL
                Server, AWS (EC2, S3, Lambda, Glacier, CloudWatch), AutoCAD
              </p>
            }
          />
          <Card
            title="Founding Software Engineer | Foreager"
            subtitle="October 2018 – August 2019 • South Bend, IN"
            logo={`../../images/experience/foreager.png`}
            logoBackup={data.foreager.childImageSharp.fluid}
            logoAlt={"Foreager logo"}
            body={
              <p>
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
              </p>
            }
            end={
              <p>
                <strong>Technologies</strong>: DART, Flutter (Provider),
                Firebase, HTML, CSS, jQuery
              </p>
            }
          />
        </Section>
        {/* Technologies */}
        <Section
          id="technologies"
          title="Technologies"
          button={
            <p className="btn_perspective">
              <Link to="#projects" className="btn btn-info btn-3d btn-3db">
                View my projects →
              </Link>
            </p>
          }
        >
          <Tech />
        </Section>
        {/* Extracurriculars */}
        <Section id="extracurriculars" title="Extracurriculars">
          <Card
            title="Undergraduate Research, Dr. Shreya Kumar | University of Notre Dame"
            subtitle="August 2021 – May 2022"
            logoLink="https://www3.nd.edu/~skumar5/"
            logo={`../../images/education/nd.webp`}
            logoBackup={data.nd.childImageSharp.fluid}
            logoAlt={"ND logo"}
            body={
              <>
                <p>
                  Favoring a practice-oriented approach to research,{" "}
                  <a
                    href="https://www3.nd.edu/~skumar5/research.html"
                    rel="noopener noreferrer"
                    target="_BLANK"
                  >
                    Dr. Shreya Kumar's Research
                  </a>{" "}
                  revolves around: (1) Communication, (2) Undergraduate
                  education, (3) Diversity in computing, (4) Human Computer
                  Interaction and senior citizens, and (5) Exploratory testing.
                </p>
                <p>
                  <ul>
                    <li>
                      Converted AngularJS frontend client of ethics quiz taking
                      app to React, migrated SQLite database to PostgreSQL,
                      integrated existing Django backend, and hosted frontend to
                      Netlify and backend to AWS and Heroku
                    </li>
                    <li>
                      Managed a team through a migration of an existing full
                      stack web application with authentication, CMS, and data
                      visualization
                    </li>
                    <li>
                      Researched and evaluated through multiple rounds of papers
                      and contributed to existing Literature Review
                    </li>
                  </ul>
                </p>
              </>
            }
            end={
              <p>
                <strong>Technologies</strong>: JavaScript, React, AngularJS,
                Django, PostgreSQL, SQLite, D3, AWS (IAM, S3), Netlify, Heroku,
                Bootstrap, HTML/CSS, JIRA, Git
              </p>
            }
          />
          <Card
            title="Student Ambassador | IDEA Center"
            subtitle="August 2019 – May 2022"
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
              </ul>
            }
          />
          <Card
            title="Teaching Assistant, PHIL 10111 Intro to Philosophy | University of Notre Dame"
            subtitle="August 2019 – May 2020"
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
                  link="https://comicollect.netlify.app/"
                  title="View here"
                  links="https://github.com/serglockhart/collectio-app"
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
            title="Sergio Site"
            body="Performer single-page application (SPA) website displaying reels, headshots, and interactive image gallery."
            end={
              <p>
                <strong>Technologies:</strong> JavaScript, React, Next,
                Tailwind, Vercel, Getform, Google Analytics, HTML/CSS, Git
              </p>
            }
            buttons={
              <div className="buttons">
                <Button link="https://sergiolockhart.com/" title="View here" />
              </div>
            }
          >
            <Browser
              image={`../../images/projects/sergio.webp`}
              imageBackup={data.sergio.childImageSharp.fluid}
              imageAlt={"Sergio site"}
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
                  link="https://munti.netlify.app/"
                  title="View here"
                  links="https://github.com/munti-llc/munti-site"
                  titles="View repo"
                />
              </div>
            }
          >
            <Browser
              image={`../../images/projects/munti.webp`}
              imageBackup={data.muntiSm.childImageSharp.fluid}
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
                  link="https://gashawkrv.netlify.app/"
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
                  link="https://delivedrones.netlify.app/"
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
                  link="https://tembos.vercel.app/"
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
                  links="https://github.com/serglockhart/kyra-site"
                  titles="View repo"
                />
              </div>
            }
          >
            <Browser
              image={`../../images/projects/kyra.webp`}
              imageBackup={data.kyra.childImageSharp.fluid}
              imageAlt={"Kyra site"}
            />
          </Project>
          <Project
            title="URMA ONG Site"
            body="e-Commerce multi-page application (MPA) for the URMA ONG brand of Bluegreans Apparel Inc."
            end={
              <p>
                <strong>Technologies:</strong> JavaScript, jQuery, Liquid, PHP,
                SASS/SCSS, Bootstrap, HTML/CSS, Figma, Adobe Illustrator, Adobe
                Photoshop, Shopify, JIRA, Git
              </p>
            }
          >
            <Browser
              image={`../../images/projects/urmaong.webp`}
              imageBackup={data.urmaongSm.childImageSharp.fluid}
              imageAlt={"URMA ONG site"}
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
          >
            <Browser
              image=""
              vid={`../../videos/gittaSite.webm`}
              vidBackup={`../../videos/gittaSite.mp4`}
              vidAlt={"Gitta site"}
            />
          </Project>
          <Project
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
                link="https://github.com/serglockhart/my-site"
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
            title="Maet App"
            body="A Gamified Marketplace for Amateur Team Sports with Authentication, Photo Upload, Team Creation & Invites, Event/Game Creation and Set Up developed for Maet Inc. Currently alpha testing through TestFlight for release with local college club sports in Indiana."
            end={
              <p>
                <strong>Technologies:</strong> Expo, React Native, React,
                TypeScript, Storybook, Redux (Thunk), React-Hook-Form, Yup,
                Firebase, Figma, Zeplin, TestFlight, Git
              </p>
            }
          >
            <Mobile
              isVideo={true}
              vid={`../../videos/maet.webm`}
              vidAlt={"Maet app webm"}
              vidBackup={`../../videos/maet.mp4`}
              vidBackupAlt={"Maet app mp4"}
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
                link="https://github.com/serglockhart/collectio-app"
                title="View repo"
              />
            }
          >
            <Mobile
              isVideo={true}
              vid={`../../videos/collectio.webm`}
              vidAlt={"Collectio app webm"}
              vidBackup={`../../videos/collectio.mp4`}
              vidBackupAlt={"Collectio app mp4"}
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
              isVideo={true}
              vid={`../../videos/debtly.webm`}
              vidAlt={"Debtly app webm"}
              vidBackup={`../../videos/debtly.mp4`}
              vidBackupAlt={"Debtly app mp4"}
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
              isVideo={true}
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
              isVideo={true}
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
              isVideo={true}
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
                <strong>Technologies:</strong> Python, Raspberry Pi, Flask, AWS
                (S3, RDS, IoT), DroneKit SDK, Git
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
