import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/dist/dropdown";
import "./SidebarMenu.css";
import {
  AreaChartOutlined,
  IdcardOutlined,
  ToolFilled,
  DatabaseFilled,
  UserOutlined,
} from "@ant-design/icons";

const SidebarMenuCollapsible = () => {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark"
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
            className="btn btn-toggle text-white align-items-center rounded"
            data-bs-toggle="collapse"
            data-bs-target="#home-collapse"
            aria-expanded="true"
          >
            <IdcardOutlined />
            <span className="d-non d-sm-inline d-flex align-itemcenter ms-3 mt-2">
              Operarios
            </span>
          </button>
          <div className="collapse show" id="home-collapse" style={{}}>
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li>
                <a
                  href="#"
                  className="d-non d-sm-inline d-flex align-itemcenter ms-3 mt-2 text-decoration-none text-white"
                >
                  Registrar operario
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="d-non d-sm-inline d-flex align-itemcenter ms-3 mt-2 text-decoration-none text-white"
                >
                  Consultar operario
                </a>
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
              Herramientas
            </span>
          </button>
          <div className="collapse" id="dashboard-collapse" style={{}}>
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li>
                <a
                  href="#"
                  className="d-non d-sm-inline d-flex align-itemcenter ms-3 mt-2 text-decoration-none text-white"
                >
                  Crear herramienta
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="d-non d-sm-inline d-flex align-itemcenter ms-3 mt-2 text-decoration-none text-white"
                >
                  Dar baja herramienta
                </a>
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
                <a
                  href="#"
                  className="d-non d-sm-inline d-flex align-itemcenter ms-3 mt-2 text-decoration-none text-white"
                >
                  Asignación Kits a operarios
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="d-non d-sm-inline d-flex align-itemcenter ms-3 mt-2 text-decoration-none text-white"
                >
                  Modificación Kits
                </a>
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
  );
};

export default SidebarMenuCollapsible;
