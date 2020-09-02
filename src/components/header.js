import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import HamburgerMenu from "react-hamburger-menu"

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
    }
  }

  handleClick = () => {
    this.setState({
      open: !this.state.open,
    })
  }

  render() {
    return (
      <header
        style={{
          background: `#5c33ff`,
        }}
      >
        <div
          className="header-div"
          style={{
            margin: `0 auto`,
            padding: `1.45rem 1.0875rem`,
          }}
        >
          <h1 style={{ margin: 0 }}>
            <Link
              to="/"
              style={
                this.props.currentLink === "Index"
                  ? {
                      color: `white`,
                      textDecoration: `none`,
                      borderBottom: `2px solid purple`,
                    }
                  : {
                      color: `white`,
                      textDecoration: `none`,
                      borderBottom: `2px solid black`,
                    }
              }
            >
              {this.props.siteTitle}
            </Link>
          </h1>
          <div className="hamburger-menu">
            <HamburgerMenu
              isOpen={this.state.open}
              menuClicked={this.handleClick.bind(this)}
              width={26}
              height={15}
              strokeWidth={2}
              rotate={0}
              color="black"
              borderRadius={0}
              animationDuration={0.5}
            />
            <div
              className="hamburger-links"
              style={this.state.open ? {} : { display: `none` }}
            >
              <Link
                style={
                  this.props.currentLink === "blog"
                    ? { borderBottom: `2px solid purple` }
                    : {
                        borderBottom: `2px solid black`,
                      }
                }
                to="/blog"
              >
                Blog
              </Link>
              <Link
                style={
                  this.props.currentLink === "portfolio"
                    ? { borderBottom: `2px solid purple` }
                    : {
                        borderBottom: `2px solid black`,
                      }
                }
                to="/portfolio"
              >
                Portfolio
              </Link>
              <Link
                style={
                  this.props.currentLink === "aboutMe"
                    ? { borderBottom: `2px solid purple` }
                    : {
                        borderBottom: `2px solid black`,
                      }
                }
                to="/aboutMe"
              >
                About Me
              </Link>
              <Link
                style={
                  this.props.currentLink === "contact"
                    ? { borderBottom: `2px solid purple` }
                    : {
                        borderBottom: `2px solid black`,
                      }
                }
                to="/contactMe"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="header-nav">
            <Link
              style={
                this.props.currentLink === "blog"
                  ? { borderBottom: `2px solid purple` }
                  : {
                      borderBottom: `2px solid black`,
                    }
              }
              to="/blog"
            >
              Blog
            </Link>
            <Link
              style={
                this.props.currentLink === "portfolio"
                  ? { borderBottom: `2px solid purple` }
                  : {
                      borderBottom: `2px solid black`,
                    }
              }
              to="/portfolio"
            >
              Portfolio
            </Link>
            <Link
              style={
                this.props.currentLink === "aboutMe"
                  ? { borderBottom: `2px solid purple` }
                  : {
                      borderBottom: `2px solid black`,
                    }
              }
              to="/aboutMe"
            >
              About Me
            </Link>
            <Link
              style={
                this.props.currentLink === "contact"
                  ? { borderBottom: `2px solid purple` }
                  : {
                      borderBottom: `2px solid black`,
                    }
              }
              to="/contactMe"
            >
              Contact
            </Link>
          </div>
        </div>
      </header>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  currentLink: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  currentLink: ``,
}

export default Header
