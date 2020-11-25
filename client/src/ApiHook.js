import { useState, useEffect } from "react";

const useAPI = (url) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [data, setData] = useState();
  const [shouldReload, setShouldReload] = useState(true);

  const fetchData = () => {
    if (shouldReload) {
      fetch(url)
        .then((response) => response.json())
        .then((json) => {
          setData(json);
          setShouldReload(false);
          setLoading(false);
          setError("");
        })
        .catch((err) => {
          setShouldReload(false);
          setLoading(false);
          setError(err.message);
        });
    }
  };

  useEffect(fetchData, [url, shouldReload]);

  const reload = () => {
    setShouldReload(true);
  };

  return [loading, error, data, reload];
};

export default useAPI;
