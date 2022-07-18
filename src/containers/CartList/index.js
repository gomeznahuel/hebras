import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { TableContainer, TotalPriceContainer, TotalPrice, THead, TableTR, TableTH } from "./Cart.style";
import { Currency } from "../../helpers/Currency";
import { Cart } from "../../components/Cart";
import { EmptyCart } from "../../components/EmptyCart";
import { renderCartItems } from "../../services/Data";
import Button from "../../common/Button";
import GeneratedOrder from "../../utils/GenerateOrder";
import SaveOrder from "../../utils/SaveOrder";

const CartList = () => {
  const { cart, clearCart, totalPrice } = useContext(CartContext);

  const buyer = {
    name: "John Doe",
    phone: "123456789",
    email: "vsco@vsco.ar",
  };

  const confirmOrder = async () => {
    const order = GeneratedOrder(buyer, cart, totalPrice());
    SaveOrder(cart, order);
    clearCart();
  };

  return (
    <>
      {cart.length > 0 ? (
        <>
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

          <TotalPriceContainer>
            <TotalPrice>TOTAL PRICE: {Currency(totalPrice())}</TotalPrice>
            <Button handleClick={clearCart} width={"fit-content"} height={"3em"} textButton="Clear cart" />
          </TotalPriceContainer>

          <Button handleClick={confirmOrder} width={"fit-content"} height={"3em"} textButton="Confirm order" />
        </>
      ) : (
         <EmptyCart />
      )}
    </>
  );
}

export default CartList;
