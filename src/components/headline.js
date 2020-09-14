import React from "react"
import {Link} from "gatsby"

class Headline extends React.Component {
  render() {
    return (
      <div id="headline">
        <div className="typewriter">
          <h1>Kiro Hanna</h1>
        </div>
        <h4>Full Stack Developer</h4>
        <button className="blog-button"><Link to="/blog">Visit the Blog</Link></button>
      </div>
    )
  }
}

export default Headline
