import React from "react"

const Post = ({ small, title, text }) => {
  return (
    <div>
      <small>{small}</small>
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  )
}

export default Post
