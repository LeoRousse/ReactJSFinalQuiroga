import { useState, useEffect } from "react";
import { getProductById } from "./asyncMock.jsx";
import ItemDetail from "./ItemDetail.jsx";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams();

  useEffect(() => {
    getProductById(itemId)
      .then(response => {
        setProduct(response);
        setLoading(false); 
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, [itemId]);

  return (
    <div className="container mt-6">
      {loading ? (
        <div className="has-text-centered">
          <p className="title is-4">Cargando...</p>
          <progress className="progress is-small is-primary" max="100">Cargando...</progress>
        </div>
      ) : (
        product ? (
          <ItemDetail {...product} />
        ) : (
          <div className="notification is-danger has-text-centered">
            <p>No se encontró el producto.</p>
          </div>
        )
      )}
    </div>
  );
}

export default ItemDetailContainer;