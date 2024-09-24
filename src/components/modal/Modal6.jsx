import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";

const Modal6 = ({ showModal6, handleCloseModal6 }) => {
  const [movimientos, setMovimientos] = useState([]);
  const [selectedMovimiento, setSelectedMovimiento] = useState(null);
  const [descripcion, setDescripcion] = useState("");
  const [tipoMovimiento, setTipoMovimiento] = useState("");
  const [idHerramienta, setIdHerramienta] = useState("");
  const [idEmpleado, setIdEmpleado] = useState("");

  useEffect(() => {
    // Lógica para obtener todos los movimientos al abrir el modal
    const fetchMovimientos = async () => {
      const response = await fetch(
        "http://localhost:8080/movimientoHerramienta/mostrar"
      );
      const data = await response.json();
      setMovimientos(data);
    };
    fetchMovimientos();
  }, [showModal6]); // Cargar datos al abrir el modal

  const handleSelectMovimiento = (movimiento) => {
    setSelectedMovimiento(movimiento);
    setDescripcion(movimiento.descripcion);
    setTipoMovimiento(movimiento.tipoMovimiento);
    setIdHerramienta(movimiento.herramienta.id);
    setIdEmpleado(movimiento.empleado.id);
  };

  const handleModifyMovimiento = async () => {
    // Lógica para modificar el movimiento
    const updatedMovimiento = {
      descripcion,
      tipoMovimiento,
      herramienta: { id: idHerramienta },
      empleado: { id: idEmpleado },
    };

    const response = await fetch(
      `http://localhost:8080/movimientoHerramienta/modificar`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedMovimiento),
      }
    );

    if (response.ok) {
      // Actualiza la lista de movimientos después de la modificación
      const updatedMovimientos = movimientos.map((mov) =>
        mov.id === selectedMovimiento.id ? updatedMovimiento : mov
      );
      setMovimientos(updatedMovimientos);
      handleCloseModal6();
    } else {
      console.error("Error al modificar el movimiento");
    }
  };

  const handleDeleteMovimiento = async (id) => {
    const response = await fetch(
      `http://localhost:8080/movimientoHerramienta/${id}`,
      {
        method: "DELETE",
      }
    );

    if (response.ok) {
      // Elimina el movimiento de la lista
      setMovimientos(movimientos.filter((mov) => mov.id !== id));
    } else {
      console.error("Error al eliminar el movimiento");
    }
  };

  return (
    <Modal
      show={showModal6}
      onHide={handleCloseModal6}
      animation={true}
      size="lg"
    >
      <Modal.Header closeButton>
        <Modal.Title>Gestión de Movimientos de Herramientas</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Descrip</th>
              <th>Tipo Movimiento</th>
              <th>ID Herramienta</th>
              <th>ID Empleado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {movimientos.map((movimiento) => (
              <tr
                key={movimiento.id}
                onClick={() => handleSelectMovimiento(movimiento)}
              >
                <td>{movimiento.descripcion}</td>
                <td>{movimiento.tipoMovimiento}</td>
                <td>{movimiento.herramienta.id}</td>
                <td>{movimiento.empleado.id}</td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => handleDeleteMovimiento(movimiento.id)}
                  >
                    Eliminar
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        {selectedMovimiento && (
          <Form>
            <Form.Group controlId="formDescripcion">
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                type="text"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formTipoMovimiento">
              <Form.Label>Tipo de Movimiento</Form.Label>
              <Form.Control
                type="text"
                value={tipoMovimiento}
                onChange={(e) => setTipoMovimiento(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formIdHerramienta">
              <Form.Label>ID de la Herramienta</Form.Label>
              <Form.Control
                type="number"
                value={idHerramienta}
                onChange={(e) => setIdHerramienta(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formIdEmpleado">
              <Form.Label>ID del Empleado</Form.Label>
              <Form.Control
                type="number"
                value={idEmpleado}
                onChange={(e) => setIdEmpleado(e.target.value)}
              />
            </Form.Group>
          </Form>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal6}>
          Cerrar
        </Button>
        <Button
          variant="primary"
          onClick={handleModifyMovimiento}
          disabled={!selectedMovimiento}
        >
          Modificar Movimiento
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Modal6;
