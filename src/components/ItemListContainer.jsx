import { useState, useEffect } from "react";
import { getProducts, getProductsByCategory } from "./asyncMock.jsx";
import ItemList from "./ItemList.jsx";
import { useParams } from "react-router-dom";

function ItemListContainer({ greeting }) {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const asyncFunc = categoryId ? getProductsByCategory : getProducts;

    asyncFunc(categoryId)
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [categoryId]);

  return (
    <div className="container mt-6">
      <h1 className="title is-2 has-text-centered has-text-black my-5">{greeting}</h1>
      {products.length > 0 ? (
        <ItemList products={products} />
      ) : (
        <div className="notification is-warning has-text-centered">
          <p>No se encontraron productos en esta categoría.</p>
        </div>
      )}
    </div>
  );
}

export default ItemListContainer;