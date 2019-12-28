module.exports = {
  siteMetadata: {
    title: `Jio Buenviaje`,
    description: `Personal website of Juan Sergio Buenviaje: lifelong learner, driver developer, and proud Filipino.`,
    author: `@lockjio`,
    siteUrl: `https://jbuenviaje.com/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/account/pages`,
      },
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/settings/pages`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-favicon`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: "UA-150731209-1",
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-remove-trailing-slashes`,
    // `gatsby-plugin-offline`,
  ],
}
