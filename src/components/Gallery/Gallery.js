import React, { Fragment } from "react"
import chunk from "lodash/chunk"
import "./Gallery.scss"

const Gallery = ({ photos }) => {
  return (
    <div className="gallery">
      {chunk(photos, 3).map(([big, small1, small2], i) => (
        <Fragment key={i}>
          <div className="gallery--photo--column">
            <img
              src={big}
              alt=""
              className="gallery--photo gallery--photo--big"
            />
          </div>
          <div className="gallery--photo--column">
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
