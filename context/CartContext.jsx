"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

const CartContext = createContext(null);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [ready, setReady] = useState(false);

  // LOAD CART FROM LOCAL STORAGE
  useEffect(() => {
    const savedCart = JSON.parse(
      localStorage.getItem("allmart_cart") || "[]"
    );

    setCart(savedCart);
    setReady(true);
  }, []);

  // SAVE CART TO LOCAL STORAGE
  useEffect(() => {
    if (ready) {
      localStorage.setItem(
        "allmart_cart",
        JSON.stringify(cart)
      );
    }
  }, [cart, ready]);

  // ADD TO CART
  const addToCart = (product) => {
    setCart((currentCart) => {
      const existingItem = currentCart.find(
        (item) =>
          item.id === product.id &&
          item.vendorId === product.vendorId
      );

      if (existingItem) {
        return currentCart.map((item) =>
          item.id === product.id &&
          item.vendorId === product.vendorId
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      return [
        ...currentCart,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  };

  // INCREASE QUANTITY
  const increaseQuantity = (id) => {
    setCart((items) =>
      items.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  // DECREASE QUANTITY
  const decreaseQuantity = (id) => {
    setCart((items) =>
      items
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // REMOVE ITEM
  const removeFromCart = (id) => {
    setCart((items) =>
      items.filter((item) => item.id !== id)
    );
  };

  // CLEAR CART
  const clearCart = () => {
    setCart([]);
  };

  // TOTAL ITEMS
  const itemCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // SUBTOTAL
  const subtotal = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        clearCart,
        itemCount,
        subtotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// CUSTOM HOOK
const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart must be used inside CartProvider"
    );
  }

  return context;
};

export { CartProvider, useCart };