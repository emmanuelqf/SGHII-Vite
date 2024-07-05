import React from "react";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Modal2 = ({ showModal2, handleCloseModal2 }) => {
  return (
    <>
      <Modal show={showModal2} onHide={handleCloseModal2} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>Consultar Operario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <span>
            <div className="container mt-4">
              <div className="row">
                <div className="col-md-12 ">
                  <form method="post" action="/servlet" id="form">
                    <div className="mb-3">
                      <label htmlFor="nombre_cons" className="form-label">
                        Consulta de operario por nombre
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="nombre_cons"
                        name="nombre de operario a consultar"
                        placeholder="Nombre completo"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </span>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal2}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleCloseModal2}>
            Validar operario
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Modal2;
