// components/ItemListContainer.jsx
import React from 'react';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="item-list-container" style={{ padding: '1em', backgroundColor: '#f5f5f5', borderRadius: '5px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)' }}>
      <h2 className="subtitle">{greeting}</h2>
    </div>
  );
};

export default ItemListContainer;