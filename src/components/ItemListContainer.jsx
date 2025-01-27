import { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig.js';
import ItemList from './ItemList.jsx';

function ItemListContainer({ greeting }) {
  const [ products, setProducts ] = useState([]);
  const [ loading, setLoading ] = useState(true);

  const { categoryId } = useParams(); 

  useEffect(() => {
    setLoading(true);

    const itemsRef = collection(db, "items");

    const q = categoryId ? query(itemsRef, where("category", "==", categoryId)) : itemsRef;

    getDocs(q)
      .then((response) => {
        const data = response.docs.map((doc) => ({ id: doc.id, ...doc.data()}));
        setProducts(data);
      })

      .catch((error) => {
        console.log("Error al hacer el fetch", error);
      })

      .finally(() => {
        setLoading(false);
      });

    }, [categoryId]);

  return (
    <div className="container mt-6">
      <h1 className="title is-2 has-text-centered has-text-black my-5">{greeting}</h1>
      <div className="buttons is-centered mb-5">
        <NavLink to={`/`} className="">
          Todos
        </NavLink>
        <NavLink to={`/category/programming`} className="">
          Programming
        </NavLink>
        <NavLink to={`/category/design`} className="">
          Design
        </NavLink>
      </div>
      {products.length > 0 ? (
        <ItemList products={products} />
      ) : (
        <div className="notification is-warning has-text-centered">
          <p>No se encontraron productos de esta categoría.</p>
        </div>
      )}
    </div>
  );
}

export default ItemListContainer;