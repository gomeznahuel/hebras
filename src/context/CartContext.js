import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Check if the item is already in the cart
  const isInCart = (id) => {
    return cart.some((item) => item.id === id);
  };

  // Add item to cart
  const addItem = (item, quantity) => {
    const newItem = { ...item, quantity };

    if (isInCart(item.id)) {
      let product = cart.find((item) => item.id === newItem.id);
      product.quantity += newItem.quantity;

      let newCart = cart.map((item) => {
        if (item.id === newItem.id) {
          return product;
        }
        return item;
      });
      setCart(newCart);
      console.log(newCart);
    } else {
      if (quantity > 0) {
        setCart((prevState) => [...prevState, newItem]);
      }
    }
  };

  // Remove item from cart
  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // Clear cart
  const clearCart = () => {
    setCart([]);
  };

  // Get total price
  const totalPrice = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }

  // Show all items in cart
  const showAllItems = () => {
    return cart.map((item) => item.quantity);
  }

  return (
    <CartContext.Provider value={{ cart, setCart, addItem, removeItem, clearCart, totalPrice, showAllItems }} >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
