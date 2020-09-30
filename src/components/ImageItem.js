import React, { Fragment, useCallback, useRef } from "react";
import PropTypes from "prop-types";

const ImageItem = ({ image, loading, setCount, index, length }) => {
  const observer = useRef();
  const lastImageOnPage = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entires) => {
        if (entires[0].isIntersecting) {
          setCount((prevCount) => prevCount + 2);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, setCount]
  );

  return (
    <Fragment>
      {length === index + 1 ? (
        <a
          ref={lastImageOnPage}
          href={image.links.html}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={image.urls.regular}
            alt={image.alt_description}
            title={image.alt_description}
          />
        </a>
      ) : (
        <a href={image.links.html} target="_blank" rel="noopener noreferrer">
          <img
            src={image.urls.regular}
            alt={image.alt_description}
            title={image.alt_description}
          />
        </a>
      )}
    </Fragment>
  );
};

ImageItem.propTypes = {
  image: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  setCount: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  length: PropTypes.number.isRequired,
};

export default ImageItem;
