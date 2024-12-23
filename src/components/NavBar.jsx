import React, { useState } from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import { AiOutlineMenuUnfold, AiFillHome } from "react-icons/ai";
import { VscGithub } from "react-icons/vsc";
import { TiSocialLinkedinCircular } from "react-icons/ti";

const NavBar = ({ url }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className="navbar is-spaced has-shadow" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="#" onClick={toggleMenu}>
          <AiOutlineMenuUnfold size={23} />
          <img src={url} alt="Logo" style={{ marginLeft: "10px", height: "40px" }} />
        </a>
        <a
          role="button"
          className={`navbar-burger ${isActive ? "is-active" : ""}`}
          aria-label="menu"
          aria-expanded={isActive}
          onClick={toggleMenu}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div className={`navbar-menu ${isActive ? "is-active" : ""}`}>
        <div className="navbar-start">
          <Link className="navbar-item" to="/">
            <AiFillHome size={23} />
            <span style={{ marginLeft: "5px" }}>Inicio</span>
          </Link>

          <div className="navbar-item">
            <CartWidget />
          </div>

          <a className="navbar-item" href="https://github.com/LeoRousse" target="_blank" rel="noopener noreferrer">
            <VscGithub size={20} className="icon-hover" />
          </a>

          <a className="navbar-item" href="https://www.linkedin.com/in/devleonardoquiroga/" target="_blank" rel="noopener noreferrer">
            <TiSocialLinkedinCircular size={34} className="icon-hover" />
          </a>

          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">Más</a>
            <div className="navbar-dropdown">
              <Link className="navbar-item" to="/documentation">Documentación</Link>
              <Link className="navbar-item" to="/works">Trabajos</Link>
              <Link className="navbar-item" to="/contact">Contacto</Link>
              <div className="navbar-divider"></div>
              <Link className="navbar-item" to="/report-problem">Reportar un Problema</Link>
            </div>
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <Link className="button is-primary is-rounded" to="/register">
                <strong>Registrarse</strong>
              </Link>
              <Link className="button is-light is-rounded" to="/login">
                Acceder
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
