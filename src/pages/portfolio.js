import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ExpandedPortfolioItem from "../components/expanded-portfolio-item"

class Portfolio extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      portfolioItemsData: [{
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
    }
  }
  render() {
    return (
      <Layout currentLink="portfolio">
        <SEO title="Kiro Hanna's Portfolio page" />
        <h1 style={{ margin: `10px` }}>Portfolio page</h1>
        <div className="portfolio-catalog">
          {this.state.portfolioItemsData.map((data, index) => {
            return <ExpandedPortfolioItem title={data.title} text={data.text} />
          })}
        </div>
      </Layout>
    )
  }
}

export default Portfolio
