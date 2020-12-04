import React from "react";
import RandomImageStyle from "./RandomImageStyle";

const RandomImage = ({ image }) => {
  return (
    <RandomImageStyle>
      <img src={image} alt={image} />
    </RandomImageStyle>
  );
};

export default RandomImage;
