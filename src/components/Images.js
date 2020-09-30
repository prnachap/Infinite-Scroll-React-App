import React, { Fragment, useState } from "react";
import ImageApi from "./ImageApi";
import ImageItem from "./ImageItem";
import Spinner from "./Spinner";

const Images = () => {
  const [count, setCount] = useState(5);
  const { loading, images, error } = ImageApi(count);
  return loading ? (
    <Fragment>
      <Spinner />
    </Fragment>
  ) : (
    <Fragment>
      <div>
        <h1>Unsplash API - Infinite Scroll</h1>
        <div className="image-container" id="image-container">
          {images.map((image, index) => (
            <ImageItem
              key={index}
              image={image}
              loading={loading}
              setCount={setCount}
              index={index}
              length={images.length}
            />
          ))}
        </div>
        <div>{error && <h1>Please Try Later.....</h1>}</div>
      </div>
    </Fragment>
  );
};

export default Images;
