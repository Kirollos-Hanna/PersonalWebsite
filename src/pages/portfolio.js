import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ExpandedPortfolioItem from "../components/expanded-portfolio-item"

class Portfolio extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      portfolioItemsData: [
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
      ],
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
