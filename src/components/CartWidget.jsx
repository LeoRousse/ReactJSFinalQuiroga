// components/CartWidget.jsx
import React from 'react';
import {FaShoppingCart} from 'react-icons/fa';

const CartWidget = () => {
  const itemCount = 3;

  return (
    <div className="cart-widget" style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
      <FaShoppingCart size={24}/> 
      <a className="CartWidget-item" href="#">
        Carrito
      </a>
      <span className="badge" style={{ backgroundColor: 'red', color: 'white', borderRadius: '50%', padding: '0.2em 0.5em', marginLeft: '0.5em' }}>
        {itemCount}
      </span>
    </div>
  );
};

export default CartWidget;