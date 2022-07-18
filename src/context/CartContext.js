import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  // useState with localStorage
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);
  const [products, setProducts] = useState([]);

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
      // set cart to localStorage
      localStorage.setItem("cart", JSON.stringify(newCart));
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
  };

  // Show all items in cart
  const showTotalProducts = () => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  };

  // Get price for product by id
  const priceForProduct = (id) => {
    let product = cart.find((item) => item.id === id);
    return product.price;
  };

  // Set products on localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const value = { cart, addItem, removeItem, clearCart, totalPrice, showTotalProducts, priceForProduct, products, setProducts };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
