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
        <div className="form">
          <form
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
            <label>
              Name
              <input type="text" name="name" id="name" />
            </label>
            <label>
              Email
              <input type="email" name="email" id="email" />
            </label>
            <label>
              Subject
              <input type="text" name="subject" id="subject" />
            </label>
            <label>
              Message
              <textarea name="message" id="message" rows="5" />
            </label>
            <div>
              <button className="form-button" type="submit">
                Send
              </button>
              <input className="form-button" type="reset" value="Clear" />
            </div>
          </form>
        </div>
      </div>
    </div>
  </Layout>
)

export default ContactMe
