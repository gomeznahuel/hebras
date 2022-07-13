import React from "react";

const index = ({ src, title, maxWidth, maxHeight }) => {
  return <img src={src} alt={title} style={{ maxWidth, maxHeight }} />;
};

export default index;
