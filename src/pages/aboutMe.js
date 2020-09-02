import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutMe = () => (
  <Layout currentLink="aboutMe">
    <SEO title="Kiro Hanna's About Me" />
    <div className="center-content">
      <div className="container">
        <h1>About me</h1>
        <div className="about-me">
          <p>
            I'm Kiro. A programmer with an aspiration to make money with my
            coding skills.
          </p>
        </div>
      </div>
    </div>
  </Layout>
)

export default AboutMe
