import { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail.jsx';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig.js';

function ItemDetailContainer() {
  const [ product, setProduct ] = useState(null);
  const [ loading, setLoading ] = useState(true);
  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);

    const docRef = doc(db, "items", itemId);

    getDoc(docRef)
      .then((response) => {
        if(response.exists()) {
          const data = response.data();
          const product = { id: response.id, ...data };
          
          setProduct(product);
        } else {
          console.log("El producto no se encuentra.");
        }
      })

      .catch((error) => {
        console.error("Error al buscar el producto", error);
      })

      .finally(() => {
        setLoading(false);
      })

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