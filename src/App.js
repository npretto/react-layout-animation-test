import React from "react"
import Header from "./components/Header/Header"
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
    if (scrolled != this.state.scrolled) this.setState({ scrolled })
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
            <p> Lorem ipsum dolor sit amet</p>
            <h1>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </h1>
            Lorem ipsum dolor sit amen
            <p>Lorem ipsum dolor sit amen</p>
            <p>Lorem ipsum dolor sit amen</p>
            <p>Lorem ipsum dolor sit amen</p>
            <p>Lorem ipsum dolor sit amen</p>
            <p>Lorem ipsum dolor sit amen</p>
            <p>Lorem ipsum dolor sit amen</p>
            <p>Lorem ipsum dolor sit amen</p>
            <p>Lorem ipsum dolor sit amen</p>
            <p>Lorem ipsum dolor sit amen</p>
            <p>Lorem ipsum dolor sit amen</p>
            <p>Lorem ipsum dolor sit amen</p>
            <p>Lorem ipsum dolor sit amen</p>
            <p>Lorem ipsum dolor sit amen</p>
            <p>Lorem ipsum dolor sit amen</p>
            <p>Lorem ipsum dolor sit amen</p>
            <p>Lorem ipsum dolor sit amen</p>
            <p>Lorem ipsum dolor sit amen</p>
            <p>Lorem ipsum dolor sit amen</p>
            <p>Lorem ipsum dolor sit amen</p>
            <p>Lorem ipsum dolor sit amen</p>
            <p>Lorem ipsum dolor sit amen</p>
            <p>Lorem ipsum dolor sit amen</p>
            <p>Lorem ipsum dolor sit amen</p>
            <p>Lorem ipsum dolor sit amen</p>
            <p>Lorem ipsum dolor sit amen</p>
            <p>Lorem ipsum dolor sit amen</p>
            <p>Lorem ipsum dolor sit amen</p>
            <p>Lorem ipsum dolor sit amen</p>
            <p>Lorem ipsum dolor sit amen</p>
            <p>Lorem ipsum dolor sit amen</p>
            <p>Lorem ipsum dolor sit amen</p>
            <p>Lorem ipsum dolor sit amen</p>
          </div>
        </div>
      </div>
    )
  }
}
