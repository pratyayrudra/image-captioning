import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import "./ImageGallery.css";

const ImageGallery = (props) => {
  let cards = props.data.map((d) => {
    return <ImageCard imageSrc={d.imageName} caption={d.caption} />;
  });
  return <div className="wrapper">{cards}</div>;
};

export default ImageGallery;
