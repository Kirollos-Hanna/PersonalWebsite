module.exports = {
  siteMetadata: {
    title: `Kiro Hanna`,
    description: `My portfolio and blog website.`,
    author: `Kiro Hanna`,
    portfolioItems: [
      {
      title: "Portfolio Item 1",
      text:
        "Lorem ipsum dolor sit amet, consectetur ut labore et dolore magna am",
    },
    {
      title: "Portfolio Item 2",
      text:
        "Lorem ipsum dolor sit amet, consectetur ut labore et dolore magna am",
    },
    {
      title: "Portfolio Item 3",
      text:
        "Lorem ipsum dolor sit amet, consectetur ut labore et dolore magna am",
    },
    {
      title: "Portfolio Item 4",
      text:
        "Lorem ipsum dolor sit amet, consectetur ut labore et dolore magnaamet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudexercitation ullamco laboris nisi ut aliquip ex Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudexercitation",
    },
    ]
  },
  plugins: [
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [] // just in case those previously mentioned remark plugins sound cool :)
      }
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages"
      }
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
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
