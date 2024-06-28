import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SidebarMenu from "./SidebarMenu";
import Header from "./components/header/Header";

function App() {
  return (
    <div>
      <Header />
      <SidebarMenu />
    </div>
  );
}

export default App;
