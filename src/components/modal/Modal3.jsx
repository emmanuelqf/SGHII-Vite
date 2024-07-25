import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const Modal3 = ({ showModal3, handleCloseModal3 }) => {
  const [nombre, setNombre] = useState("");
  const [imagen, setImagen] = useState(null); // Cambio: estado para la imagen
  const [marca, setMarca] = useState("");

  const handleSubmit = () => {
    // Aquí puedes envio de los datos al servidor (nombre, imagen, marca).
    // ...

    // Cerrar el modal después de procesar los datos.
    handleCloseModal3();
  };

  const handleImageChange = (e) => {
    // Maneja el cambio de la imagen
    const file = e.target.files[0];
    setImagen(file);
  };

  return (
    <>
      <Modal show={showModal3} onHide={handleCloseModal3} animation={true}>
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
            <Form.Group controlId="formMarca">
              <Form.Label>Marca</Form.Label>
              <Form.Control
                type="text"
                placeholder="Marca"
                value={marca}
                onChange={(e) => setMarca(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formImagen">
              <Form.Label>Imagen de la herramienta</Form.Label>
              <Form.Control
                type="file" // Cambio: campo de carga de archivo
                accept="image/*" // Acepta solo imágenes
                onChange={handleImageChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal3}>
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
