import React from "react";
import "./imageCard.css";

const ImageCard = (props) => {
  let { imageSrc, caption } = { ...props };
  const imageURL = `http://localhost:8000/image/${imageSrc}`;
  return (
    <div className="card">
      <img src={imageURL} />
      <div className="info">
        <p>{caption}</p>
      </div>
    </div>
  );
};

export default ImageCard;
