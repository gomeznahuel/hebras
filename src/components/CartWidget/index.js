import { BsCart3 } from "react-icons/bs";
import { Container } from "./CartWidget.elements";
import { NavLink } from "react-router-dom";

const CartWidget = () => {
  return (
    <Container>
      <NavLink to="/cart">
        <BsCart3 />
      </NavLink>
    </Container>
  );
};

export default CartWidget;
