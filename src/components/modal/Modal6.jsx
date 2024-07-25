import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const Modal6 = ({ showModal6, handleCloseModal6 }) => {
  const [Id, setId] = useState("");
  const [rol, setRol] = useState("");
  const [kitNumber, setKitNum] = useState("");

  // Lógica para llenar las opciones del formulario de kits según el rol seleccionado
  const getKitOptions = () => {
    if (rol === "1") {
      return (
        <>
          <option value="S1">S1</option>
          <option value="S2">S2</option>
        </>
      );
    } else if (rol === "2") {
      return (
        <>
          <option value="D1">D1</option>
          <option value="D2">D2</option>
        </>
      );
    } else if (rol === "3") {
      return (
        <>
          <option value="A1">A1</option>
          <option value="A2">A2</option>
        </>
      );
    } else {
      return <option value="">---</option>;
    }
  };

  const handleAssignKit = () => {
    // Agrega la lógica aquí para asignar el kit al operario
    // ...

    // Cierra el modal después de procesar los datos
    handleCloseModal6();
  };

  return (
    <>
      <Modal show={showModal6} onHide={handleCloseModal6} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>Asignación de kit a operario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formId">
              <Form.Label>Id del kit</Form.Label>
              <Form.Control
                type="text"
                placeholder="Id del kit en caso de conocerlo"
                value={Id}
                onChange={(e) => setId(e.target.value)}
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
            <Form.Group controlId="formKitNumber">
              <Form.Label>Seleccione el kit a editar</Form.Label>
              <Form.Control
                as="select"
                value={kitNumber}
                onChange={(e) => setKitNum(e.target.value)}
              >
                {getKitOptions()}
              </Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal6}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleAssignKit}>
            Quitar herramienta del kit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Modal6;
