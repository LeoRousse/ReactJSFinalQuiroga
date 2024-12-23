import { useState } from "react";

function ItemCount({ stock, initial, onAdd }) {
  const [quantity, setQuantity] = useState(initial);

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="has-text-centered">
      <div className="buttons is-centered mb-3">
        <button 
          onClick={decrement} 
          className="button is-danger is-rounded" 
          disabled={quantity <= 1}
        >
          -
        </button>
        <h4 className="my-auto px-3 py-1 font-bold text-2xl">{quantity}</h4>
        <button 
          onClick={increment} 
          className="button is-success is-rounded" 
          disabled={quantity >= stock}
        >
          +
        </button>
      </div>
      <div>
        <button 
          onClick={() => onAdd(quantity)} 
          disabled={stock === 0} 
          className="button is-primary is-fullwidth"
        >
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
}

export default ItemCount;