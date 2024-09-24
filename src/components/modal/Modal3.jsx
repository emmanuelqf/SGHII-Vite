import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const Modal3 = ({ showModal3, handleCloseModal3 }) => {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [estado, setEstado] = useState("Nueva"); // Cambiado a "Nueva" como opción predeterminada
  const [imagen, setImagen] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!nombre || !descripcion || !imagen) {
      setError("Todos los campos son obligatorios.");
      return;
    }

    const formData = new FormData();
    formData.append("nombre", nombre);
    formData.append("descripcion", descripcion);
    formData.append("estado", estado);
    formData.append("imagen", imagen);

    fetch("/api/herramientas/create", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        handleCloseModal3();
      })
      .catch((error) => {
        console.error("Error:", error);
        setError("Error al crear la herramienta.");
      });
  };

  const handleImageChange = (e) => {
    setImagen(e.target.files[0]);
  };

  const handleModalClose = () => {
    setNombre("");
    setDescripcion("");
    setEstado("Nueva"); // Reinicia a "Nueva" al cerrar
    setImagen(null);
    setError("");
    handleCloseModal3();
  };

  return (
    <>
      <Modal show={showModal3} onHide={handleModalClose} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>Creación de herramienta</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formNombre">
              <Form.Label>Nombre de la herramienta</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nombre de la herramienta"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formDescripcion">
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                type="text"
                placeholder="Descripción de la herramienta"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formEstado">
              <Form.Label>Estado</Form.Label>
              <Form.Control
                as="select"
                value={estado}
                onChange={(e) => setEstado(e.target.value)}
              >
                <option value="Nueva">Nueva</option>
                <option value="Reparada">Reparada</option>
                <option value="Provisional">Provisional</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formImagen">
              <Form.Label>Imagen de la herramienta</Form.Label>
              <Form.Control
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
            </Form.Group>
            {error && <div className="text-danger mt-2">{error}</div>}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Registrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Modal3;
