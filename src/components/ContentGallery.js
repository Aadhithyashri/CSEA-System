import React from "react";
import "../styles/ContentGallery.css";

export default function ContentGallery() {
  return (
    <div className="OutBg">
      <div className="CenterBox">
        <div className="GalleryHeader">
        <p>GALLERY</p>
        </div>
        <div className="Gallery-Body">
          <h5>
          <h4>Upload Images</h4>
          <p>The last uploaded image will be on the top during display in the gallery page.</p>
          <p>Only .jpg/png files are supported </p>
          <p>Choose images to be uploaded: </p>
          <div className="ButtonFile">
            <button className="Choose-File">Choose file: </button>
            <p>No file chosen</p>
          </div>
          </h5>
          
        </div>
      </div>
    </div>
  );
}
