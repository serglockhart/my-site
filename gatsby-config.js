module.exports = {
  siteMetadata: {
    title: `Sergio Lockhart`,
    description: `Personal website of Sergio Lockhart: lifelong learner, driver developer, and proud Filipino.`,
    author: `@serglockhart`,
    siteUrl: `https://slockhart.com/`,
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `my-site`,
        short_name: `mine`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-plugin-html-attributes",
      options: {
        lang: "en",
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
    `gatsby-plugin-offline`,
    `gatsby-plugin-dark-mode`,
  ],
}
