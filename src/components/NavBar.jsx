// components/NavBar.jsx
import React from 'react';
import CartWidget from './CartWidget';
import {AiOutlineMenuUnfold} from "react-icons/ai";
import {AiFillHome} from "react-icons/ai";
import {VscGithub} from "react-icons/vsc";
import {TiSocialLinkedinCircular} from "react-icons/ti";
import SearchBar from "./SearchBar";



const NavBar = ({url}) => {

  const handleSubmit = (term)=>{
    console.log("Hagamos una busqueda de: ", term)
  }

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="#">
          <AiOutlineMenuUnfold size={23}/>
          <img src={url} alt="Logo"/>
        </a>
    
        <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
    
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item">
            <AiFillHome size={23}/>
            Inicio
          </a>
    
          <div className="navbar-item">
            <CartWidget />
          </div>

          <a className="navbar-item" href="https://github.com/LeoRousse">
            <VscGithub size={20}/>
          </a>

          <a className="navbar-item" href="https://www.linkedin.com/in/devleonardoquiroga/">
            <TiSocialLinkedinCircular size={34}/>
          </a>

          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">
              Mas
            </a>
    
            <div className="navbar-dropdown">
              <a className="navbar-item">
                Documentacion
              </a>
              <a className="navbar-item is-selected">
                Trabajos
              </a>
              <a className="navbar-item">
                Contacto
              </a>
              <div className="navbar-divider"></div>
              <a className="navbar-item">
                Reportar un Problema
              </a>
            </div>
          </div>

          <div className="navbar-item">
            <SearchBar enSubmit={handleSubmit}/>
          </div>

        </div>
    
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-primary">
                <strong>Registrarse</strong>
              </a>
              <a className="button is-light">
                Acceder
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;