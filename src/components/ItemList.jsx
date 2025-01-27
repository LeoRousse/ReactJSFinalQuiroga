import Item from './Item.jsx';

function ItemList({ products }) {
  return (
    <div className="container mt-6">
      <div className="columns is-multiline">
        {products.map(product => (
          <div className="column is-one-third" key={product.id}>
            <Item {...product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemList;