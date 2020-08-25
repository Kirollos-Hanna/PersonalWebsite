import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import Headline from "../components/headline"
import Portfolio from "../components/portfolio"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout currentLink="Index">
    <SEO title="Kiro Hanna's Portfolio" />
    <Headline />
    <Portfolio />
  </Layout>
)

export default IndexPage

// Keep as example for future reference
// <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
// <Image />
// </div>
