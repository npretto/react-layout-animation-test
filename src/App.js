import React, { Fragment } from "react"
import Header from "./components/Header/Header"
import Post from "./components/Post/Post"
import Gallery from "./components/Gallery/Gallery"
import Card from "./components/Card/Card"
import PopUpGallery from "./components/PopUpGallery/PopUpGallery"

import posts from "./data/post.json"
import cards from "./data/card.json"
import gallery from "./data/gallery.json"

import "./App.scss"

export default class App extends React.Component {
  state = {
    scrolled: false,
    popupGallery: null,
    isGalleryOpen: false,
    headerTop: 0
  }

  componentDidMount() {
    window.document.addEventListener("scroll", this.handleScroll)
  }

  componentWillUnmount() {
    window.document.removeEventListener("scroll", this.handleScroll)
  }

  handleScroll = e => {
    const roundedBoxPosition = window.document
      .querySelector(".container--rounded-box")
      .getBoundingClientRect()

    const amountScrolled = window.pageYOffset

    const scrolled = roundedBoxPosition.top < 0

    //make header sticky untill the roundebox "pushes" it up
    const headerTop =
      roundedBoxPosition.top > 100 ? 0 : roundedBoxPosition.top - 100

    //image parallax
    const backgroundScroll = `${amountScrolled * 0.5}px`

    const sidebarPosition =
      window.innerWidth < 900
        ? 0
        : Math.min(500, 550 - 160 + amountScrolled * 0.2)

    this.setState({ scrolled, headerTop, backgroundScroll, sidebarPosition })
  }

  openGallery = popupGallery =>
    this.setState({ popupGallery, isGalleryOpen: true })

  closeGallery = () => this.setState({ isGalleryOpen: false })

  render() {
    const {
      scrolled,
      isGalleryOpen,
      popupGallery,
      headerTop,
      backgroundScroll,
      sidebarPosition
    } = this.state
    const [firstPost, ...otherPosts] = posts

    return (
      <Fragment>
        <div className="App" id="App">
          <Header top={headerTop} />

          <div className="background">
            <div
              className="background--image"
              style={{ transform: `translate3d(0px,${backgroundScroll},0px)` }}
            />
            {/* <img
              className="background-image"
              alt=""
              src="https://s3-eu-west-1.amazonaws.com/production-hairdressr/fe-dummy/cover.png"
            /> */}
          </div>
          <div className="container">
            <div
              className={
                "container--rounded-box" +
                (scrolled ? " container--rounded-box--scrolled" : "")
              }
            />
            <div className="container--content">
              <div className="container--content--main">
                {firstPost && <Post {...firstPost} />}
                <Gallery photos={gallery} />
                {otherPosts.map((p, i) => (
                  <Post {...p} key={i} />
                ))}
              </div>
              <div
                className="container--content--sidebar"
                style={{
                  transform: `translate3d(0px,${sidebarPosition}px,0px)`
                }}
              >
                {cards.map((c, i) => (
                  <Card
                    i={i + 1}
                    key={i}
                    {...c}
                    openGallery={this.openGallery}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        {
          <PopUpGallery
            {...popupGallery}
            open={isGalleryOpen}
            onClose={this.closeGallery}
          />
        }
      </Fragment>
    )
  }
}
