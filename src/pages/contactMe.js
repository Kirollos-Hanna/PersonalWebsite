import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactMe = () => (
  <Layout currentLink="contact">
    <SEO title="Kiro Hanna's Contact Me" />
    
    <div className="center-content">
      <div className="container">
        <h1>Contact me</h1>
        <div>
          <p>Contact Form here</p>
        </div>
      </div>
    </div>
  </Layout>
)

export default ContactMe
