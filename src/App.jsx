// App.jsx
import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

const App = () => {
  return (
    <div className="columns">
      <div className="column is-one-fifth">
        <NavBar />
      </div>
      <div className="column">
        <ItemListContainer greeting="¡Bienvenido a nuestra tienda!" />
      </div>
    </div>
  );
};

export default App;