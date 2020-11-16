import { useState, useEffect } from "react";

const useAPI = (url) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [data, setData] = useState();

  const fetchData = () => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setLoading(false);
        setError("");
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message);
      });
  };

  useEffect(fetchData, [url]);

  return [loading, error, data];
};

export default useAPI;
