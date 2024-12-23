import Item from "./Item.jsx";

function ItemList({ products }) {
  return (
    <div className="container mt-6">
      <div className="columns is-multiline">
        {products.map(prod => (
          <div className="column is-one-third" key={prod.id}>
            <Item {...prod} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemList;