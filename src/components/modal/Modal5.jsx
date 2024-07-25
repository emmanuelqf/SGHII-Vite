import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const Modal5 = ({ showModal5, handleCloseModal5 }) => {
  const [Id, setId] = useState("");
  const [rol, setRol] = useState("");

  const handleAssignKit = () => {
    // Poner lógica aquí

    handleCloseModal5();
  };

  return (
    <>
      <Modal show={showModal5} onHide={handleCloseModal5} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>Asignación de kit a operario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formNombre">
              <Form.Label>Id del operario</Form.Label>
              <Form.Control
                type="text"
                placeholder="Id de operario"
                value={Id}
                onChange={(e) => setNombre(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formRol">
              <Form.Label>Rol</Form.Label>
              <Form.Control
                as="select"
                value={rol}
                onChange={(e) => setRol(e.target.value)}
              >
                <option value="">---</option>
                <option value="1">Soldador</option>
                <option value="2">Doblador</option>
                <option value="3">Auxiliar</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal5}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleAssignKit}>
            Asignar kit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Modal5;
