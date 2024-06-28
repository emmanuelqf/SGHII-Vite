import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/dist/dropdown";
import "./SidebarMenu.css";
import {
  AreaChartOutlined,
  IdcardOutlined,
  ToolFilled,
  DatabaseFilled,
} from "@ant-design/icons";

const SidebarMenu = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="bg-dark col-auto col-md-2 min-vh-100 d-flex justify-content-between flex-column">
          <div>
            <a className="texto-decoration-none text-white d-non d-sm-inline d-flex align-itemcenter ms-3 mt-2"></a>

            <ul class="nav nav-pills flex-column">
              <li class="nav-item text-white fs-4 my-1">
                <a
                  href="#"
                  class="nav-link text-white fs-5"
                  aria-current="page"
                >
                  <AreaChartOutlined />
                  <span className="ms-3 d-none d-sm-inline">SGHII</span>
                </a>
                <hr className="text-secondary" />
              </li>
              <li class="nav-item text-white fs-4 my-1">
                <a
                  href="#"
                  class="nav-link text-white fs-5"
                  aria-current="page"
                >
                  <IdcardOutlined />
                  <span className="ms-3 d-none d-sm-inline">Operarios</span>
                </a>
              </li>
              <li class="nav-item text-white fs-4 my-1">
                <a
                  href="#"
                  class="nav-link text-white fs-5"
                  aria-current="page"
                >
                  <ToolFilled />
                  <span className="ms-3 d-none d-sm-inline">Herramientas</span>
                </a>
              </li>
              <li class="nav-item text-white fs-4 my-1">
                <a
                  href="#"
                  class="nav-link text-white fs-5"
                  aria-current="page"
                >
                  <DatabaseFilled />
                  <span className="ms-3 d-none d-sm-inline">Asignaciones</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarMenu;
