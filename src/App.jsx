// App.jsx
import NavBar from './components/NavBar';
import logo from './img/logo.jpg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer.jsx";
import './App.css';

function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar url={logo}/>
      <Routes>
        <Route exact path="/" element={<ItemListContainer greeting={"Todos nuestros productos"} />} />
        <Route exact path="/category/:categoryId" element={<ItemListContainer greeting={"Productos por categoría"} />} />
        <Route exact path="/item/:itemId" element={<ItemDetailContainer />} />
        <Route path="*" element={<h1 className="flex justify-center my-12 text-6xl text-center">ERROR 404 NOT FOUND</h1>} />
      </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;