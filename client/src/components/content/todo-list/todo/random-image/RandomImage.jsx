import React from "react";
import { GIPHY_URL } from "consts";
import useAPI from "ApiHook";
import Loader from "components/miscellaneous/Loader";

const RandomImage = ({ image }) => {
  // const [loading, error, data] = useAPI(GIPHY_URL);

  // if (loading) {
  //   return <Loader />;
  // }
  // if (error) {
  //   return <p>{error}</p>;
  // }
  // const kitten = data.data.images.fixed_height_small.url;
  return (
    <div className="randomImage">
      {/* <img src={kitten} alt="kitten" /> */}
      <img src={image} alt={image} />
    </div>
  );
};

export default RandomImage;
