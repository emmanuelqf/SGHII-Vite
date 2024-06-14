import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

const Login = () => {
  return (
    <div>
      <main className="container mt-5">
        <header className="text-center" id="main-header">
          <h1>Sistema de Gestión de Herramientas</h1>
        </header>
        <div className="row mt-5">
          <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center mb-5">
            <img
              src="./logo.png"
              alt="Logo"
              className="mt-5 mb-4"
              style={{ maxWidth: 400, height: "auto" }}
            />
            <h2 className="display-6" style={{ fontSize: 20 }}>
              Mejoramiento Continuo...
            </h2>
            <a href="#">(Continuar sin autenticación)</a>
          </div>
          <div className="col-lg-6">
            <div className="card">
              <div className="card-header">
                <b>Acceso de Usuarios</b>
              </div>
              <div className="card-body">
                <form id="login-form" className="" noValidate="">
                  <div className="mb-3">
                    <label htmlFor="usuario" className="form-label fw-bold">
                      Usuario
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="usuario"
                      placeholder="Ingrese su usuario"
                      required=""
                    />
                    <div className="invalid-feedback">
                      El nombre de usuario es obligatorio.
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="clave" className="form-label fw-bold">
                      Contraseña
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="clave"
                      placeholder="Ingrese su contraseña"
                      required=""
                    />
                    <div className="invalid-feedback" />
                  </div>
                  <div className="d-flex justify-content-between mb-4">
                    <button
                      type="button"
                      id="btnIniciar"
                      className="btn btn-primary"
                    >
                      Iniciar sesión
                    </button>
                    <input
                      className="btn btn-secondary"
                      type="button"
                      id="togglePasswordButton"
                      defaultValue="Mostrar contraseña"
                    />
                  </div>
                  <div id="errorMessage" style={{ display: "none" }} />
                </form>
                <a href="#">Olvidó su contraseña</a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
