import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/header/Header";
import SidebarMenuCollapsible from "./SidebarMenuCollapsible";

function App() {
  return (
    <div>
      <Header />
      <SidebarMenuCollapsible />
    </div>
  );
}

export default App;
