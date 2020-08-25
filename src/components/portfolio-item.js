import React from "react"
import ShowMoreText from "react-show-more-text"

class PortfolioItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      width: 0,
      height: 0,
    }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
  }

  componentDidMount() {
    this.updateWindowDimensions()
    window.addEventListener("resize", this.updateWindowDimensions)
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions)
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight })
  }

  render() {
    return (
      <div className="portfolio-item" style={this.props.itemStyle}>
        <h3>{this.props.title}</h3>
        <ShowMoreText
          /* Default options */
          lines={this.state.width > 700 ? 5 : 3}
          more="Show more"
          less="Show less"
          anchorClass=""
          onClick={this.executeOnClick}
          expanded={false}
          width={this.state.width > 700 ? 500 : 200}
        >
          {this.props.text}
        </ShowMoreText>
      </div>
    )
  }
}

export default PortfolioItem
