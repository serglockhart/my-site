import React from "react"
import { value Helmet } from "react-helmet"

import Header from "./Header"
import Footer from "./Footer"

const Layout = (props) => {
  return (
    <div className="app" id="top">
      <Helmet>
        <meta charSet="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>Sergio Lockhart</title>
        <meta name="author" content="Sergio Lockhart" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Sergio Lockhart" />
        <meta property="twitter:url" content="slockhart.com" />
        <meta name="theme-color" content="#ffffff" />

        <meta property="og:title" content="Sergio Lockhart" />
        <meta
          property="og:image"
          content="https://user-images.githubusercontent.com/50670255/85933050-7ecf1480-b8a0-11ea-8ec7-d37a9292ff94.png"
        />
        <meta
          property="og:description"
          content="Personal website of Sergio Lockhart: lifelong learner, driver developer, and proud Filipino."
        />
        <meta property="og:url" content="slockhart.com" />

        <meta property="twitter:title" content="Sergio Lockhart" />
        <meta
          name="description"
          content="Personal website of Sergio Lockhart: lifelong learner, driver developer, and proud Filipino."
        />
        <meta
          property="twitter:description"
          content="Personal website of Sergio Lockhart: lifelong learner, driver developer, and proud Filipino."
        />
        <meta
          name="keywords"
          content="sergio,jio,serge,serg,sergiolockhart,serglockhart,sergelockhart,notredame,nd,freelance,web,webdev,mobile,iosdevelopment,ios,android,androiddevelopment,website,cs,filipino,southbend,indiana,university,philippines,philippine,student,react,javascript,node,developer,dev,flutter,dart,embedded,arduino,contact,new,york,city,NY,cbs"
        />
        <meta
          property="twitter:image"
          content="https://user-images.githubusercontent.com/50670255/85933050-7ecf1480-b8a0-11ea-8ec7-d37a9292ff94.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://slockhart.com/" />
      </Helmet>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </div>
  )
}

export default Layout
