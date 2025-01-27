import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount.jsx';
import { CartContext } from './Context.jsx';

function ItemDetail({ id, name, img, category, description, price, stock }) {
  const [ quantityAdded, setQuantityAdded ] = useState(0);
  const { addItem } = useContext(CartContext);

  const handleAdd = (quantity) => {
    setQuantityAdded(quantity);
    const item = { id, name, price };
    addItem(item, quantity);
  };

  return (
    <article className="box has-background-white-ter rounded-xl p-6 mt-6">
      <header className="has-text-centered mb-4">
        <h2 className="title is-3 has-text-primary">{name}</h2>
      </header>
      <div className="columns is-centered is-vcentered">
        {/* Columna para la imagen */}
        <div className="column is-4 has-text-centered">
          <figure className="image is-inline-block">
            <img
              src={img}
              alt={name}
              className="rounded-lg"
              style={{ transition: "transform 0.3s", maxHeight: "300px" }}
              onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
          </figure>
        </div>
        {/* Columna para el contenido */}
        <div className="column is-8">
          <section className="content">
            <p className="is-size-5 has-text-grey-dark">
              Categoría: <strong className="has-text-primary">{category}</strong>
            </p>
            <p className="py-3 has-text-grey-dark">{description}</p>
            <p className="is-size-4 has-text-grey-dark">
              Precio: <strong className="has-text-success">${price}</strong>
            </p>
            <p>
              Description: {description}
            </p>
          </section>
          <footer className="mt-5">
            {
              quantityAdded > 0 ? (
                /* Agregar estilos al /cart */
                <Link to="/cart" className="button">Pagar</Link>
              ) : (
                <ItemCount
                  initial={1}
                  stock={stock}
                  onAdd={handleAdd}
                />
              )
            }
          </footer>
        </div>
      </div>
    </article>
  );
}

export default ItemDetail;