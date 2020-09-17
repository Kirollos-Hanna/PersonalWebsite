import React from "react"
import { Link } from "gatsby"

class CallToActionButton extends React.Component {
  render() {
    return (
      <button className={this.props.styleClass}>
        <Link to={this.props.link}>{this.props.text}</Link>
      </button>
    )
  }
}

export default CallToActionButton
