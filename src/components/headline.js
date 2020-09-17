import React from "react"
import { Link } from "gatsby"
import CallToActionButton from "./call-to-action-button"

class Headline extends React.Component {
  render() {
    return (
      <div id="headline">
        <div className="typewriter">
          <h1>Kiro Hanna</h1>
        </div>
        <h4>Full Stack Developer</h4>
        <CallToActionButton
          styleClass="call-to-action-button blog-button"
          link="/blog"
          text="Visit the Blog"
        />
      </div>
    )
  }
}

export default Headline
