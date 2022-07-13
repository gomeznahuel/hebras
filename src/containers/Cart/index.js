import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { TableContainer, TotalPriceContainer, TotalPrice, CartEmptyContainer, CartEmpty, THead, TableTR, TableTH, TableTD } from "./Cart.style";
import { Currency } from "../../helpers/Currency";
import Button from "../../common/Button";
import Image from "../../components/Image";

const Cart = () => {
  const { cart, removeItem, clearCart, totalPrice, priceForProduct } = useContext(CartContext);
  const renderCartItems = [ "Product", "Image", "Individual price", "Quantity", "Remove" ];

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
                <TableTR key={id}>
                  <TableTD>{title.toUpperCase()}</TableTD>
                  <TableTD><Image src={image} alt={title} maxWidth="25%" /></TableTD>
                  <TableTD>{Currency(priceForProduct(id))}</TableTD>
                  <TableTD>{quantity}</TableTD>
                  <TableTD><Button handleClick={() => removeItem(id)} textButton='Remove' width={"fit-content"} height={"3em"} /></TableTD>
                </TableTR>
              ))}

            </THead>
          </TableContainer>

          <TotalPriceContainer>
            <TotalPrice>TOTAL PRICE: {Currency(totalPrice())}</TotalPrice>
            <Button handleClick={clearCart} width={"fit-content"} height={"3em"} textButton='Clear cart' />
          </TotalPriceContainer>
        </>
      ) : (
        <CartEmptyContainer>
          <CartEmpty>Cart is empty!</CartEmpty>
          <NavLink to="/products">
            <Button textButton="Continue shopping" margin='0 auto' />
          </NavLink>
        </CartEmptyContainer>
      )}
    </>
  );
};

export default Cart;
