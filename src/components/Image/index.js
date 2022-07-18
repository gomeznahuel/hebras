import React from "react";

const Image = ({ src, title, maxWidth, maxHeight }) => {
  return <img src={src} alt={title} style={{ maxWidth, maxHeight }} />;
};

export default Image;
