// components/CartWidget.jsx
import React, { useContext } from 'react';
import { CartContext } from './Context.jsx';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);

  return (
    <Link to="/cart">
      <div className="cart-widget" style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
        <div className='badge' style={{ backgroundColor: 'red', color: 'white', padding: '0.2em 0.5em', marginLeft: '0.5em' }}>
          Carrito
          <FaShoppingCart /> {totalQuantity}
        </div>
      </div>
    </Link>
  );
};

export default CartWidget;