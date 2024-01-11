import { createContext, useState } from "react";

export const CartContext = createContext({
  cart: [],
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    if (!isInCart(item.id)) {
      setCart((prev) => [...prev, { ...item, quantity }]);
    } else {
      console.error("El producto ya fue añadido");
    }
  };

  const removeItem = (itemId) => {
    const cartUpdated = cart.filter((prod) => prod.id !== itemId);
    setCart(cartUpdated);
  };

  const clearCart = () => {
    setCart([])
    ;
  };

  const isInCart = (itemId) => {
    return cart.some((prod) => prod.id === itemId);
  };

  const getTotalPrice = () =>{
    return cart.reduce((acc, item) => acc + (item.quantity * item.price), 0);
  }

  const totalQuantity = () => cart.reduce((acumulador, productsActual)=> acumulador + productsActual.quantity, 0);
  
  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, totalQuantity, getTotalPrice }}>
      {children}
    </CartContext.Provider>
  );
};
