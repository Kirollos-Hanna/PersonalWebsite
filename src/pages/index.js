import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Kiro Hanna's Portfolio" />
    <div id="headline">
      <div className="typewriter">
        <h1>Kiro Hanna</h1>
      </div>
      <h4>Full Stack Developer</h4>
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout >
)

export default IndexPage

// Keep as example for future reference
// <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
// <Image />
// </div>