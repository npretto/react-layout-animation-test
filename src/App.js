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
  state = { scrolled: false, popupGallery: null, isGalleryOpen: false }

  componentDidMount() {
    window.document
      .getElementById("App")
      .addEventListener("scroll", this.handleScroll)
  }

  componentWillUnmount() {
    window.document
      .getElementById("App")
      .removeEventListener("scroll", this.handleScroll)
  }

  handleScroll = e => {
    const scrolled =
      window.document
        .querySelector(".container--rounded-box")
        .getBoundingClientRect().top < 0
    if (scrolled !== this.state.scrolled) this.setState({ scrolled })
  }

  openGallery = popupGallery =>
    this.setState({ popupGallery, isGalleryOpen: true })

  closeGallery = () => this.setState({ isGalleryOpen: false })

  render() {
    const { scrolled, isGalleryOpen, popupGallery } = this.state
    const [firstPost, ...otherPosts] = posts

    return (
      <Fragment>
        <div className="App" id="App">
          <Header />

          <div className="background">
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
              <div className="container--content--sidebar">
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
