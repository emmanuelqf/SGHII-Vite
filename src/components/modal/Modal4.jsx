import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

const Modal4 = ({ showModal4, handleCloseModal4 }) => {
  const [toolId, setToolId] = useState("");
  const [toolDetails, setToolDetails] = useState(null);
  const [message, setMessage] = useState("");
  const [key, setKey] = useState("obtener"); // Pestaña activa

  const handleFetchTool = () => {
    fetch(`/api/herramientas/${toolId}`)
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          setToolDetails(data);
          setMessage("");
        } else {
          setMessage("Herramienta no encontrada.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setMessage("Error al obtener la herramienta.");
      });
  };

  const handleDeleteTool = () => {
    fetch(`/api/herramientas/delete/${toolId}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          setMessage("Herramienta eliminada correctamente.");
          setToolDetails(null);
        } else {
          setMessage("Error al eliminar la herramienta.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setMessage("Error al eliminar la herramienta.");
      });
  };

  const handleClose = () => {
    setToolId("");
    setToolDetails(null);
    setMessage("");
    handleCloseModal4();
  };

  return (
    <>
      <Modal show={showModal4} onHide={handleClose} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>Gestión de Herramientas</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Tabs activeKey={key} onSelect={(k) => setKey(k)} className="mb-3">
            <Tab eventKey="obtener" title="Obtener / Eliminar">
              <Form>
                <Form.Group controlId="formToolId">
                  <Form.Label>ID de la herramienta</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ingrese el ID de la herramienta"
                    value={toolId}
                    onChange={(e) => setToolId(e.target.value)}
                  />
                </Form.Group>
                <Button variant="info" onClick={handleFetchTool}>
                  Obtener herramienta
                </Button>
                {toolDetails && (
                  <>
                    <div className="mt-3">
                      <h5>Detalles de la herramienta:</h5>
                      <p>
                        <strong>Nombre:</strong> {toolDetails.nombre}
                      </p>
                      <p>
                        <strong>Descripción:</strong> {toolDetails.descripcion}
                      </p>
                      <p>
                        <strong>Estado:</strong> {toolDetails.estado}
                      </p>
                    </div>
                    <Button
                      variant="danger"
                      className="mt-2"
                      onClick={handleDeleteTool}
                    >
                      Eliminar herramienta
                    </Button>
                  </>
                )}
                {message && <div className="text-danger mt-2">{message}</div>}
              </Form>
            </Tab>
            <Tab eventKey="registrar" title="Registrar Baja">
              <Form>
                <Form.Group controlId="formToolIdBaja">
                  <Form.Label>ID de la herramienta a dar de baja</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ingrese el ID de la herramienta"
                    value={toolId}
                    onChange={(e) => setToolId(e.target.value)}
                  />
                </Form.Group>
                <Button variant="warning" className="mt-2">
                  Dar de baja
                </Button>
              </Form>
            </Tab>
            <Tab eventKey="verificar" title="Verificar Estado">
              <Form>
                <Form.Group controlId="formToolIdVerificar">
                  <Form.Label>ID de la herramienta a verificar</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ingrese el ID de la herramienta"
                    value={toolId}
                    onChange={(e) => setToolId(e.target.value)}
                  />
                </Form.Group>
                <Button variant="success" className="mt-2">
                  Verificar estado
                </Button>
              </Form>
            </Tab>
          </Tabs>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Modal4;
