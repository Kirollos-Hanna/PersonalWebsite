import React from "react"
import PortfolioItem from "./portfolio-item"
import CallToActionButton from "./call-to-action-button"
import { useSiteMetadata } from "../hooks/portfolio-items-query"

class PortfolioSection extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      portfolioItemsData:[{
        title: "Logs Analysis",
        text:
          "The program uses python and psycopg2 to make queries to an SQL database and outputs the results in a simple text file. The queries include joining multiple tables to get the desired information and is presented in an easy to read format for interested readers.",
      },
      {
        title: "Item Catalog",
        text:
          "The program uses Python, Flask and SQLAlchemy to retrieve data from a database and show it to the user. The user can see all availabe items and can login to make his/her own items as well as delete and edit those items but he/she can't delete or edit other users' items.",
      },
      {
        title: "Building Manager App",
        text:
          "A Flutter app for building managers to allow them to distribute and collect bills more easily to/from residents. It uses firebase to authenticate users and store data.",
      },
      {
        title: "AR Camera App",
        text:
          "An app for detecting, segmenting and showing images in AR view. It uses Flask and MaskRCNN for API calls and image manipulation and uses java for android development.",
      },],
      midSectionOfArray: 2,
      dragging: false,
      initialMousePos: 0,
      currentMousePos: 0,
      itemXPos: 0,
    }

    this.onMouseDown = this.onMouseDown.bind(this)
    this.onMouseMove = this.onMouseMove.bind(this)
    this.onMouseUp = this.onMouseUp.bind(this)
    this.onTouchStart = this.onTouchStart.bind(this)
    this.onTouchMove = this.onTouchMove.bind(this)
    this.onTouchEnd = this.onTouchEnd.bind(this)
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

  start(entity, e, pageX) {
    entity.setState({
      dragging: true,
      initialMousePos: pageX,
    })
    e.stopPropagation()
    e.preventDefault()
  }

  move(entity, e, pageX) {
    if (!entity.state.dragging) return
    entity.setState({
      currentMousePos: pageX,
      itemXPos: pageX - entity.state.initialMousePos,
    })
    e.stopPropagation()
    e.preventDefault()
  }

  end(entity, e) {
    entity.setState({ dragging: false, itemXPos: 0 })
    if (entity.state.initialMousePos - entity.state.currentMousePos <= -200) {
      if (entity.state.midSectionOfArray === 0) return
      entity.setState({
        midSectionOfArray: entity.state.midSectionOfArray - 1,
      })
    } else if (
      entity.state.initialMousePos - entity.state.currentMousePos >=
      200
    ) {
      if (
        entity.state.midSectionOfArray >=
        entity.state.portfolioItemsData.length - 1
      )
        return
      entity.setState({
        midSectionOfArray: entity.state.midSectionOfArray + 1,
      })
    }
    e.stopPropagation()
    e.preventDefault()
  }

  onTouchStart(e) {
    // console.log(e)
    // console.log(e.changedTouches[0].pageX)
    this.start(this, e, e.changedTouches[0].pageX)
  }

  onTouchMove(e) {
    this.move(this, e, e.changedTouches[0].pageX)
  }

  onTouchEnd(e) {
    this.end(this, e)
  }

  onMouseDown(e) {
    if (e.button !== 0) return
    this.start(this, e, e.pageX)
  }

  onMouseUp(e) {
    this.end(this, e)
  }

  onMouseMove(e) {
    this.move(this, e, e.pageX)
  }

  render() {
    return (
      <div className="portfolio">
        <h2>Portfolio</h2>
        <div
          onTouchStart={this.onTouchStart}
          onTouchMove={this.onTouchMove}
          onTouchEnd={this.onTouchEnd}
          onMouseDown={this.onMouseDown}
          className="items"
        >
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
        <CallToActionButton
          styleClass="call-to-action-button portfolio-button"
          link="/portfolio"
          text="See All Projects"
        />
      </div>
    )
  }
}

export default PortfolioSection
