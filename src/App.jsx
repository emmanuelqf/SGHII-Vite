import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SidebarMenuCollapsible from "./SidebarMenuCollapsible";
import Header2 from "./components/header/Header2";
import Home from "./components/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//const [open, setOpen] = useState(true);

function App() {
  return (
    <div>
      <Header2 />

      <div class="container-fluid">
        <div class="row">
          <div class="col-md-3">
            <SidebarMenuCollapsible />
          </div>
          <div className="col-md-9">
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />{" "}
              </Routes>
            </BrowserRouter>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
