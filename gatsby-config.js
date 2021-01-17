module.exports = {
  siteMetadata: {
    title: `Kiro Hanna`,
    description: `My portfolio and blog website.`,
    author: `Kiro Hanna`,
    portfolioItems: [{
      title: "Logs Analysis",
      text:
        "The program uses python and psycopg2 to make queries to an SQL database and outputs the results in a simple text file. The queries include joining multiple tables to get the desired information and is presented in an easy to read format for interested readers.",
    },
    {
      title: "Item Catalog",
      text:
        "The program uses Python, Flask and SQLAlchemy to retrieve data from a database and show it to the user. The user can see all availabe items and can login to make his/her own items as well as delete and edit those items but he/she can't delete or edit other users' items.",
    },
    {
      title: "Building Manager App",
      text:
        "A Flutter app for building managers to allow them to distribute and collect bills more easily to/from residents. It uses firebase to authenticate users and store data.",
    },
    {
      title: "AR Camera App",
      text:
        "An app for detecting, segmenting and showing images in AR view. It uses Flask and MaskRCNN for API calls and image manipulation and uses java for android development.",
    },]
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
        path: `${__dirname}/src/posts`,
        name: "posts"
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
