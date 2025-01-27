// Aplicar Bulma
import { useContext } from 'react';
import CartItem from './CartItem.jsx';
import { Link } from 'react-router-dom';
import { CartContext } from './Context.jsx';

const Cart = () => {
  const { cart, clearCart, total, totalQuantity } = useContext(CartContext);

  if (totalQuantity === 0) {
    return (
      <div className="container has-text-centered">
        <h1 className="title">No hay items en el carrito</h1>
        <Link to="/" className="button is-primary">Productos</Link>
      </div>
    );
  }

  return (
    <div className="container mt-6">
      <div className="box">
        { cart.map(product => <CartItem key={product.id} {...product}/>) }
        <h3 className="title is-4 has-text-centered mt-5">Total: ${total}</h3>
        <div className="buttons is-centered mt-5">
          <button className="button is-danger is-medium" onClick={() => clearCart()}>Limpiar el carrito</button>
          <Link to="/checkout" className="button is-success is-medium">Checkout</Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;