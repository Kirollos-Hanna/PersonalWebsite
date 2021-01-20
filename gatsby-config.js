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
        plugins: [
          `gatsby-remark-prismjs`
        ] // just in case those previously mentioned remark plugins sound cool :)
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
    {
      resolve: `gatsby-remark-prismjs`,
      options: {
        // Class prefix for <pre> tags containing syntax highlighting;
        // defaults to 'language-' (e.g. <pre class="language-js">).
        // If your site loads Prism into the browser at runtime,
        // (e.g. for use with libraries like react-live),
        // you may use this to prevent Prism from re-processing syntax.
        // This is an uncommon use-case though;
        // If you're unsure, it's best to use the default value.
        classPrefix: "language-",
        // This is used to allow setting a language for inline code
        // (i.e. single backticks) by creating a separator.
        // This separator is a string and will do no white-space
        // stripping.
        // A suggested value for English speakers is the non-ascii
        // character '›'.
        inlineCodeMarker: null,
        // This lets you set up language aliases.  For example,
        // setting this to '{ sh: "bash" }' will let you use
        // the language "sh" which will highlight using the
        // bash highlighter.
        aliases: {js: 'javascript'},
        // This toggles the display of line numbers globally alongside the code.
        // To use it, add the following line in gatsby-browser.js
        // right after importing the prism color scheme:
        //  require("prismjs/plugins/line-numbers/prism-line-numbers.css")
        // Defaults to false.
        // If you wish to only show line numbers on certain code blocks,
        // leave false and use the {numberLines: true} syntax below
        showLineNumbers: false,
        // If setting this to true, the parser won't handle and highlight inline
        // code used in markdown i.e. single backtick code like `this`.
        noInlineHighlight: false,
        // This adds a new language definition to Prism or extend an already
        // existing language definition. More details on this option can be
        // found under the header "Add new language definition or extend an
        // existing language" below.
        languageExtensions: [
          {
            language: "superscript",
            extend: "javascript",
            definition: {
              superscript_types: /(SuperType)/,
            },
            insertBefore: {
              function: {
                superscript_keywords: /(superif|superelse)/,
              },
            },
          },
          {
            language: "cpp",
            // extend: "javascript",
            // definition: {
            //   superscript_types: /(SuperType)/,
            // },
            // insertBefore: {
            //   function: {
            //     superscript_keywords: /(superif|superelse)/,
            //   },
            // },
          },
        ],
        // Customize the prompt used in shell output
        // Values below are default
        prompt: {
          user: "root",
          host: "localhost",
          global: false,
        },
        // By default the HTML entities <>&'" are escaped.
        // Add additional HTML escapes by providing a mapping
        // of HTML entities and their escape value IE: { '}': '&#123;' }
        escapeEntities: {},
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
