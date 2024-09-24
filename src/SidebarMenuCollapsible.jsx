import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/dist/dropdown";
import "./SidebarMenuCollapsible.css";
import {
  AreaChartOutlined,
  IdcardOutlined,
  ToolFilled,
  DatabaseFilled,
  UserOutlined,
} from "@ant-design/icons";
import Modal1 from "./components/modal/Modal1";
import Modal2 from "./components/modal/Modal2";
import Modal3 from "./components/modal/Modal3";
import Modal4 from "./components/modal/Modal4";
import Modal5 from "./components/modal/Modal5";
import Modal6 from "./components/modal/Modal6";

const SidebarMenuCollapsible = () => {
  const [showModal1, setShowModal1] = useState(false);
  const handleCloseModal1 = () => setShowModal1(false);
  const handleShowModal1 = () => setShowModal1(true);

  const [showModal2, setShowModal2] = useState(false);
  const handleCloseModal2 = () => setShowModal2(false);
  const handleShowModal2 = () => setShowModal2(true);

  const [showModal3, setShowModal3] = useState(false);
  const handleCloseModal3 = () => setShowModal3(false);
  const handleShowModal3 = () => setShowModal3(true);

  const [showModal4, setShowModal4] = useState(false);
  const handleCloseModal4 = () => setShowModal4(false);
  const handleShowModal4 = () => setShowModal4(true);

  const [showModal5, setShowModal5] = useState(false);
  const handleCloseModal5 = () => setShowModal5(false);
  const handleShowModal5 = () => setShowModal5(true);

  const [showModal6, setShowModal6] = useState(false);
  const handleCloseModal6 = () => setShowModal6(false);
  const handleShowModal6 = () => setShowModal6(true);

  return (
    <>
      <div
        className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark sidebar"
        style={{ width: 280 }}
      >
        <a
          href="/"
          className="d-flex align-items-center pb-3 mb-3 light-link text-white text-decoration-none border-bottom"
        >
          <AreaChartOutlined />
          <span className="d-non d-sm-inline d-flex align-itemcenter ms-3 mt-2">
            SGHII
          </span>
        </a>
        <ul className="list-unstyled ps-0">
          <li className="mb-1">
            <button
              className="btn btn-toggle text-white align-items-center rounded collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#home-collapse"
              aria-expanded="false"
            >
              <IdcardOutlined />
              <span className="d-non d-sm-inline d-flex align-itemcenter ms-3 mt-2">
                Empleados
              </span>
            </button>
            <div className="collapse" id="home-collapse" style={{}}>
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li>
                  <button
                    className="btn btn-toggle text-white align-items-center rounded"
                    onClick={handleShowModal1}
                  >
                    Registrar empleado
                  </button>
                </li>
                <li>
                  <button
                    className="btn btn-toggle text-white align-items-center rounded"
                    onClick={handleShowModal2}
                  >
                    Consultar empleado
                  </button>
                </li>
              </ul>
            </div>
          </li>
          <li className="mb-1">
            <button
              className="btn btn-toggle text-white align-items-center rounded collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#dashboard-collapse"
              aria-expanded="false"
            >
              <ToolFilled />
              <span className="d-non d-sm-inline d-flex align-itemcenter ms-3 mt-2">
                Herramienta
              </span>
            </button>
            <div className="collapse" id="dashboard-collapse" style={{}}>
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li>
                  <button
                    className="btn btn-toggle text-white align-items-center rounded"
                    onClick={handleShowModal3}
                  >
                    Crear herramienta
                  </button>
                </li>
                <li>
                  <button
                    className="btn btn-toggle text-white align-items-center rounded"
                    onClick={handleShowModal4}
                  >
                    Opciones herramienta
                  </button>
                </li>
              </ul>
            </div>
          </li>
          <li className="mb-1">
            <button
              className="btn btn-toggle align-items-center text-white rounded collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#orders-collapse"
              aria-expanded="false"
            >
              <DatabaseFilled />
              <span className="d-non d-sm-inline d-flex align-itemcenter ms-3 mt-2">
                Asignaciones
              </span>
            </button>
            <div className="collapse" id="orders-collapse" style={{}}>
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li>
                  <button
                    className="btn btn-toggle text-white align-items-center rounded"
                    onClick={handleShowModal5}
                  >
                    Asignar o Recibir
                  </button>
                </li>
                <li>
                  <button
                    className="btn btn-toggle text-white align-items-center rounded"
                    onClick={handleShowModal6}
                  >
                    Movimiento herramienta
                  </button>
                </li>
              </ul>
            </div>
          </li>
          <li className="border-top my-3" />
          <li className="mb-1">
            <button
              className="btn btn-toggle text-white align-items-center rounded collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#account-collapse"
              aria-expanded="false"
            >
              <UserOutlined />
              <span className="d-non d-sm-inline d-flex align-itemcenter ms-3 mt-2">
                Cuenta
              </span>
            </button>
            <div className="collapse" id="account-collapse" style={{}}>
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li>
                  <a
                    href="#"
                    className="d-non d-sm-inline d-flex align-itemcenter ms-3 mt-2 text-decoration-none text-white"
                  >
                    Perfil
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="d-non d-sm-inline d-flex align-itemcenter ms-3 mt-2 text-decoration-none text-white"
                  >
                    Configuración
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="d-non d-sm-inline d-flex align-itemcenter ms-3 mt-2 text-decoration-none text-white"
                  >
                    Cerrar sesión
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <Modal1 showModal1={showModal1} handleCloseModal1={handleCloseModal1} />
      <Modal2 showModal2={showModal2} handleCloseModal2={handleCloseModal2} />
      <Modal3 showModal3={showModal3} handleCloseModal3={handleCloseModal3} />
      <Modal4 showModal4={showModal4} handleCloseModal4={handleCloseModal4} />
      <Modal5 showModal5={showModal5} handleCloseModal5={handleCloseModal5} />
      <Modal6 showModal6={showModal6} handleCloseModal6={handleCloseModal6} />
    </>
  );
};

export default SidebarMenuCollapsible;
