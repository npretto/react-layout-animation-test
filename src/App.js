import React from "react"
import Header from "./components/Header/Header"
import Post from "./components/Post/Post"
import Gallery from "./components/Gallery/Gallery"
import Card from "./components/Card/Card"

import posts from "./data/post.json"
import cards from "./data/card.json"
import gallery from "./data/gallery.json"

import "./App.css"

export default class App extends React.Component {
  state = { scrolled: false }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
  }

  handleScroll = e => {
    const scrolled = window.pageYOffset > 300
    if (scrolled !== this.state.scrolled) this.setState({ scrolled })
  }

  render() {
    const { scrolled } = this.state
    return (
      <div className="App">
        <Header />
        <img
          className="background-image"
          alt=""
          src="https://s3-eu-west-1.amazonaws.com/production-hairdressr/fe-dummy/cover.png"
        />
        <div className="container">
          <div
            className={
              "container--rounded-box" +
              (scrolled ? " container--rounded-box--scrolled" : "")
            }
          />
          <div className="container--content">
            <div className="container--content--main">
              {posts.map((p, i) => (
                <Post {...p} key={i} />
              ))}
              <Gallery photos={gallery} />
            </div>
            <div className="container--content--sidebar">
              {cards.map((c, i) => (
                <Card i={i + 1} key={i} {...c} />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
