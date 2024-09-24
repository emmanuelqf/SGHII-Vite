import React, { useState } from "react";
import { Modal, Button, Form, Tabs, Tab } from "react-bootstrap";

const Modal2 = ({ showModal2, handleCloseModal2 }) => {
  const [cedula, setCedula] = useState("");
  const [empleadoData, setEmpleadoData] = useState(null);
  const [message, setMessage] = useState("");
  const [key, setKey] = useState("buscar"); // Pestaña activa

  const handleSearchEmpleado = () => {
    // Lógica para buscar empleado
    if (!cedula) {
      setMessage("El campo no puede estar vacío.");
      return;
    }
    // Implementación de búsqueda
    fetch(`/api/empleados/${cedula}`)
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          setEmpleadoData(data);
          setMessage("");
        } else {
          setMessage("Empleado no encontrado.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setMessage("Error al buscar el empleado.");
      });
  };

  const handleModificarEmpleado = () => {
    // Lógica para modificar empleado
    setMessage("Empleado modificado con éxito.");
  };

  const handleEliminarEmpleado = () => {
    fetch(`/api/empleados/delete/${cedula}`, { method: "DELETE" })
      .then((response) => {
        if (response.ok) {
          setMessage("Empleado eliminado correctamente.");
          setEmpleadoData(null);
        } else {
          setMessage("Error al eliminar el empleado.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setMessage("Error al eliminar el empleado.");
      });
  };

  const handleClose = () => {
    setCedula("");
    setEmpleadoData(null);
    setMessage("");
    handleCloseModal2();
  };

  return (
    <>
      <Modal show={showModal2} onHide={handleClose} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>Gestionar Empleado</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Tabs activeKey={key} onSelect={(k) => setKey(k)} className="mb-3">
            <Tab eventKey="buscar" title="Buscar/Modificar Empleado">
              <Form>
                <Form.Group controlId="formCedula">
                  <Form.Label>Cédula del empleado</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ingrese la cédula"
                    value={cedula}
                    onChange={(e) => setCedula(e.target.value)}
                  />
                </Form.Group>
                <Button variant="info" onClick={handleSearchEmpleado}>
                  Buscar
                </Button>
                {empleadoData && (
                  <div className="mt-3">
                    <h5>Detalles del Empleado:</h5>
                    <p>
                      <strong>Nombre:</strong> {empleadoData.nombre}
                    </p>
                    <p>
                      <strong>Estado:</strong> {empleadoData.estado}
                    </p>
                    {/* Aquí puedes agregar más detalles del empleado */}
                    <Button variant="primary" onClick={handleModificarEmpleado}>
                      Modificar
                    </Button>
                  </div>
                )}
              </Form>
            </Tab>
            <Tab eventKey="eliminar" title="Eliminar Empleado">
              <Form>
                <Form.Group controlId="formCedulaEliminar">
                  <Form.Label>Cédula del empleado a eliminar</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ingrese la cédula"
                    value={cedula}
                    onChange={(e) => setCedula(e.target.value)}
                  />
                </Form.Group>
                <Button variant="danger" onClick={handleEliminarEmpleado}>
                  Eliminar
                </Button>
              </Form>
            </Tab>
          </Tabs>
          {message && <div className="text-danger mt-2">{message}</div>}
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

export default Modal2;
