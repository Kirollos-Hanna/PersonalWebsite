import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ExpandedPortfolioItem from "../components/expanded-portfolio-item"

function Portfolio(props) {
  const queryData = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          portfolioItems {
            title
            text
          }
        }
      }
    }
  `)
  const data = queryData.site.siteMetadata.portfolioItems;

  return (
    <Layout currentLink="portfolio">
      <SEO title="Kiro Hanna's Portfolio page" />
      <h1 style={{ margin: `10px` }}>Portfolio page</h1>
      <div className="portfolio-catalog">
      {data.map((data) => {
        return <ExpandedPortfolioItem title={data.title} text={data.text} />
      })}</div>
    </Layout>
  )
}

export default Portfolio
