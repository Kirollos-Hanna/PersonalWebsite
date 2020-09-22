import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const PrivacyPolicy = () => (
  <Layout currentLink="privacyPolicy">
    <SEO title="Kiro Hanna's privacy policy" />
    <h1>Privacy Policy page</h1>
    <p>This site shouldn't be able to gather information about you as far as I, the creator, know.</p>
    <p>The only information I get from you is if you choose to send me an email through the contact form. In that case, I will not share this information with anyone.</p>
    <p>P.S. Who reads this?</p>
  </Layout>
)

export default PrivacyPolicy
