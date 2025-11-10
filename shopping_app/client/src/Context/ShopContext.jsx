import React, { createContext, useState } from "react";
import productsData from "../data/products";

export const ShopContext = createContext();

const ShopProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [products] = useState(productsData);

  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = (id) =>
    setCart((prev) => prev.filter((item) => item.id !== id));

  const increaseQty = (id) =>
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );

  const decreaseQty = (id) =>
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
      )
    );

  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <ShopContext.Provider
      value={{ products, cart, addToCart, removeFromCart, increaseQty, decreaseQty, total }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopProvider;
