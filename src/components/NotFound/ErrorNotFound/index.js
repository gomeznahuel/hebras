import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ErrorNotFoundContainer, ErrorNotFoundAnimation } from "./style";
import lottie from "lottie-web";
import Button from "../../../common/Button";

const ErrorNotFound = () => {
  const container = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../../assets/lotties/notfound.json"),
    });

    return () => {
      lottie.destroy();
    };
  }, []);

  return (
    <ErrorNotFoundContainer>
      <ErrorNotFoundAnimation ref={container}></ErrorNotFoundAnimation>
      <Button type="button" handleClick={() => navigate("/")} textButton="Back to home" width="20%" margin="0 auto" />
    </ErrorNotFoundContainer>
  );
};

export default ErrorNotFound;
