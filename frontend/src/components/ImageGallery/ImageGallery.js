import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import "./ImageGallery.css";

const ImageGallery = (props) => {
  return (
    <div className="wrapper">
      <h1>Images</h1>
      <div>
        <ImageCard />
      </div>
    </div>
  );
};

export default ImageGallery;
