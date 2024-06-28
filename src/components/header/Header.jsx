import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src="./logo.png" style={{ maxWidth: 200, height: "auto" }} />
        </a>
        <div className="collapse navbar-collapse" id="navbarNav">
          {/* <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="menu.html">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Sobre los creadores
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Ayuda
              </a>
            </li>
          </ul> */}
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link disabled" href="#">
                Rol Actual: Administrador
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="index.html">
                Cerrar Sesión
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
