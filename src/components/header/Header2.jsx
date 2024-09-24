import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { useNavigate } from "react-router-dom"; // Importa useNavigate

const Header2 = () => {
  const navigate = useNavigate(); // Usa el hook useNavigate

  const handleLogout = () => {
    // Aquí puedes agregar la lógica de cierre de sesión si es necesario
    navigate("/"); // Redirige al login
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src="./logo.png"
            style={{ maxWidth: 200, height: "auto" }}
            alt="Logo"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link disabled" href="#">
                Rol Actual: Administrador
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={handleLogout}>
                Cerrar Sesión
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header2;
