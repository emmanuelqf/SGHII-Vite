import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form"; // Agrega esta línea

const Modal4 = ({ showModal4, handleCloseModal4 }) => {
  const [ToolToDown, setDownTool] = useState("");
  const [Id, setId] = useState("");

  return (
    <>
      <Modal show={showModal4} onHide={handleCloseModal4} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>Dar de baja herramienta</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container mt-4">
            <div className="row">
              <div className="col-md-12">
                <Form>
                  <Form.Group controlId="formNombre">
                    <Form.Label>
                      Nombre de la herramienta a dar de baja
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Ingrese nombre de herramienta"
                      value={ToolToDown}
                      onChange={(e) => setDownTool(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group controlId="formMarca">
                    <Form.Label>Id del operario asignatario</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Id del operario que tiene asignada la Herramienta"
                      value={Id}
                      onChange={(e) => setId(e.target.value)}
                    />
                  </Form.Group>
                </Form>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal4}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleCloseModal4}>
            Dar de baja
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Modal4;
