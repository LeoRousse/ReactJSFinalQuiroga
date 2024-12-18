// App.jsx
import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import logo from './img/logo.jpg';

const App = () => {
  return (
    <div>
      <div>
        <NavBar url={logo}/>
      </div>
      <div>
        <ItemListContainer greeting="¡Bienvenido a nuestra tienda!" />
      </div>
    </div>
  );
};

export default App;