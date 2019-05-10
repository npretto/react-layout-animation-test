import React from "react"
import "./Header.scss"

const Header = ({ top }) => {
  return (
    <header className="header" style={{ top }}>
      <p className="header-title">Astrubale</p>
      <div>
        <div />
        <div>LOREM IPSUM</div>
        <div>DOLOR</div>
      </div>
      <div />
    </header>
  )
}

export default Header
