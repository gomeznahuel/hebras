import { NavLink } from "react-router-dom";
import Button from "../../../common/Button";
import { ProductNotFoundContainer, TextHeading } from "./style";

export const ProductNotFound = ({text}) => {
  return (
    <ProductNotFoundContainer>
      <TextHeading>{text}</TextHeading>
      <NavLink to="/products">
        <Button textButton="Back to products" />
      </NavLink>
    </ProductNotFoundContainer>
  );
};
