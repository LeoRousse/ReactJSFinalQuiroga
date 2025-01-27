import { useState, createContext } from 'react';

export const CartContext = createContext({
  cart: [],
});

export const CartProvider = ({ children }) => {
  const [ cart, setCart ] = useState([]);

  const addItem = (item, quantity) => {
    if (!isInCart(item.id)) {
      setCart((prev) => [...prev, { ...item, quantity }]);
    } else {
      console.error("El producto ya estaba agregado");
    }
  };

  const isInCart = (itemId) => {
    return cart.some((product) => product.id === itemId);
  };

  const clearCart = () => {
    setCart( [] );
  };

  const removeItem = (itemId) => {
    const cartUpdated = cart.filter((product) => product.id !== itemId);
    setCart(cartUpdated);
  };

  const totalQuantity = cart.reduce((acc, product) => acc + product.quantity, 0);
  const total = cart.reduce((acc, product) => acc + product.price * product.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, total, totalQuantity }}>
      {children}
    </CartContext.Provider>
  );
};