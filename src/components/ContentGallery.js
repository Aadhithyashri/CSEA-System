import React from "react";
import "../styles/ContentGallery.css";

export default function ContentGallery() {
  return (
    <div className="OutBg">
      <div className="CenterBox">
        <br></br>
        <br></br>
        <p>GALLERY</p>
        <div className="Gallery-Body">
          <h5>
          <p>Upload Images</p>
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
