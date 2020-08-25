import React from "react"
import PortfolioItem from "./portfolio-item"

class Portfolio extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      portfolioItemsData: [
        {
          title: "Portfolio Item 1",
          text:
            "Lorem ipsum dolor sit amet, consectetur ut labore et dolore magna am",
        },
        {
          title: "Portfolio Item 2",
          text:
            "Lorem ipsum dolor sit amet, consectetur ut labore et dolore magna am",
        },
        {
          title: "Portfolio Item 3",
          text:
            "Lorem ipsum dolor sit amet, consectetur ut labore et dolore magna am",
        },
        {
          title: "Portfolio Item 4",
          text:
            "Lorem ipsum dolor sit amet, consectetur ut labore et dolore magnaamet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudexercitation ullamco laboris nisi ut aliquip ex Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudexercitation",
        },
      ],
      midSectionOfArray: 2,
      dragging: false,
      initialMousePos: 0,
      currentMousePos: 0,
      itemXPos: 0,
    }

    this.onMouseDown = this.onMouseDown.bind(this)
    this.onMouseMove = this.onMouseMove.bind(this)
    this.onMouseUp = this.onMouseUp.bind(this)
  }

  componentDidUpdate(props, state) {
    if (this.state.dragging && !state.dragging) {
      document.addEventListener("mousemove", this.onMouseMove)
      document.addEventListener("mouseup", this.onMouseUp)
    } else if (!this.state.dragging && state.dragging) {
      document.removeEventListener("mousemove", this.onMouseMove)
      document.removeEventListener("mouseup", this.onMouseUp)
    }
  }

  onMouseDown(e) {
    if (e.button !== 0) return
    this.setState({
      dragging: true,
      initialMousePos: e.pageX,
    })
    e.stopPropagation()
    e.preventDefault()
  }

  onMouseUp(e) {
    this.setState({ dragging: false, itemXPos: 0 })
    if (this.state.initialMousePos - this.state.currentMousePos <= -200) {
      if (this.state.midSectionOfArray === 0) return
      this.setState({
        midSectionOfArray: this.state.midSectionOfArray - 1,
      })
    } else if (this.state.initialMousePos - this.state.currentMousePos >= 200) {
      if (
        this.state.midSectionOfArray >=
        this.state.portfolioItemsData.length - 1
      )
        return
      this.setState({
        midSectionOfArray: this.state.midSectionOfArray + 1,
      })
    }
    e.stopPropagation()
    e.preventDefault()
  }

  onMouseMove(e) {
    if (!this.state.dragging) return
    this.setState({
      currentMousePos: e.pageX,
      itemXPos: e.pageX - this.state.initialMousePos,
    })
    console.log(this.state.itemXPos + " " + e.pageX)
    e.stopPropagation()
    e.preventDefault()
  }

  render() {
    return (
      <div className="portfolio">
        <h2>Portfolio</h2>
        <div onMouseDown={this.onMouseDown} className="items">
          {this.state.portfolioItemsData.map((data, index) => {
            if (index < this.state.midSectionOfArray) {
              return (
                <PortfolioItem
                  itemStyle={{ zIndex: `-1`, left: `1%`, opacity: `0.5` }}
                  title={data.title}
                  text={data.text}
                />
              )
            } else if (index === this.state.midSectionOfArray) {
              return (
                <PortfolioItem
                  itemStyle={{
                    transform: `translate(` + this.state.itemXPos + `px, 30px)`,
                    // left: this.state.itemXPos + `px`
                  }}
                  title={data.title}
                  text={data.text}
                />
              )
            } else {
              return (
                <PortfolioItem
                  itemStyle={{ zIndex: `-1`, right: `1%`, opacity: `0.5` }}
                  title={data.title}
                  text={data.text}
                />
              )
            }
          })}
        </div>
      </div>
    )
  }
}

export default Portfolio
