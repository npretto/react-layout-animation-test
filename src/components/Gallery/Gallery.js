import React, { Fragment } from "react"
import chunk from "lodash/chunk"
import "./Gallery.css"

const Gallery = ({ photos }) => {
  return (
    <div className="gallery">
      {chunk(photos, 3).map(([big, small1, small2], i) => (
        <Fragment>
          <div className="gallery--photo--column" key={i + "b"}>
            <img
              src={big}
              alt=""
              className="gallery--photo gallery--photo--big"
            />
          </div>
          <div className="gallery--photo--column" key={i + "sm"}>
            <img
              src={small1}
              alt=""
              className="gallery--photo gallery--photo--small"
            />
            <img
              src={small2}
              alt=""
              className="gallery--photo gallery--photo--small"
            />
          </div>
        </Fragment>
      ))}
    </div>
  )
}

export default Gallery
