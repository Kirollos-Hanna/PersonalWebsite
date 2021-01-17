import { Link } from "gatsby"
import React from "react"

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="links">
          <ul className="social-links">
            <p>
              <b>Socials</b>
            </p>
            <li>
              <a href="https://twitter.com/Kiromoth">Twitter</a>
            </li>
            <li>
              <a href="https://www.twitch.tv/kiromoth">Twitch</a>
            </li>
            <li>
              <a href="https://www.youtube.com/channel/UCSLOn3zXOEplvfqUuFLho5g?view_as=subscriber">
                Youtube
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/kirollos-hanna">
                LinkedIn
              </a>
            </li>
          </ul>
          <ul className="other-links">
            <p>
              <b>Other Links</b>
            </p>
            <li>
              <Link to="/privacyPolicy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/aboutMe">About Me</Link>
            </li>
            <li>
              <Link to="/contactMe">Contact Me</Link>
            </li>
          </ul>
        </div>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    )
  }
}

export default Footer
