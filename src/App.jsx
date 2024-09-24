import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SidebarMenuCollapsible from "./SidebarMenuCollapsible";
import Header2 from "./components/header/Header2";
import Home from "./components/home/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header2 />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <SidebarMenuCollapsible />
          </div>
          <div className="col-md-9">
            <Routes>
              <Route path="/" element={<Home />} />
              {/* Agrega más rutas internas si es necesario */}
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
