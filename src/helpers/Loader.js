import { css } from "@emotion/react";
import FadeLoader from "react-spinners/FadeLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  margin-top: 2rem;
`;

const Loader = () => {
  return <FadeLoader css={override} size={150} />;
};

export default Loader;
