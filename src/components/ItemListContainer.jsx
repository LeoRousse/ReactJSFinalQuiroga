import { useState, useEffect } from "react";
import { getProducts, getProductsByCategory } from "./asyncMock.jsx";
import ItemList from "./ItemList.jsx";
import { useParams } from "react-router-dom";

function ItemListContainer({ greeting }) {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All"); 
  const { categoryId } = useParams(); 

  useEffect(() => {
    const asyncFunc = selectedCategory === "All" ? getProducts : getProductsByCategory;

    asyncFunc(selectedCategory === "All" ? undefined : selectedCategory)
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [selectedCategory]); 

  // Función para manejar el cambio de categoría
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="container mt-6">
      <h1 className="title is-2 has-text-centered has-text-black my-5">{greeting}</h1>
      <div className="buttons is-centered mb-5">
        <button 
          className={`button ${selectedCategory === "All" ? "is-primary" : ""}`} 
          onClick={() => handleCategoryChange("All")}
        >
          Todos
        </button>
        <button 
          className={`button ${selectedCategory === "programming" ? "is-primary" : ""}`} 
          onClick={() => handleCategoryChange("programming")}
        >
          Programming
        </button>
        <button 
          className={`button ${selectedCategory === "design" ? "is-primary" : ""}`} 
          onClick={() => handleCategoryChange("design")}
        >
          Design
        </button>
      </div>
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