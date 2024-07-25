import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Modal1 = ({ showModal1, handleCloseModal1 }) => {
  // Estado local para los campos del formulario
  const [nombre, setNombre] = useState("");
  const [rol, setRol] = useState("");

  // Manejadores para actualizar los estados
  const handleNombreChange = (e) => {
    setNombre(e.target.value);
  };

  const handleRolChange = (e) => {
    setRol(e.target.value);
  };

  //lógica aquí
  const handleValidarOperario = () => {
    // ...
  };

  return (
    <>
      <Modal show={showModal1} onHide={handleCloseModal1} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>Registrar Operario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div id="menu" />
          <div className="container mt-4">
            <div className="row">
              <div className="col-md-12 ">
                <form method="post" action="/servlet" id="form">
                  <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">
                      Nombre
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="nombre"
                      name="nombre"
                      placeholder="Nombre completo"
                      value={nombre}
                      onChange={handleNombreChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="rol" className="form-label">
                      Rol
                    </label>
                    <select
                      name="rol"
                      id="rol"
                      className="form-control"
                      value={rol}
                      onChange={handleRolChange}
                    >
                      <option value="">---</option>
                      <option value={1}>Soldador</option>
                      <option value={2}>Doblador</option>
                      <option value={3}>Auxiliar</option>
                    </select>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal1}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleValidarOperario}>
            Validar operario
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Modal1;
