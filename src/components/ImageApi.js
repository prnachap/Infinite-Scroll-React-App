import { useEffect, useState } from "react";
import axios from "axios";

const ImageApi = (count) => {
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState([]);
  const [error, setError] = useState(false);

  let apiKey;

  if (process.env.NODE_ENV !== "production") {
    apiKey = process.env.REACT_APP_UNSPLASH_API_KEY;
  } else {
    apiKey = process.env.UNSPLASH_API_KEY;
  }

  useEffect(() => {
    let apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;
    axios
      .get(apiUrl)
      .then((response) => {
        setImages((prevImages) => [...prevImages, ...response.data]);
        setLoading(false);
      })
      .catch((e) => {
        setError(true);
      });
    // eslint - disable - next - line;
  }, [count, apiKey]);

  return { loading, images, error };
};

export default ImageApi;
