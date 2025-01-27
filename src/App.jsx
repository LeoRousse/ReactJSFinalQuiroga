// App.jsx
import NavBar from './components/NavBar';
import logo from './img/logo.jpg';
import { CartProvider } from './components/Context.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer.jsx';
import Checkout from './components/Checkout.jsx';
import Cart from './components/Cart.jsx';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar url={logo}/>
          <Routes>
            <Route exact path="/" element={<ItemListContainer greeting={"Te presentamos nuestros cursos:"} />} />
            <Route exact path="/category/:categoryId" element={<ItemListContainer greeting={"Productos por categoría"} />} />
            <Route exact path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route exact path="/checkout" element={<Checkout />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route path="*" element={<h1 className="flex justify-center my-12 text-6xl text-center">Error 404 Not Found</h1>} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  );
};

export default App;