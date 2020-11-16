import React from "react";
import { GIPHY_URL } from "consts";
import useAPI from "ApiHook";
import Loader from "components/miscellaneous/Loader";

const RandomImage = () => {
  const [loading, error, data] = useAPI(GIPHY_URL);

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <p>{error}</p>;
  }
  const kitten = data.data.images.fixed_height_small.url;
  return (
    <div className="randomImage">
      <img src={kitten} alt="kitten" />
    </div>
  );
};

export default RandomImage;
