import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({});

  const handleAddToCart = (item) => {
    const restaurantName = item.restaurantName || "Unknown Restaurant";
    setCart((prev) => {
      const existing = prev[item._id];
      if (existing) {
        const newQuantity = existing.quantity + 1;
        return {
          ...prev,
          [item._id]: {
            ...existing,
            quantity: newQuantity,
            total: newQuantity * item.price,
          },
        };
      } else {
        return {
          ...prev,
          [item._id]: {
            item: { ...item, restaurantName }, 
            quantity: 1,
            total: item.price,
          },
        };
      }
    });
  };

  const handleQuantityChange = (itemId, delta) => {
    setCart((prev) => {
      const existing = prev[itemId];
      if (!existing) return prev;

      const newQuantity = existing.quantity + delta;
      if (newQuantity <= 0) {
        const updated = { ...prev };
        delete updated[itemId];
        return updated;
      }
      return {
        ...prev,
        [itemId]: {
          ...existing,
          quantity: newQuantity,
          total: newQuantity * existing.item.price,
        },
      };
    });
  };

  const clearCart = () => {
    setCart({});
  };

  const cartCount = Object.values(cart).reduce(
    (sum, cartItem) => sum + cartItem.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        handleAddToCart,
        handleQuantityChange,
        cartCount,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
