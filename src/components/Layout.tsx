import React from "react"
import { Helmet } from "react-helmet"

import Header from "./Header"
import Footer from "./Footer"

const Layout = props => {
  return (
    <div className="app" id="top">
      <Helmet>
        <meta charSet="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>Jio Buenviaje</title>
        <meta name="author" content="Jio Buenviaje" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Jio Buenviaje" />
        <meta property="twitter:url" content="jbuenviaje.com" />
        <meta name="theme-color" content="#ffffff" />

        <meta property="og:title" content="Jio Buenviaje" />
        <meta
          property="og:image"
          content="https://user-images.githubusercontent.com/50670255/76829155-e03f0c00-67f8-11ea-86b9-5cadafab7b63.png"
        />
        <meta
          property="og:description"
          content="Personal website of Juan Sergio Buenviaje: lifelong learner, driver developer, and proud Filipino."
        />
        <meta property="og:url" content="jbuenviaje.com" />

        <meta property="twitter:title" content="Jio Buenviaje" />
        <meta
          name="description"
          content="Personal website of Juan Sergio Buenviaje: lifelong learner, driver developer, and proud Filipino."
        />
        <meta
          property="twitter:description"
          content="Personal website of Juan Sergio Buenviaje: lifelong learner, driver developer, and proud Filipino."
        />
        <meta
          name="keywords"
          content="juan,sergio,jio,juansergio,juansergiobuenviaje,jiobuenviaje,notredame,nd,freelance,web,webdev,mobile,iosdevelopment,ios,android,androiddevelopment,website,cs,filipino,southbend,indiana,university,philippines,philippine,student,react,javascript,node,developer,dev,flutter,dart,embedded,arduino,contact,new,york,city,NY,cbs"
        />
        <meta
          property="twitter:image"
          content="https://user-images.githubusercontent.com/50670255/76829155-e03f0c00-67f8-11ea-86b9-5cadafab7b63.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://jbuenviaje.com/" />
      </Helmet>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </div>
  )
}

export default Layout
