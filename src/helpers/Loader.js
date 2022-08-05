import { css } from "@emotion/react";
import FadeLoader from "react-spinners/FadeLoader";
import { Layout } from "../Layout/Layout";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  margin-top: 2rem;
`;

const Loader = () => {
  return (
    <Layout>
      <FadeLoader css={override} size={150} />;
    </Layout>
  );
};

export default Loader;
