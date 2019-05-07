import React from "react"
import "./PopUpGallery.css"

const PopUpGallery = ({ photos, text, open, onClose }) => {
  return (
    <div
      className={"popup-container" + (open ? " open" : "")}
      onClick={onClose}
    >
      <div className="popup-gallery">
        <div className="popup-gallery--text">
          <p>{text}</p>
        </div>
        <div className="popup-gallery--photos">
          {photos &&
            photos.map((p, i) => (
              <img className="popup-gallery--photo" src={p} key={i} alt="" />
            ))}
        </div>
      </div>
    </div>
  )
}

export default PopUpGallery
