import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

const Modal5 = ({ showModal5, handleCloseModal5 }) => {
  const [key, setKey] = useState("asignar");
  const [idOperario, setIdOperario] = useState("");
  const [idHerramienta, setIdHerramienta] = useState("");
  const [idRecibir, setIdRecibir] = useState("");

  const handleAssignTool = () => {
    // Lógica para asignar herramienta a operario
    handleCloseModal5();
  };

  const handleReceiveTool = () => {
    // Lógica para recibir herramienta de operario (una sola herramienta)
    handleCloseModal5();
  };

  const handleReceiveAllTools = () => {
    // Lógica para recibir todas las herramientas de un operario
    handleCloseModal5();
  };

  return (
    <Modal
      show={showModal5}
      onHide={handleCloseModal5}
      animation={true}
      size="lg"
    >
      <Modal.Header closeButton>
        <Modal.Title>Gestión de Herramientas</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3"
        >
          <Tab eventKey="asignar" title="Asignar Herramienta">
            <Form>
              <Form.Group controlId="formIdOperario">
                <Form.Label>Id del Operario</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Id del operario"
                  value={idOperario}
                  onChange={(e) => setIdOperario(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formIdHerramienta">
                <Form.Label>Id de la Herramienta</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Id de la herramienta"
                  value={idHerramienta}
                  onChange={(e) => setIdHerramienta(e.target.value)}
                  required
                />
              </Form.Group>
            </Form>
          </Tab>
          <Tab eventKey="recibir" title="Recibir Herramienta">
            <Form>
              <Form.Group controlId="formIdRecibir">
                <Form.Label>Id del Operario</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Id del operario"
                  value={idRecibir}
                  onChange={(e) => setIdRecibir(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formIdHerramientaRecibir">
                <Form.Label>Id de la Herramienta (opcional)</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Id de la herramienta (opcional)"
                  value={idHerramienta}
                  onChange={(e) => setIdHerramienta(e.target.value)}
                />
              </Form.Group>
            </Form>
          </Tab>
        </Tabs>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal5}>
          Cerrar
        </Button>
        {key === "asignar" && (
          <Button variant="primary" onClick={handleAssignTool}>
            Asignar Herramienta
          </Button>
        )}
        {key === "recibir" && (
          <Button variant="primary" onClick={handleReceiveTool}>
            Recibir Herramienta
          </Button>
        )}
        {key === "recibir" && (
          <Button variant="primary" onClick={handleReceiveAllTools}>
            Recibir Todas las Herramientas
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
};

export default Modal5;
