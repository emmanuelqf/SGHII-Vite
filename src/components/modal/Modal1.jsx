import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Modal1 = ({ showModal1, handleCloseModal1 }) => {
  // Estado local para los campos del formulario
  const [nombre, setNombre] = useState("");
  const [cedula, setCedula] = useState("");
  const [cargo, setCargo] = useState("");
  const [errors, setErrors] = useState({});

  // Manejadores para actualizar los estados
  const handleNombreChange = (e) => {
    const value = e.target.value;
    if (/^[a-zA-Z\s]*$/.test(value)) {
      setNombre(value);
      setErrors((prev) => ({ ...prev, nombre: "" }));
    } else {
      setErrors((prev) => ({ ...prev, nombre: "Solo se permiten letras" }));
    }
  };

  const handleCedulaChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setCedula(value);
      setErrors((prev) => ({ ...prev, cedula: "" }));
    } else {
      setErrors((prev) => ({ ...prev, cedula: "Solo se permiten números" }));
    }
  };

  const handleCargoChange = (e) => {
    setCargo(e.target.value);
  };

  // Lógica aquí
  const handleValidarEmpleado = () => {
    // Validaciones adicionales si es necesario
    if (!nombre) {
      setErrors((prev) => ({ ...prev, nombre: "El nombre es obligatorio" }));
    }
    if (!cedula) {
      setErrors((prev) => ({ ...prev, cedula: "La cédula es obligatoria" }));
    }
    if (!cargo) {
      setErrors((prev) => ({ ...prev, cargo: "El cargo es obligatorio" }));
    }
    // ...
  };

  return (
    <>
      <Modal show={showModal1} onHide={handleCloseModal1} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>Registrar Empleado</Modal.Title>
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
                    {errors.nombre && (
                      <div className="text-danger">{errors.nombre}</div>
                    )}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="cedula" className="form-label">
                      Cédula
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="cedula"
                      name="cedula"
                      placeholder="Número de cédula"
                      value={cedula}
                      onChange={handleCedulaChange}
                    />
                    {errors.cedula && (
                      <div className="text-danger">{errors.cedula}</div>
                    )}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="cargo" className="form-label">
                      Cargo
                    </label>
                    <select
                      name="cargo"
                      id="cargo"
                      className="form-control"
                      value={cargo}
                      onChange={handleCargoChange}
                    >
                      <option value="">---</option>
                      <option value="Trazador">Trazador</option>
                      <option value="Doblador">Doblador</option>
                      <option value="Soldador">Soldador</option>
                      <option value="Pulidor">Pulidor</option>
                      <option value="Auxiliar">Auxiliar</option>
                    </select>
                    {errors.cargo && (
                      <div className="text-danger">{errors.cargo}</div>
                    )}
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
          <Button variant="primary" onClick={handleValidarEmpleado}>
            Validar empleado
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Modal1;
