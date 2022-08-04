import { TableContainer, TotalPriceContainer, TotalPrice, THead, TableTR, TableTH } from "./style";
import { Currency } from "../../helpers/Currency";
import { Cart } from "../../components/Cart";
import { renderCartItems } from "../../helpers/Data";
import { useContext } from "react";
import { CartContext } from "../../context/cart/CartContext";
import { useNavigate } from "react-router-dom";
import Button from "../../common/Button";

export const CartList = () => {
  const { cart, clearCart, totalPrice } = useContext(CartContext);

  const nav = useNavigate();

  const handleOrder = () => {
    nav("/checkout");
  };

  return (
    <main>
      <TableContainer>
        <THead>
          <TableTR>
            {renderCartItems.map((item, index) => (
              <TableTH key={index}>{item.toUpperCase()}</TableTH>
            ))}
          </TableTR>

          {cart.map(({ id, title, image, quantity }) => (
            <Cart key={id} id={id} title={title} image={image} quantity={quantity} />
          ))}
        </THead>
      </TableContainer>

      <TotalPrice>TOTAL PRICE: {Currency(totalPrice())}</TotalPrice>
      <TotalPriceContainer>
        <Button handleClick={clearCart} width={"fit-content"} height={"3em"} textButton="Clear cart" />
        <Button handleClick={handleOrder} width={"fit-content"} height={"3em"} textButton="Checkout" />
      </TotalPriceContainer>

    </main>
  );
};
