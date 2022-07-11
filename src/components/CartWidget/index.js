import { BsCart3 } from "react-icons/bs";
import { Container } from "./CartWidget.styles";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

const CartWidget = () => {
  const { showAllItems } = useContext(CartContext);
  return (
    <Container>
      {showAllItems() > 0 ? (
        <NavLink to="/cart">
          <BsCart3 /> {showAllItems()}
        </NavLink>
      ) : null}
    </Container>
  );
};

export default CartWidget;
