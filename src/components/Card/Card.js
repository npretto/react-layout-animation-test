import React from "react"
import { ReactComponent as FaceIcon } from "../Icons/FaceIcon.svg"

import "./Card.css"

const Card = ({ small, title, gallery, icon, i }) => {
  const bg = i > 9 ? i : `0${i}`

  return (
    <div className="card">
      <p className="card--background">{bg}</p>

      <small className="card--small">
        {icon === "face" && <FaceIcon className="card--icon" />}
        {small}
      </small>
      <h2 className="card--title">{title}</h2>
      {gallery ? (
        <button className="card--button"> CLICK HERE</button>
      ) : (
        <div />
      )}
    </div>
  )
}

export default Card
