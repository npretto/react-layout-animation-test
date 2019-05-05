import React from "react"
import { ReactComponent as FlameIcon } from "../Icons/FlameIcon.svg"
import { ReactComponent as PaperIcon } from "../Icons/PaperIcon.svg"
import { ReactComponent as WaterIcon } from "../Icons/WaterIcon.svg"

import "./Post.css"

const Post = ({ small, title, text, author }) => {
  return (
    <div className="post">
      <small className="post--small">{small}</small>
      <h1 className="post--title">{title}</h1>
      <p className="post--text">{text}</p>
      <div className="post--info">
        <div className="author">
          <img
            className="author--pic"
            src={author.pic}
            alt={`Immagine profilo di ${author.displayName}`}
          />
          <div className="author--name">{author.displayName}</div>
        </div>
        <div className="post--info--buttons">
          <FlameIcon className="post--info--button" />
          <PaperIcon className="post--info--button" />
          <WaterIcon className="post--info--button" />
        </div>
      </div>
    </div>
  )
}

export default Post
