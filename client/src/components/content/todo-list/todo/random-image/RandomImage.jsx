import React from "react";

const RandomImage = ({ image }) => {
  return (
    <div className="randomImage">
      <img src={image} alt={image} />
    </div>
  );
};

export default RandomImage;
