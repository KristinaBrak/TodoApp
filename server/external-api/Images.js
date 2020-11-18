const fetch = require("node-fetch");

const GIPHY_URL =
  "http://api.giphy.com/v1/gifs/random?tag=kitten&api_key=N6bV7xiE2f6JaGW9lqPGibP3zYTFhK0h";

// const getImage = () => {
//   return fetch(GIPHY_URL)
//     .then((response) => response.json())
//     .then((json) => json.data.images.fixed_height_small.url);
// };

const getImage = async () => {
  const response = await fetch(GIPHY_URL);
  const json = await response.json();
  const result = json.data.images.fixed_height_small.url;
  return result;
};

module.exports = { getImage };
